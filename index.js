const Discord = require('discord.js');
const {mongoConnect, addToScore, fetchTopTen} = require('./mongo.js');
const embeds = require('./embeds.js');
const questions = require('./questions.js');

const {token} = require('./secrets.json');

const client = new Discord.Client();
client.login(token);

let botTriviaChannel;
let botQuestions;
const botTimeout = 10000;

let botQuestion;
let botAnswers = [];

const leaderboardUpdatePeriod = 10000;

// After the bot is logged in and ready
client.once('ready', async () => {
  // Gets the #bot-trivia channel
  botTriviaChannel = await client.channels.fetch('779241835649957939');
  await mongoConnect();

  // Starts sending questions to #bot-trivia
  botNewQuestion('first');
  botQuestions = setInterval(botNewQuestion, botTimeout, null);

  updateLeaderboard();
});

client.on('message', async (msg) => {
  if (msg.content.startsWith('!') && !msg.author.bot) {
    const args = msg.content.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'purge') {
      const numberOfMessages = parseInt(args[0]);
      if (!numberOfMessages || args[2] || !Number.isInteger(numberOfMessages) || !msg.member.roles.cache.has('779241416688926740')) return;
      msg.channel.bulkDelete(numberOfMessages, true).then(() => {
        msg.channel.send(`Deleted ${numberOfMessages} messages.`).then((a) => a.delete(3000));
      });
    }

    return;
  }

  if (msg.channel.id == botTriviaChannel.id && botAnswers.includes(msg.content)) {
    // Stops old bot trivia question
    clearInterval(botQuestions);

    addToScore(msg.member.id, 1);

    // Starts new bot trivia question
    botNewQuestion(msg.member);
    botQuestions = setInterval(botNewQuestion, botTimeout, null);
  }
});

/**
 * Sends a new bot question
 * @param {Discord.GuildMember} answerer
 */
async function botNewQuestion(answerer) {
  if (answerer !== 'first') {
    await botTriviaChannel.send(answerer ? embeds.correct(answerer) : embeds.notAnswered());
  }

  const newQuestion = await fetchBotQuestion();

  botQuestion = newQuestion[0];
  botAnswers = newQuestion[1];

  // Sends the trivia question to the #bot-trivia channel
  await botTriviaChannel.send(embeds.botQuestion(botQuestion));
}

/**
 * Fetches a question for the bot from questions.js
 * @return {Array}
 */
function fetchBotQuestion() {
  const q = questions[Math.floor(Math.random() * questions.length)];
  return [q.question, q.answer];
}

/**
 * Updates the leaderboard in #leaderboard
 */
async function updateLeaderboard() {
  const leaderboardChannel = await client.channels.fetch('779461499113439243');
  const weeklyUserObjs = await fetchTopTen('weeklyScores');
  const totalUserObjs = await fetchTopTen('totalScores');

  await leaderboardChannel.messages.fetch({limit: 1}).then(async (messages) => {
    const lastLeaderboardMessage = messages.first();

    if (lastLeaderboardMessage) {
      await lastLeaderboardMessage.edit(embeds.leaderboard(weeklyUserObjs, totalUserObjs));
    } else {
      await leaderboardChannel.send(embeds.leaderboard(weeklyUserObjs, totalUserObjs));
    }
  }).catch(console.error);

  setTimeout(updateLeaderboard, leaderboardUpdatePeriod);
}

const Discord = require('discord.js');
const {mongoConnect, addToScore, fetchTopTen} = require('./mongo.js');
const embeds = require('./embeds.js');
const questions = require('./questions.js');

const {token} = require('./secrets.json');

const client = new Discord.Client();
client.login(token);

let botTriviaChannel;
let botQuestionStream;
const botTimeout = 10000;

let botQuestion;
let botAnswers = [];

let playerTriviaChannel;
let asker = '237874362198392832';
let askerQuestionTimeout;
let asked = false;
const askTimeout = 300000;

const leaderboardUpdatePeriod = 10000;

// After the bot is logged in and ready
client.once('ready', async () => {
  // Gets the #bot-trivia channel
  botTriviaChannel = await client.channels.fetch('779241835649957939');
  playerTriviaChannel = await client.channels.fetch('779460690586501120');
  await mongoConnect();

  // Starts sending questions to #bot-trivia
  botNewQuestion('first');
  botQuestionStream = setInterval(botNewQuestion, botTimeout, null);

  askerQuestionTimeout = setTimeout(openAsker, askTimeout, asker);

  updateLeaderboard();
});

client.on('message', async (msg) => {
  if (msg.content.startsWith('!') && !msg.author.bot) {
    const args = msg.content.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'purge') {
      let numberOfMessages;
      if (parseInt(args[0]) > 100) {
        numberOfMessages = 100;
      } else if (parseInt(args[0]) < 1) {
        numberOfMessages = 0;
      } else {
        numberOfMessages = parseInt(args[0]);
      }

      if (!numberOfMessages || args[2] || !Number.isInteger(numberOfMessages) || !msg.member.roles.cache.has('779241416688926740')) return;
      msg.channel.bulkDelete(numberOfMessages, true).then(() => {
        msg.channel.send(`Deleted ${numberOfMessages} messages.`).then((a) => a.delete({timeout: 3000}));
      });
    }

    if (command === 'yes') {
      const correctAnswerer = msg.mentions.users.first();
      if (asked && correctAnswerer.id !== asker) {
        asker = correctAnswerer.id;
        asked = false;
        msg.channel.send(embeds.correct(correctAnswerer));
        addToScore(correctAnswerer.id, 1);
        askerQuestionTimeout = setTimeout(openAsker, askTimeout, asker);
      } else {
        msg.delete();
      }
    }

    return;
  }

  if ((isBold(msg.content) && msg.author.id !== asker) || (isBold(msg.content) && msg.author.id === asker && msg.channel !== playerTriviaChannel) || (!isBold(msg.content) && msg.author.id === asker && msg.channel === playerTriviaChannel)) {
    msg.delete();
  }

  if (isBold(msg.content) && msg.author.id === asker && msg.channel === playerTriviaChannel) {
    clearTimeout(askerQuestionTimeout);
    asked = true;
  }

  if (msg.channel.id == botTriviaChannel.id && botAnswers.includes(msg.content)) {
    // Stops old bot trivia question
    clearInterval(botQuestionStream);

    addToScore(msg.member.id, 1);

    // Starts new bot trivia question
    botNewQuestion(msg.member);
    botQuestionStream = setInterval(botNewQuestion, botTimeout, null);
  }
});

/**
 * Checks if message content is bold
 * @param {string} messageContent
 * @return {boolean}
 */
function isBold(messageContent) {
  return messageContent.startsWith('**') && messageContent.endsWith('**');
}

/**
 * Opens the question to other players
 * @param {Discord.GuildMember} failedAsker
 */
function openAsker(failedAsker) {
  playerTriviaChannel.send(embeds.askerEmbed(failedAsker));
}

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

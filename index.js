const Discord = require('discord.js');
const { mongoConnect, fetchBotQuestion, addToScore, fetchTopTen } = require('./mongo');
const embeds = require('./embeds.js');

const { token } = require('./secrets.json');

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
  botNewQuestion(null);
  botQuestions = setInterval(botNewQuestion, botTimeout, null);

  updateLeaderboard();
});

client.on('message', async msg => {
  if (botAnswers.includes(msg.content)) {
    // Stops old bot trivia question
    clearInterval(botQuestions);

    addToScore(msg.member.id, 1);

    // Starts new bot trivia question
    botNewQuestion(msg.member);
    botQuestions = setInterval(botNewQuestion, botTimeout, null);
  }
});

async function botNewQuestion(answerer) {
  await botTriviaChannel.send(answerer ? embeds.correct(answerer) : embeds.notAnswered());

  const newQuestion = await fetchBotQuestion();

  botQuestion = newQuestion[0];
  botAnswers = newQuestion[1];

  // Sends the trivia question to the #bot-trivia channel
  await botTriviaChannel.send(embeds.botQuestion(botQuestion));
}

async function updateLeaderboard() {
  const leaderboardChannel = await client.channels.fetch('779461499113439243');
  const weeklyUserObjs = await fetchTopTen('weeklyScores');
  const totalUserObjs = await fetchTopTen('totalScores');

  console.log('called');

  await leaderboardChannel.messages.fetch({ limit: 1 }).then(async messages => {
    const lastLeaderboardMessage = messages.first();

    if (lastLeaderboardMessage) {
      await lastLeaderboardMessage.edit(embeds.leaderboard(weeklyUserObjs, totalUserObjs));
      console.log('updated leaderboard');
    } else {
      await lastLeaderboardMessage.send(embeds.leaderboard(weeklyUserObjs, totalUserObjs));
      console.log('sent leaderboard');
    }

  }).catch(console.error);

  setTimeout(updateLeaderboard, leaderboardUpdatePeriod);
}
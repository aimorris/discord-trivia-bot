const Discord = require('discord.js');
const { mongoConnect, fetchBotQuestion, addToScore } = require('./mongo');
const embeds = require('./embeds.js');

const { token } = require('./secrets.json');

const client = new Discord.Client();
client.login(token);

let botTriviaChannel;
let botQuestions;
const botTimeout = 10000;

let botQuestion;
let botAnswers;

// After the bot is logged in and ready
client.once('ready', async () => {
  // Gets the #bot-trivia channel
  botTriviaChannel = await client.channels.fetch('779241835649957939');
  await mongoConnect();

  // Starts sending questions to #bot-trivia
  botNewQuestion(null);
  botQuestions = setInterval(botNewQuestion, botTimeout, null);
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
  if (answerer) {
    await botTriviaChannel.send(embeds.correct(answerer));
  } else {
    await botTriviaChannel.send(embeds.notAnswered());
  }

  const newQuestion = await fetchBotQuestion();

  botQuestion = newQuestion[0];
  botAnswers = newQuestion[1];

  // Sends the trivia question to the #bot-trivia channel
  await botTriviaChannel.send(embeds.botQuestion(botQuestion));
}
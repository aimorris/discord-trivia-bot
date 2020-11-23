const Discord = require('discord.js');
const { mongoConnect, fetchBotQuestion, addToScore } = require('./mongo');
const embeds = require('./embeds.js');

const token = require('./token.json');

const client = new Discord.Client();
client.login(token.token);

let botTriviaChannel;
let botQuestions;
const botTimeout = 10000;

let botQuestion;
let botAnswers;

let answered = 'first';
let answerer;

// After the bot is logged in and ready
client.once('ready', async () => {
  // Gets the #bot-trivia channel
  botTriviaChannel = await client.channels.fetch('779241835649957939');
  mongoConnect();

  // Starts sending questions to #bot-trivia
  botNewQuestion();
  botQuestions = setInterval(botNewQuestion, botTimeout);
});

client.on('message', async msg => {
  if (botAnswers.includes(msg.content)) {
    // Stops old bot trivia question
    clearInterval(botQuestions);

    addToScore(msg.member.id, 1);

    answered = 'true';
    answerer = msg.member;

    // Starts new bot trivia question
    botNewQuestion();
    botQuestions = setInterval(botNewQuestion, botTimeout);
  }
});

async function botNewQuestion() {
  const newQuestion = await fetchBotQuestion();

  botQuestion = newQuestion[0];
  botAnswers = newQuestion[1];

  if (answered == 'true') {
    await botTriviaChannel.send(embeds.correct(answerer));
  } else if (answered == 'false') {
    await botTriviaChannel.send(embeds.notAnswered());
  }

  // Sends the trivia question to the #bot-trivia channel
  await botTriviaChannel.send(embeds.botQuestion(botQuestion));

  answered = 'false';
  answerer = null;
}
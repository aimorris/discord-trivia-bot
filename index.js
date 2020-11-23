const Discord = require('discord.js');
const { mongoConnect, fetchBotQuestion, addToScore } = require('./mongo');
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
    // Stops old interval
    clearInterval(botQuestions);

    addToScore(msg.member.id, 1);

    answered = 'true';
    answerer = msg.member;

    // Starts new interval
    botNewQuestion();
    botQuestions = setInterval(botNewQuestion, botTimeout);
  }
});

async function botNewQuestion() {
  const newQuestion = await fetchBotQuestion();

  botQuestion = newQuestion[0];
  botAnswers = newQuestion[1];

  if (answered == 'true') {
    const answeredEmbed = new Discord.MessageEmbed()
      .setColor('#6ab04c')
      .setTitle('Correct!')
      .setDescription('<@' + answerer.id + '> 1 point has been added to your score on the <#779461499113439243>.');

    await botTriviaChannel.send(answeredEmbed);
  } else if (answered == 'false') {
    const notAnsweredEmbed = new Discord.MessageEmbed()
      .setColor('#eb4d4b')
      .setTitle('No one answered');

    await botTriviaChannel.send(notAnsweredEmbed);
  }

  const questionEmbed = new Discord.MessageEmbed()
    .setColor('#7ed6df')
    .setTitle(botQuestion);

  // Sends the trivia question to the #bot-trivia channel
  await botTriviaChannel.send(questionEmbed);

  answered = 'false';
  answerer = null;
}
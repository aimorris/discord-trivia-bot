const Discord = require('discord.js');
const { MongoClient } = require('mongodb');
const token = require('./token.json');
const mongoUri = 'mongodb://admin:password@localhost:27017/trivia?authSource=admin';

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
client.once('ready', () => {
  // Gets the #bot-trivia channel
  botTriviaChannel = client.channels.cache.get('779241835649957939');

  // Starts sending questions to #bot-trivia
  botNewQuestion();
  botQuestions = setInterval(botNewQuestion, botTimeout);
});

client.on('message', msg => {
  if (botAnswers.includes(msg.content)) {
    // Stops old interval
    clearInterval(botQuestions);

    answerer = msg.member.displayName;

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

  } else if (answered == 'false') {
  
  }

  const questionEmbed = new Discord.MessageEmbed()
    .setColor('#7ed6df')
    .setTitle('Trivia question!')
    .setDescription(botQuestion);

  // Sends the trivia question to the #bot-trivia channel
  botTriviaChannel.send(questionEmbed);
}

function fetchBotQuestion() {
  return new Promise(resolve => {
    MongoClient.connect(mongoUri, (err, db) => {
      const newQuestion = db.collection('questions').aggregate([{ $sample: { size: 1 } }]);
      newQuestion.toArray((e, res) => {
        if (e) console.error(e);
        resolve([res[0]['question'], res[0]['answers']]);
      });
      db.close();
    });
  });
}
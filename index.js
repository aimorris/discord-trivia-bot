const Discord = require('discord.js');
const { MongoClient } = require('mongodb');
const token = require('./token.json');
const mongo = require('mongodb').MongoClient;
const mongoUri = 'mongodb://admin:password@localhost:27017/trivia?authSource=admin';

const client = new Discord.Client();
client.login(token.token);

let botTriviaChannel;
let botQuestions;
const botTimeout = 1000;

let botQuestion;
let botAnswers;

// After the bot is logged in and ready
client.once('ready', () => {
  // Gets the #bot-trivia channel
  botTriviaChannel = client.channels.cache.get('779241835649957939');

  // Starts sending questions to #bot-trivia
  botQuestions = setInterval(botNewQuestion, botTimeout);
});

client.on('message', msg => {
  if (botAnswers.includes(msg.content)) {
    // Stops old interval
    clearInterval(botQuestions);

    // Starts new interval
    botQuestions = setInterval(botNewQuestion, botTimeout);
  }
});

const botNewQuestion = () => {
  fetchBotQuestion();

  // Sends the trivia question to the #bot-trivia channel
  // botTriviaChannel.send(botQuestion);
};

const fetchBotQuestion = () => {
  MongoClient.connect(mongoUri, (err, db) => {
    const newQuestion = db.collection('questions').aggregate([{ $sample: { size: 1 } }]);

    console.log(newQuestion);

    db.close();
  });

  botQuestion = '1+1?';
  botAnswers = ['2'];
};
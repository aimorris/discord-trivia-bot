const Discord = require('discord.js');
const { MongoClient } = require('mongodb');
const token = require('./token.json');
const mongoUri = 'mongodb://admin:password@localhost:27017?authSource=admin';
const mongoClient = new MongoClient(mongoUri);

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

  // Starts sending questions to #bot-trivia
  // botNewQuestion();
  // botQuestions = setInterval(botNewQuestion, botTimeout);
  fetchBotQuestion();
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

async function fetchBotQuestion() {
  try {
    await mongoClient.connect();
    const newQuestion = await mongoClient.db('trivia').collection('questions').aggregate([{ $sample: { size: 1 } }]);
    console.log(newQuestion);
  } finally {
    await mongoClient.close();
  }
}

async function addToScore(member, amt) {
  const exists = await memberExists(member);
  if (exists) {
    MongoClient.connect(mongoUri, (err, db) => {
      db.collection('users').updateOne({ 'user' : member }, { $inc : { 'score' : amt } });
      db.close();
    });
  } else {
    await addMember(member);
    addToScore(member, amt);
  }
}

function addMember(member) {
  return new Promise(resolve => {
    MongoClient.connect(mongoUri, (err, db) => {
      db.collection('users').insertOne({ 'user' : member, 'score' : 0 });
      resolve('added member');
      db.close();
    });
  });
}

function memberExists(member) {
  return new Promise(resolve => {
    MongoClient.connect(mongoUri, async (err, db) => {
      const exists = await db.collection('users').findOne({ 'user' : member });
      resolve(!!exists);
      db.close();
    });
  });
}
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

client.on('message', async msg => {
  if (botAnswers.includes(msg.content)) {
    // Stops old interval
    clearInterval(botQuestions);

    // addToScore(msg.member.id, 1);
    memberExists(msg.member.id);

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
  }
  else if (answered == 'false') {
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

async function addToScore(member, amt) {
  if (memberExists(member)) {
    MongoClient.connect(mongoUri, (err, db) => {
      db.collection('users').updateOne({ 'user' : member }, { $inc : { 'score' : amt } });
      db.close();
    });
  }
  else {
    await addMember(member);
    addToScore(member, amt);
  }
}

function addMember(member) {
  MongoClient.connect(mongoUri, (err, db) => {
    db.collection('users').insertOne( { 'user' : member, ' score ' : 0 });
    db.close();
  });
}

function memberExists(member) {
  return new Promise(resolve => {
    MongoClient.connect(mongoUri, (err, db) => {
      const exists = db.collection('users').findOne({ 'user' : member }, { '_id' : 1 });
      console.log(exists);
      db.close();
    });
  });
}
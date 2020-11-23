const { MongoClient } = require('mongodb');
const { mongoUri } = require('./secrets.json');

const mongoClient = new MongoClient(mongoUri, { useUnifiedTopology: true });

async function mongoConnect() {
  await mongoClient.connect();
}

async function fetchBotQuestion() {
  const newQuestion = await mongoClient.db('trivia').collection('questions').aggregate([{ $sample: { size: 1 } }]).toArray();
  return [newQuestion[0]['question'], newQuestion[0]['answers']];
}

async function addToScore(member, amt) {
  const exists = await memberExists(member);
  if (exists) {
    await mongoClient.db('trivia').collection('totalScores').updateOne({ 'user' : member }, { $inc : { 'score' : amt } });
    await mongoClient.db('trivia').collection('weeklyScores').updateOne({ 'user' : member }, { $inc : { 'score' : amt } });
  } else {
    await addMember(member);
    addToScore(member, amt);
  }
}

async function addMember(member) {
  await mongoClient.db('trivia').collection('totalScores').insertOne({ 'user' : member, 'score' : 0 });
  await mongoClient.db('trivia').collection('weeklyScores').insertOne({ 'user' : member, 'score' : 0 });
}

async function memberExists(member) {
  const exists = await mongoClient.db('trivia').collection('weeklyScores').findOne({ 'user' : member });
  return !!exists;
}

module.exports = {
  fetchBotQuestion,
  addToScore,
  addMember,
  mongoConnect,
};
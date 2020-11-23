const { MongoClient } = require('mongodb');

const mongoUri = 'mongodb://admin:password@localhost:27017?authSource=admin';
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
    await mongoClient.db('trivia').collection('users').updateOne({ 'user' : member }, { $inc : { 'score' : amt } });
  } else {
    await addMember(member);
    addToScore(member, amt);
  }
}

async function addMember(member) {
  await mongoClient.db('trivia').collection('users').insertOne({ 'user' : member, 'score' : 0 });
}

async function memberExists(member) {
  const exists = await mongoClient.db('trivia').collection('users').findOne({ 'user' : member });
  return !!exists;
}

module.exports = {
  fetchBotQuestion,
  addToScore,
  addMember,
  mongoConnect,
};
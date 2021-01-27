const {MongoClient} = require('mongodb');
const {mongoUri} = require('./secrets.json');

const mongoClient = new MongoClient(mongoUri, {useUnifiedTopology: true});

/**
 * Connects to the MongoDB server
 */
async function mongoConnect() {
  await mongoClient.connect();
}

/**
 * Disconnects from the MongoDB server
 */
async function mongoDisconnect() {
  await mongoClient.close();
}

/**
 * Fetches a bot question from MongoDB
 */
async function fetchBotQuestion() {
  const newQuestion = await mongoClient.db('trivia').collection('questions').aggregate([{$sample: {size: 1}}]).toArray();
  return [newQuestion[0]['question'], newQuestion[0]['answers']];
}

/**
 * Adds {amt} score to the member {member}
 * @param {Discord.GuildMember} member
 * @param {number} amt
 */
async function addToScore(member, amt) {
  const exists = await memberExists(member);
  if (exists) {
    await mongoClient.db('trivia').collection('totalScores').updateOne({'user': member}, {$inc: {'score': amt}});
    await mongoClient.db('trivia').collection('weeklyScores').updateOne({'user': member}, {$inc: {'score': amt}});
  } else {
    await addMember(member);
    addToScore(member, amt);
  }
}

/**
 * Adds a new member to the database
 * @param {Discord.GuildMember} member
 */
async function addMember(member) {
  await mongoClient.db('trivia').collection('totalScores').insertOne({'user': member, 'score': 0});
  await mongoClient.db('trivia').collection('weeklyScores').insertOne({'user': member, 'score': 0});
}

/**
 * Checks whether the specified member exists in the database
 * @param {Discord.GuildMember} member
 */
async function memberExists(member) {
  const exists = await mongoClient.db('trivia').collection('weeklyScores').findOne({'user': member});
  return !!exists;
}

/**
 * Clears the weekly scores in the database
 */
async function clearWeekly() {
  await mongoClient.db('trivia').collection('weeklyScores').drop();
}

/**
 * Fetches the top ten values from a collection
 * @param {string} collection
 */
async function fetchTopTen(collection) {
  return await mongoClient.db('trivia').collection(collection).aggregate([{$sort: {'score': -1}}, {$limit: 10}]).toArray();
}

module.exports = {
  fetchBotQuestion,
  addToScore,
  addMember,
  mongoConnect,
  clearWeekly,
  mongoDisconnect,
  fetchTopTen,
};

const { clearWeekly, mongoConnect, mongoDisconnect } = require('./mongo');

async function clearScores() {
  await mongoConnect();
  await clearWeekly();
  await mongoDisconnect();
  process.exit();
}

clearScores();
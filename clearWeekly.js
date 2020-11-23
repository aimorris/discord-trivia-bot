const { clearWeekly, mongoConnect } = require('./mongo');

async function clearScores() {
  await mongoConnect();
  await clearWeekly();
}

clearScores();
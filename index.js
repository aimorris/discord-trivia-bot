const Discord = require('discord.js');
const {mongoConnect, addToScore, fetchTopTen} = require('./mongo.js');
const embeds = require('./embeds.js');
const questions = require('./questions.js');

const {token} = require('./secrets.json');

const client = new Discord.Client();
client.login(token);

const botTimeout = 60000;
const askTimeout = 300000;

let asker = '237874362198392832';
let askerQuestionTimeout;
let asked = false;

let botTriviaChannel;
let playerTriviaChannel;
let staffChatChannel;

const leaderboardUpdatePeriod = 10000;

/**
 * Filter for awaitMessages
 * @param {Discord.Message} response
 * @return {boolean}
 */
function filter(response) {
  return item.answers.some((answer) => answer.toLowerCase() === response.content.toLowerCase().replace(/\s/g, ''));
};

// After the bot is logged in and ready
client.once('ready', async () => {
  // Gets the #bot-trivia channel
  botTriviaChannel = await client.channels.fetch('804222341650710538');
  playerTriviaChannel = await client.channels.fetch('779460690586501120');
  staffChatChannel = await client.channels.fetch('779242027225317377');
  await mongoConnect();

  newBotQuestion();
  staffChatChannel.send(embeds.botStarted(questions.length));
  askerQuestionTimeout = setTimeout(openAsker, askTimeout, asker);

  updateLeaderboard();
});

client.on('message', async (msg) => {
  if (msg.content.startsWith('!') && !msg.author.bot) {
    const args = msg.content.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'purge') {
      let numberOfMessages;
      if (parseInt(args[0]) > 100) {
        numberOfMessages = 100;
      } else if (parseInt(args[0]) < 1) {
        numberOfMessages = 0;
      } else {
        numberOfMessages = parseInt(args[0]);
      }

      if (!numberOfMessages || args[2] || !Number.isInteger(numberOfMessages) || !msg.member.roles.cache.has('779241416688926740')) msg.delete();

      msg.channel.bulkDelete(numberOfMessages, true).then(() => {
        msg.channel.send(`Deleted ${numberOfMessages} messages.`).then((a) => a.delete({timeout: 3000}));
      });
    }

    if (command === 'yes') {
      const correctAnswerer = msg.mentions.users.first();
      if (asked && correctAnswerer.id !== asker && msg.channel == playerTriviaChannel) {
        asker = correctAnswerer.id;
        asked = false;
        playerTriviaChannel.send(embeds.correct(correctAnswerer, 3, true));
        addToScore(correctAnswerer.id, 3);
        askerQuestionTimeout = setTimeout(openAsker, askTimeout, asker);
      } else {
        msg.delete();
      }
    }

    if (command == 'stop') {
      if (msg.member.roles.cache.has('779241416688926740')) {
        staffChatChannel.send(embeds.botStopped());
        await msg.delete();
        process.exit();
      } else {
        msg.delete();
      }
    }

    if (command == 'me') {
      if (asker == null && msg.channel == playerTriviaChannel) {
        asker = msg.member.id;
        playerTriviaChannel.send(embeds.newAsker(asker));
        askerQuestionTimeout = setTimeout(openAsker, askTimeout, asker);
      } else {
        msg.delete();
      }
    }

    return;
  }

  if ((isBold(msg.content) && msg.author.id !== asker) || (isBold(msg.content) && msg.author.id === asker && msg.channel !== playerTriviaChannel)) {
    msg.delete();
  }

  if (isBold(msg.content) && msg.author.id === asker && msg.channel === playerTriviaChannel) {
    clearTimeout(askerQuestionTimeout);
    asked = true;
  }
});

/**
 * New bot question
 */
function newBotQuestion() {
  const item = questions[Math.floor(Math.random() * questions.length)];
  botTriviaChannel.send(embeds.botQuestion(item.question, item.category)).then(() => {
    botTriviaChannel.awaitMessages(filter, {max: 1, time: botTimeout, errors: ['time']})
        .then((collected) => {
          const correctAnswerer = collected.first().author;
          botTriviaChannel.send(embeds.correct(correctAnswerer, 1, false));
          addToScore(correctAnswerer.id, 1);
          newBotQuestion();
        })
        .catch((_) => {
          botTriviaChannel.send(embeds.notAnswered());
          newBotQuestion();
        });
  });
}

/**
 * Checks if message content is bold
 * @param {string} messageContent
 * @return {boolean}
 */
function isBold(messageContent) {
  return messageContent.startsWith('**') && messageContent.endsWith('**');
}

/**
 * Opens the question to other players
 * @param {Discord.GuildMember} failedAsker
 */
function openAsker(failedAsker) {
  playerTriviaChannel.send(embeds.askerOpen(failedAsker));
  asker = null;
}

/**
 * Updates the leaderboard in #leaderboard
 */
async function updateLeaderboard() {
  const leaderboardChannel = await client.channels.fetch('779461499113439243');
  const weeklyUserObjs = await fetchTopTen('weeklyScores');
  const totalUserObjs = await fetchTopTen('totalScores');

  await leaderboardChannel.messages.fetch({limit: 1}).then(async (messages) => {
    const lastLeaderboardMessage = messages.first();

    if (lastLeaderboardMessage) {
      lastLeaderboardMessage.edit(embeds.leaderboard(weeklyUserObjs, totalUserObjs));
    } else {
      leaderboardChannel.send(embeds.leaderboard(weeklyUserObjs, totalUserObjs));
    }
  }).catch(console.error);

  setTimeout(updateLeaderboard, leaderboardUpdatePeriod);
}

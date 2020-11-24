const Discord = require('discord.js');

function correct(answerer) {
  return new Discord.MessageEmbed()
    .setColor('#6ab04c')
    .setTitle('Correct!')
    .setDescription('<@' + answerer.id + '> 1 point has been added to your score on the <#779461499113439243>.');
}

function notAnswered() {
  return new Discord.MessageEmbed()
    .setColor('#eb4d4b')
    .setTitle('No one answered');
}

function botQuestion(question) {
  return new Discord.MessageEmbed()
    .setColor('#7ed6df')
    .setTitle(question);
}

function leaderboard(weeklyUserObjs, totalUserObjs) {
  let weeklyRanks = '';
  let weeklyUsers = '';
  let weeklyScores = '';

  let totalRanks = '';
  let totalUsers = '';
  let totalScores = '';

  for (let i = 0; i < Object.keys(weeklyUserObjs).length; i++) {
    const userId = weeklyUserObjs[i]['user'];
    const userScore = weeklyUserObjs[i]['score'];

    weeklyRanks += `**${i + 1}.**\n`
    weeklyUsers += `<@${userId}>\n`;
    weeklyScores += `\`${userScore}\``;
  }

  for (let i = 0; i < Object.keys(totalUserObjs).length; i++) {
    const userId = totalUserObjs[i]['user'];
    const userScore = totalUserObjs[i]['score'];

    totalRanks += `**${i + 1}.**\n`;
    totalUsers += `<@${userId}>\n`;
    totalScores += `\`${userScore}\``;
  }

  return new Discord.MessageEmbed()
    .addField('__**Weekly Leaderboard**__', '\u200B')
    .setColor('#7ed6df')
    .addField('Rank', weeklyRanks, true)
    .addField('User', weeklyUsers, true)
    .addField('Score', weeklyScores, true)
    .addField('\u200B', '\u200B')
    .addField('\u200B', '\u200B')
    .addField('__**All-Time Leaderboard**__', '\u200B')
    .addField('Rank', totalRanks, true)
    .addField('User', totalUsers, true)
    .addField('Score', totalScores, true)
    .setTimestamp()
    .setFooter('Last Updated:');
}

module.exports = {
  correct,
  notAnswered,
  botQuestion,
  leaderboard,
};
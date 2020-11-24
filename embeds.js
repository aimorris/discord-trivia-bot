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

function leaderboard(userObjs) {
  let userNames = '';
  let scores = '';

  for (let i = 0; i < Object.keys(userObjs).length; i++) {
    const userId = userObjs[i]['user'];
    const userScore = userObjs[i]['score'];

    userNames += `**${i + 1}** <@${userId}>\n`;
    scores += `\`${userScore}\`\n`;
  }

  return new Discord.MessageEmbed()
    .setTitle('Weekly Top 10 Leaderboard')
    .setColor('#7ed6df')
    .addField('User', userNames, true)
    .addField('Score', scores, true);
}

module.exports = {
  correct,
  notAnswered,
  botQuestion,
  leaderboard,
};
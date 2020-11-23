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

module.exports = {
  correct,
  notAnswered,
  botQuestion,
};
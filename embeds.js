const Discord = require('discord.js');
const green = '#6ab04c';
const red = '#eb4d4b';
const blue = '#7ed6df';

/**
 * The correct embed
 * @param {Discord.GuildMember} answerer
 * @return {Discord.MessageEmbed}
 */
function correct(answerer) {
  return new Discord.MessageEmbed()
      .setColor(green)
      .setTitle('Correct!')
      .setDescription(`<@${answerer.id}> 1 point has been added to your score on the <#779461499113439243>.`);
}

/**
 * The not answered embed
 * @return {Discord.MessageEmbed}
 */
function notAnswered() {
  return new Discord.MessageEmbed()
      .setColor(red)
      .setTitle('No one answered');
}

/**
 * The question embed
 * @param {string} question
 * @return {Discord.MessageEmbed}
 */
function botQuestion(question) {
  return new Discord.MessageEmbed()
      .setColor(blue)
      .setTitle(question);
}

/**
 * The open asker embed
 * @param {string} asker
 * @return {Discord.MessageEmbed}
 */
function askerOpen(asker) {
  return new Discord.MessageEmbed()
      .setColor(red)
      .setTitle('Asker open!')
      .setDescription(`<@${asker}> failed to ask a question. Type \`!me\` to become the new asker.`);
}

/**
 * The open asker embed
 * @param {string} user
 * @return {Discord.MessageEmbed}
 */
function newAsker(user) {
  return new Discord.MessageEmbed()
      .setColor(green)
      .setTitle('Asker claimed!')
      .setDescription(`It is now <@${user}>'s turn to ask a question.`);
}

/**
 * The bot started embed
 * @return {Discord.MessageEmbed}
 */
function botStarted() {
  return new Discord.MessageEmbed()
      .setColor(blue)
      .setTitle(`Bot started: ${new Date().toUTCString()}`);
}

/**
 * The bot stopped embed
 * @return {Discord.MessageEmbed}
 */
function botStopped() {
  return new Discord.MessageEmbed()
      .setColor(blue)
      .setTitle(`Bot stopped: ${new Date().toUTCString()}`);
}

/**
 * The leaderboard embed
 * @param {Array.<Discord.GuildMember>} weeklyUserObjs
 * @param {Array.<Discord.GuildMember>} totalUserObjs
 * @return {Discord.MessageEmbed}
 */
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

    weeklyRanks += `**${i + 1}.**\n`;
    weeklyUsers += `<@${userId}>\n`;
    weeklyScores += `\`${userScore}\`\n`;
  }

  for (let i = 0; i < Object.keys(totalUserObjs).length; i++) {
    const userId = totalUserObjs[i]['user'];
    const userScore = totalUserObjs[i]['score'];

    totalRanks += `**${i + 1}.**\n`;
    totalUsers += `<@${userId}>\n`;
    totalScores += `\`${userScore}\`\n`;
  }

  return new Discord.MessageEmbed()
      .addField('__**Weekly Leaderboard**__', '\u200B')
      .setColor(blue)
      .addField('Rank', weeklyRanks || 'null', true)
      .addField('User', weeklyUsers || 'null', true)
      .addField('Score', weeklyScores || 'null', true)
      .addField('\u200B', '\u200B')
      .addField('\u200B', '\u200B')
      .addField('__**All-Time Leaderboard**__', '\u200B')
      .addField('Rank', totalRanks || 'null', true)
      .addField('User', totalUsers || 'null', true)
      .addField('Score', totalScores || 'null', true)
      .setTimestamp()
      .setFooter('Last Updated:');
}

module.exports = {
  correct,
  notAnswered,
  botQuestion,
  leaderboard,
  askerOpen,
  botStarted,
  botStopped,
  newAsker,
};

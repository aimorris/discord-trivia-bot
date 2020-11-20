const Discord = require('discord.js');
const client = new Discord.Client();

const Keyv = require('keyv');

const keyv = new Keyv();
keyv.on('error', err => console.error('Keyv connection error:', err));

let botTriviaChannel;

client.once('ready', () => {
  // Gets the #bot-trivia channel
  botTriviaChannel = client.channels.cache.get('779241835649957939');
  botTriviaChannel.send('hi');
});


client.login('Nzc5MjM5MTI4Mzk1MDIyMzM2.X7do_Q.wgUQFXT5uHgswh1HC33ijnceLPw');

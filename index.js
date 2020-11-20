const Discord = require('discord.js');

const client = new Discord.Client();
client.login('Nzc5MjM5MTI4Mzk1MDIyMzM2.X7do_Q.wgUQFXT5uHgswh1HC33ijnceLPw');

const Keyv = require('keyv');

const keyv = new Keyv();
keyv.on('error', err => console.error('Keyv connection error:', err));

let botTriviaChannel;
let botTriviaQuestions;
const botTriviaTimeout = 1000;

// After the bot is logged in and ready
client.once('ready', () => {
  // Gets the #bot-trivia channel
  botTriviaChannel = client.channels.cache.get('779241835649957939');

  // Starts sending questions to #bot-trivia
  botTriviaQuestions = setInterval(botTriviaNewQuestion, botTriviaTimeout);
});

client.on('message', msg => {
  if (msg.content == 'hi') {
    clearInterval(botTriviaQuestions);
    botTriviaChannel.send('hey');
  }
});

const botTriviaNewQuestion = () => {
  botTriviaChannel.send('hi');
};



const Discord = require('discord.js');

const client = new Discord.Client();
client.login('Nzc5MjM5MTI4Mzk1MDIyMzM2.X7do_Q.wgUQFXT5uHgswh1HC33ijnceLPw');

let botTriviaChannel;
let botTriviaQuestions;
const botTriviaTimeout = 1000;

let botTriviaQuestion;
let botTriviaAnswer;

// After the bot is logged in and ready
client.once('ready', () => {
  // Gets the #bot-trivia channel
  botTriviaChannel = client.channels.cache.get('779241835649957939');

  // Starts sending questions to #bot-trivia
  botTriviaQuestions = setInterval(botTriviaNewQuestion, botTriviaTimeout);
});

client.on('message', msg => {
  if (msg.content == botTriviaAnswer) {
    // Stops old interval
    clearInterval(botTriviaQuestions);

    // Starts new interval
    botTriviaQuestions = setInterval(botTriviaNewQuestion, botTriviaTimeout);
  }
});

const botTriviaNewQuestion = () => {
  botTriviaQuestion = '1+1?';
  botTriviaAnswer = '2';

  // Sends the trivia question to the #bot-trivia channel
  botTriviaChannel.send(botTriviaQuestion);
};

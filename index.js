const Discord = require('discord.js');

const client = new Discord.Client();
client.login('Nzc5MjM5MTI4Mzk1MDIyMzM2.X7do_Q.wgUQFXT5uHgswh1HC33ijnceLPw');

let botTriviaChannel;
let botQuestions;
const botTimeout = 1000;

let botQuestion;
let botAnswers;

// After the bot is logged in and ready
client.once('ready', () => {
  // Gets the #bot-trivia channel
  botTriviaChannel = client.channels.cache.get('779241835649957939');

  // Starts sending questions to #bot-trivia
  botQuestions = setInterval(botNewQuestion, botTimeout);
});

client.on('message', msg => {
  if (botAnswers.includes(msg.content)) {
    // Stops old interval
    clearInterval(botQuestions);

    // Starts new interval
    botQuestions = setInterval(botNewQuestion, botTimeout);
  }
});

const botNewQuestion = () => {
  fetchBotQuestion();

  // Sends the trivia question to the #bot-trivia channel
  botTriviaChannel.send(botQuestion);
};

const fetchBotQuestion = () => {
  botQuestion = '1+1?';
  botAnswers = ['2'];
};

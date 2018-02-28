const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const MessageHandler = require('discord-message-handler');
client.on('message', message => {
    MessageHandler.setCaseSensitive(false);
    if (message.content === 'ping') {
    	message.channel.sendMessage('pong');
  	}
    if (message.content === 'tomo is gay') {
    	message.channel.sendMessage('According to my diagnosis, that is correct.');
  	}
    if (message.content === 'I LOVE HUIAN') {
    	message.channel.sendMessage('Flattered.');
  	}
    if (message.content === 'How flattered?') {
    	message.channel.sendMessage('That is for me to know.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

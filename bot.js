const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.channel.send('pong');
        }
    if (message.content === 'tomo is gay') {
        message.channel.send('According to my diagnosis, that is correct.');
        }
   if (message.content === 'I LOVE HUIAN') {
        message.channel.send('Flattered.');
        }
   if (message.content === 'How flattered?') {
    message.channel.send('That is for me to know.');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

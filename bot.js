const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
        message.channel.sendMessage('Ding Dong!');
        }
    if (message.content.toLowerCase() === 'tomo is gay') {
        message.channel.sendMessage('hes probably very gay');
        }
    if (message.content.toLowerCase() === 'tomo is very gay') {
        message.channel.sendMessage("he's probably very gay");
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

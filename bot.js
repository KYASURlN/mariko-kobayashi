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
    if (message.content.toLowerCase() === 'i love seong') {
        message.channel.sendMessage("You're my favorite :satan:");
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

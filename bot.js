const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
        message.channel.sendMessage('Ring around the rosie~');
        }
    if (message.content.toLowerCase() === 'tomo is gay') {
        message.channel.sendMessage('There is no doubt.');
        }
    if (message.content.toLowerCase() === 'zaire: is that a telescope in your pants or are you just happy to see me?') {
        message.channel.sendMessage('Die.');
        }
    if (message.content.toLowerCase() === 'i love mari') {
        message.channel.sendMessage('Why, how charming! I really appreciate your kind words and accept them graciously!~');
        }
    if (message.content.toLowerCase() === 'mari') {
        message.channel.sendMessage('Oh, you called?');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

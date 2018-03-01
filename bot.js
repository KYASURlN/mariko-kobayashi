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
        message.channel.sendMessage("You're my favorite~");
        }
});

let Discord = require('discord.js');
let bot = new Discord.Client();

bot.on('ready', function() {
	console.log(Discord.version);
});

bot.on('message', function(message) {
	if (message.content == 'start')
		message.channel.startTyping();
	if (message.content == 'stop')
		message.channel.stopTyping();
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

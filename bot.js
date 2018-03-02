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
    if (message.content.toLowerCase() === 'mari, what do you think about jiro?') {
        message.channel.sendMessage("Why, he's like a little brother to me! I cannot honestly believe that he is interested in that toad of a man, but to each their own, right? No matter, he's still one of the sweetest and funniest people ever.");
        }
    if (message.content.toLowerCase() === 'mari, what do you think about zaire?') {
        message.channel.sendMessage("Real strange might I say. The only reason I know about his broccoli-headed ass is because of Jiro.");
        }
    if (message.content.toLowerCase() === 'mari, what do you think about yuudai?') {
        message.channel.sendMessage("Some fucking piece of no-good cabbage.");
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

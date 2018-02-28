const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const MessageHandler = require('discord-message-handler');
client.on('message', message => {
    MessageHandler.whenMessageContainsWord("shrug").reply("¯\\_(ツ)_/¯");
    MessageHandler.whenMessageContains("lol").replySometimes("kek", 50);
    MessageHandler.whenMessageContainsExact("dota").replyOne(["volvo pls", "rip doto"]);
    MessageHandler.whenMessageContainsOne(["br", "brazil"]).reply("huehue");
    MessageHandler.whenMessageStartsWith("help").then(message => doSomething(message));
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

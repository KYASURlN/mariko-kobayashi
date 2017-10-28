const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('P-Pong!');
  	}
    if (message.content === 'who created you') {
    	message.reply('Y-You really do not know? I-Its Kyasurin! Please check her out right here: https://kyasurln.carrd.co/');
  	}
    if (message.content === 'quote') {
    	message.reply('A-Ah... I really miss the c-children back at the o-orphanage! How l-long has it been since I have seen t-them? No m-matter, I will never f-forget them! I-I must keep trying my best to see their smiling faces once m-more!');
  	}
    if (message.content === 'NAOMI IS MY WIFE') {
    	message.reply('E-Eek! I-I am h-honered!!');
  	}
    if (message.content === 'I LOVE NAOMI') {
    	message.reply('Chi yêu em!');
  	}
    if (message.content === 'i love naomi') {
    	message.reply('I-I love y-you too /////');
  	}
    if (message.content === 'murder me naomi') {
    	message.reply('I do not t-think that is a g-good idea..');
  	}
    if (message.content === 'step on me naomi') {
    	message.reply('... A-Are you okay in the h-head? Do you need a d-doctor?');
  	}
    if (message.content === 'tomo is gay') {
    	message.reply('I agree.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

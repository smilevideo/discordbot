const fetch = require('node-fetch');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'found',

    description: 'found',

    guildOnly: true,

    argsRequired: true,
    usage: '<user>',

    cooldown: 1,

    execute: async function(message, args) {
        const random = Math.ceil(Math.random() * 2);
        let output;
        if (random === 1) {
            output = 'headrub';
            message.channel.send(`${args[0]} is here!`)
        }
        else if (random === 2) {
            output = 'kill';
            message.channel.send(`${args[0]} sighted.`)
        }

        let imgUrl;
        switch (output) {
            case 'headrub':
                imgUrl = 'https://media2.giphy.com/media/ck5dTRIbNdk4E63Mpa/giphy.gif';
                break;
            case 'kill':
                imgUrl = 'https://media3.giphy.com/media/H4ECN09m38fV7C8nwM/giphy.gif';
                break;
            default:
                console.log('tf happend');
        }

        const img = new MessageAttachment(imgUrl);
        message.channel.send(img);
    },
};
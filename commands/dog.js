const fetch = require('node-fetch');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'dog',

    description: 'post random dog image from Dog API',

    execute: async function(message, args) {
        let dogImg;
        await fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then(j => {
                dogImg = new MessageAttachment(j.message);
            });

        message.channel.send(dogImg);
    },
};
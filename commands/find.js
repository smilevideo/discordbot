module.exports = {
    name: 'find',

    description: 'locate',

    guildOnly: true,

    argsRequired: true,
    usage: '<user>',

    cooldown: 1,

    execute(message, args) {
        message.channel.send(`where the fuck is ${args}`);
    },
};
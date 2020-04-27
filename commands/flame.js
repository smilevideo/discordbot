module.exports = {
    name: 'flame',

    description: 'all r so bad',

    guildOnly: true,

    usage: '[<user>]',

    cooldown: 1,

    execute(message, args) {
        if (args.length === 0) {
            return message.channel.send('ur all so fuking bad');
        }

        message.channel.send(`${args} is so fuking bad holy shit`);
    },
};
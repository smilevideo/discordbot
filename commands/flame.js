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

        const str = args.join(' ');

        if (str.slice(-1) === 's') {
            return message.channel.send(`${str} are so fuking bad holy shit`);
        }
        else {
            message.channel.send(`${str} is so fuking bad holy shit`);
        }
    },
};
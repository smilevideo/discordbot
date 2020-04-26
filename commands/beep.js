module.exports = {
    name: 'beep',

    description: 'boop a beep',

    execute(message, args) {
        message.channel.send('Boop.');
    },
};
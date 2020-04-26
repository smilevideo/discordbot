module.exports = {
    name: 'prune',

    description: 'prune (delete) the last x messages',

    execute(message, args) {
        if (!args.length || !args[0].match(/^[0-9]*$/)) {
            return message.reply('Please provide an integer number of messages to delete..');
        }

        const amount = parseInt(args[0], 10);
        if (amount < 1 || amount > 99) {
            return message.reply('Amount must be between 1 and 99 (inclusive)');
        }

        message.channel.bulkDelete(amount + 1, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this message.channel!');
        });
        message.channel.send(`Deleted the last ${amount} messages.`);
    },
};
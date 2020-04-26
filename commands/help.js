const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    aliases: ['commands'],

    description: 'list all commands or info about a specific command',

    usage: '[command name]',

    cooldown: 5,

    execute(message, args) {
        const helpMessage = [];
        const { commands } = message.client;

        if (!args.length) {
            helpMessage.push('Here\'s a list of all my commands: ');
            helpMessage.push(commands.map(cmd => cmd.name).join(', '));
            helpMessage.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command`);

            return message.author.send(helpMessage, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('It seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }

        const commandName = args[0].toLowerCase();
        const command = commands.get(commandName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        helpMessage.push(`**Name:** ${command.name}`);

        if (command.aliases) helpMessage.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) helpMessage.push(`**Description:** ${command.description}`);
        if (command.argsRequired) helpMessage.push('**Arguments Required:** Yes');
        if (command.usage) helpMessage.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        helpMessage.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(helpMessage, { split: true });
    },
};
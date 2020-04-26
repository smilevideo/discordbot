module.exports = {
    name: 'role',

    description: 'assign a role to a user',

    argsRequired: true,
    usage: '<user> <role>',

    execute(message, args) {
        message.channel.send('Pong.');
    },
};
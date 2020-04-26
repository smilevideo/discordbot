module.exports = {
    name: 'args-info',

    description: 'send back argument info',

    argsRequired: true,

    execute(message, args) {
        let str = '';
        for (let i = 0; i < args.length; i++) {
            if (i === args.length - 1) {
                str += args[i];
            }
            else {
                str += `${args[i]}, `;
            }
        }

        message.channel.send(`Command name: args-info\nArguments: ${str}`);
    },
};
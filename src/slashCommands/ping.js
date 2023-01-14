const {SlashCommandBuilder} = require('discord.js')
module.exports = {
    CMD: new SlashCommandBuilder()
    .setDescription("Sirve para ver el ping del bot"),

    async execute(client, message, args, prefix){
        return message.reply(`\`${client.ws.ping}ms\``)
    }
}
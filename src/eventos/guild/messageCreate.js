const { Integration } = require("discord.js");

module.exports = async (client, message) => {
    if(!message.guild || !message.channel || message.author.bot) return;

    if(!message.content.startsWith(process.env.PREFIX)) return;

    const ARGS = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const CMD = ARGS?.shift()?.toLowerCase();

    const COMANDO = client.commands.get(CMD) || client.commands.find(c => c.ALIASES && c.ALIASES.includes(CMD));

    if(COMANDO){
        if(COMANDO.OWNER) {
            const DUEÑOS = process.env.OWNER_IDS.split(" ");
            if(!DUEÑOS.includes(message.author.id)) return message.reply({content: `**SOLO LOS DUEÑOS DE ESTE BOT PUEDEN USAR ESTE COMANDO!**\n Dueños del bot: ${DUEÑOS.map(DUEÑO => `<@${DUEÑO}>`).join(", ")}`})
        }

        if(COMANDO.BOT_PERMIISSIONS) {
            if(!message.guild.members.me.permissions.has(COMANDO.BOT_PERMIISSIONS)) return message.reply({content: `**NECESITAS LOS SIGUIENTES PERMISOS PARA EJECUTAR ESTE COMANDO!**\n${COMANDO.BOT_PERMIISSIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`})
        }

        if(COMANDO.PERMIISSIONS) {
            if(!message.member.permissions.has(COMANDO.BOT_PERMIISSIONS)) return message.reply({content: `**NECESITAS LOS SIGUIENTES PERMISOS PARA EJECUTAR ESTE COMANDO!**\n${COMANDO.BOT_PERMIISSIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`})
        }

        try {
            COMANDO.execute(client, message, ARGS, process.env.PREFIX);
             } catch(e){
                message.reply({content: `**Ha ocurrido un error al ejecutar el comando!\n*Mira la consola para más detalles!*`});
                console.log(e)
                return;
             }
    }
}
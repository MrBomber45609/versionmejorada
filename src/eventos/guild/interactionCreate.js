module.exports = async (client, interaction) => {
    if(!interaction.guild || !interaction.channel) return;

    const COMANDO = client.slashCommands.get(interaction?.commandName);

    if(COMANDO){
        if(COMANDO.OWNER) {
            const DUEÑOS = process.env.OWNER_IDS.split(" ");
            if(!DUEÑOS.includes(interaction.user.id)) return interaction.reply({content: `**SOLO LOS DUEÑOS DE ESTE BOT PUEDEN USAR ESTE COMANDO!**\n Dueños del bot: ${DUEÑOS.map(DUEÑO => `<@${DUEÑO}>`).join(", ")}}`})
        }

        if(COMANDO.BOT_PERMIISSIONS) {
            if(!interaction.guild.members.me.permissions.has(COMANDO.BOT_PERMIISSIONS)) return interaction.reply({content: `**NECESITAS LOS SIGUIENTES PERMISOS PARA EJECUTAR ESTE COMANDO!**\n${COMANDO.BOT_PERMIISSIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`})
        }

        if(COMANDO.PERMIISSIONS) {
            if(!interaction.member.permissions.has(COMANDO.BOT_PERMIISSIONS)) return interaction.reply({content: `**NECESITAS LOS SIGUIENTES PERMISOS PARA EJECUTAR ESTE COMANDO!**\n${COMANDO.BOT_PERMIISSIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`})
        }

        try {
            COMANDO.execute(client, interaction, "/");
             } catch(e){
                interaction.reply({content: `**Ha ocurrido un error al ejecutar el comando!\n*Mira la consola para más detalles!*`});
                console.log(e)
             }
    }
}
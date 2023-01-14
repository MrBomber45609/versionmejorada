module.exports = {
    OWNER: true,
    aliases: ['loop', 'rp'],
    inVoiceChannel: true,
    async execute(client, message){
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`No hay nada sonando ahora mismo!`)
  let mode = null
  switch (args[0]) {
    case 'off':
      mode = 0
      break
    case 'song':
      mode = 1
      break
    case 'queue':
      mode = 2
      break
    default:
      return message.channel.send(`Modo de repetición inválido. Los modos válidos son 'off', 'song' y 'queue'.`)
  }
      mode = queue.setRepeatMode(mode)
      mode = mode ? (mode === 2 ? 'Repitiendo la lista' : 'Repitiendo la cancion') : 'Off'
      message.channel.send(` El modo repeticion esta \`${mode}\``)
    }
  }
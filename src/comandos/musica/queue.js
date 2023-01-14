module.exports = {
    aliases: ['q'],
    async execute(client, message){
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(` No hay nada reproduciendose ahora!`)
      const q = queue.songs
        .map((song, i) => `${i === 0 ? 'Sonando:' : `${i}.`} ${song.name} - \`${song.formattedDuration}\``)
        .join('\n')
      message.channel.send(` **Server cola**\n${q}`)
    }
  }
module.exports = {
    aliases: ['pause', 'hold', 'ps'],
    inVoiceChannel: true,
    async execute(client, message){
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`No hay nada en la cola ahora mismo!`)
      if (queue.paused) {
        queue.resume()
        return message.channel.send('La cancion ha vuelto a sonar :)')
      }
      queue.pause()
      message.channel.send('La cancion ha sida parada para ti :)')
    }
  }
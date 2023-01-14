module.exports = {
    OWNER: true,
    inVoiceChannel: true,
    async execute(client, message){
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`No hay nada sonado ahora mismo!`)
      queue.shuffle()
      message.channel.send('**Canciones en la cola mezcladas para ti** :)')
    }
  }
module.exports = {
    name: 'autoplay',
    OWNER: true,
    inVoiceChannel: true,
     async execute(client, message){
      
  
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`No hay sonando nada ahora mismo!`)
      const autoplay = queue.toggleAutoplay()
      message.channel.send(`$AutoPlay: \`${autoplay ? 'On' : 'Off'}\``)
    } 
  }
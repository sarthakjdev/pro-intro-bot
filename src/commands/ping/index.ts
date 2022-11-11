/**
 * ping command of the pro intro bot
 */

 import {Components} from '../../struct/Components'

 export default {
     name: 'ping',
     exec: async (interaction) => {
         const { client } = interaction
         console.log('client ', client)
         await interaction.deferReply()
 
         const embed = Components.successEmbed(`Ping Pong Pung :${client.ws.ping}ms `)
         await interaction.editReply(embed)
     },
 }
 
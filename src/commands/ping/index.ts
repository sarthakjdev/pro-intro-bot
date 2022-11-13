/**
 * ping command of the pro intro bot
 */

 import { CommandInteraction } from 'discord.js';
import {Components} from '../../struct/Components'

 export const command =   {
     name: 'ping',
     exec: async (interaction: CommandInteraction) => {
 console.log("interaction ", interaction);
         const { client } = interaction
         console.log('client ', client)
         await interaction.deferReply()
 
         const embed = Components.successEmbed(`Ping Pong Pung :${client.ws.ping}ms `)
         await interaction.editReply(embed)
     },
 }
 
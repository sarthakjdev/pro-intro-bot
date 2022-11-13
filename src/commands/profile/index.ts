/**
 * profile command of the rejoice bot
 */

 import { enableProfileFeature } from './enable'
 import { disableProfileFeature } from './disable'
 import updateUserProfile from './update'
 import getProfile from './getProfile'
 import createUserProfile from './create'
 import deleteUserProfile from './delete'
import { ChatInputCommandInteraction, Guild } from 'discord.js'
import { Bot } from '../../../bot'
import { Factory } from '../../models/factory/factory'
import { Guild as IdbGuild } from '@prisma/client' 

 export const command =  {
     name: 'profile',
     async exec(interaction: ChatInputCommandInteraction) {
         const client = interaction.client as Bot
         const guild = interaction.guild as Guild
         await interaction.deferReply()
         let dbGuild = await Factory.getGuildById(guild.id)
         if (!dbGuild) dbGuild = await Factory.createGuild({ id: guild.id, ownerId: guild.ownerId, profileCommandChannel: null })

         switch (interaction.options.getSubcommand()) {
             case 'enable':
                 return enableProfileFeature(interaction, client, dbGuild as IdbGuild)
             case 'disable':
                 return disableProfileFeature(interaction, client, dbGuild as IdbGuild)
             case 'create':
                 return createUserProfile(interaction, client, dbGuild as IdbGuild)
             case 'update':
                 return updateUserProfile(interaction, client, dbGuild as IdbGuild)
             case 'get':
                 return getProfile(interaction, client, dbGuild as IdbGuild)
             case 'delete':
                 return deleteUserProfile(interaction, client, dbGuild as IdbGuild)
             default:
                 return 'not implented'
         }
     },
 }
 
 
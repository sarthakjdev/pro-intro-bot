/**
 * profile command of the rejoice bot
 */

 import { enableProfileFeature } from './enable'
 import { disableProfileFeature } from './disable'
 import updateUserProfile from './update'
 import getProfile from './getProfile'
 import createUserProfile from './create'
 import deleteUserProfile from './delete'
 
 export default {
     name: 'profile',
     async exec(interaction) {
         const { client, guild } = interaction
         await interaction.deferReply()
         let dbGuild = await client.factory.getGuildById(guild.id)
         if (!dbGuild) dbGuild = await client.factory.createGuild(guild.id, guild.ownerId)
         switch (interaction.options.getSubcommand()) {
             case 'enable':
                 return enableProfileFeature(interaction, client, guild, dbGuild)
             case 'disable':
                 return disableProfileFeature(interaction, client, guild, dbGuild)
             case 'create':
                 return createUserProfile(interaction, client, guild, dbGuild)
             case 'update':
                 return updateUserProfile(interaction, client, guild, dbGuild)
             case 'get':
                 return getProfile(interaction, client, guild, dbGuild)
             case 'delete':
                 return deleteUserProfile(interaction, client, guild, dbGuild)
             default:
                 return 'not implented'
         }
     },
 }
 
 
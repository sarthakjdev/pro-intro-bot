/**
 * ready event of the rejoice discord bot, trigerred when the application logs in
 */

 import logger from '../utils/logger'

 export default async (client) => {
     logger.info(`==== Bot ready :: ${client.user.username} =====`)
     const setStatus = () => client.user.setActivity('discord.gg/rejoiceop', { type: 'WATCHING' })
     setStatus()
 }
 
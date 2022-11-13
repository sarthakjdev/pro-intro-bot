/**
 * guildCreate event of the rejoice discord bot triggered when application is added to a new guild
 */

import { Guild as IdbGuild } from '@prisma/client'
import { Guild as discordGuild } from 'discord.js'
import { Bot } from '../../bot'
import Util from '../utils/util'
import { Factory } from '../models/factory/factory'

export default async (guild: discordGuild): Promise<void> => {
    try {
        const client = guild.client as Bot
        let dbGuild :IdbGuild  = await Factory.getGuildById(guild.id) as IdbGuild

        if(!dbGuild) dbGuild = await Factory.createGuild({id: guild.id, ownerId: guild.ownerId, profileCommandChannel: null }) as IdbGuild

        return 
    } catch (error) {
        return Util.errorPrint(error)
    }
}

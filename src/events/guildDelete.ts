/**
 * guildDelete event of the rejoicce discord bot, trigerred when the application leaves a guild
 */

import { Bot } from '../../bot'
import { Factory } from '../models/factory/factory'
import Util from '../utils/util'

// eslint-disable-next-line consistent-return
export default async (guild): Promise<void> => {
    try {
        const client = guild.client as Bot
        await Factory.deleteGuild(guild.id)
    } catch (error) {
        return Util.errorPrint(error)
    }
}


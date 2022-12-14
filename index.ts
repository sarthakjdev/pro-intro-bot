
import {  Options, GatewayIntentBits, IntentsBitField } from 'discord.js'
import { Bot } from 'bot'
import Util from '@utils/util'

const bot = new Bot({
    shards: 'auto',
    restGlobalRateLimit: 50,
    makeCache: Options.cacheWithLimits({
        MessageManager: 1,
    }),
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers],
})

process.on('unhandledRejection', (error) => {
    Util.errorPrint(error, { description: 'Unhandled error' })
})

bot.build().then()

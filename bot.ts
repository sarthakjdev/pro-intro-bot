/* eslint-disable global-require,import/no-dynamic-require */
import { Client, Collection, User } from 'discord.js'
import { readdirSync } from 'fs'
import path from 'path'
import commandsDefinition from 'commandsDefinition'

import Util from '@utils/util'
import configs from '@configs/config'

/**
 * main entry class for the discord bot
 */
export class Bot extends Client {

    commands: any

    slashCommands: any

    util: Util

    config: any

    constructor(opts) {
        super(opts)
        this.commands = new Collection()
        this.slashCommands = new Collection()
        this.util = Util
    }

    async build(): Promise<void> {
        this.loadSlashCommands()
        this.loadEventListeners()
        await this.login(configs.TOKEN)
        // if (configs.HOME_GUILD_ID) {
        //     await (await this.guilds.fetch(configs.HOME_GUILD_ID)).commands.set(commandsDefinition as any)
        // } else {
            await this.application.fetch()
            await this.application.commands.set(commandsDefinition as any)
        // }
    }

    loadSlashCommands():void {
        const commands = readdirSync(path.join(__dirname, 'src/commands'))
        // eslint-disable-next-line no-restricted-syntax
        for (const commandFolder of commands) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const command = require(`./src/commands/${commandFolder}/index`)
            console.log("command ", command);
            this.slashCommands.set(command.command.name, command.command)
        }
    }

    loadEventListeners(): void {
        let eventHandler
        const eventFiles = readdirSync(`${__dirname}/src/events/`)
        // eslint-disable-next-line array-callback-return
        eventFiles.map((file) => {
            eventHandler = require(`${__dirname}/src/events/${file}`)
            this.on(file.split('.')[0], eventHandler.default)
            // event.bind(null, this)
        })
    }
}

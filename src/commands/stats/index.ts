/**
 * stats command of the pro intro bot
 */

import { CommandInteraction } from 'discord.js';
import { Bot } from '../../../bot';
import { Components } from '../../struct/Components'

export const command = {
    name: 'stats',
    exec: async (interaction: CommandInteraction) => {
        const client = interaction.client as Bot

        const guilds = await client.guilds.fetch()

        const numberOfGuilds = guilds.size
    },
}

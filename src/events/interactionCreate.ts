/**
 * interactionCreate event of the prointro discord bot, trigerred when a new interaction is created
 */

import { Interaction, PermissionsBitField } from 'discord.js'
import { Bot } from '../../bot'
import {Components} from '../struct/Components'
import Util from '../utils/util'

export default async (interaction) => {
    const client = interaction.client as Bot
    if (!interaction.isCommand()) return
    const command = client.slashCommands.get(interaction.commandName)
 console.log("command ", command);
    if (command) {
        try {
            const interactionMemberPerms = interaction.member?.permissions as PermissionsBitField
            const isAdmin = interactionMemberPerms.has('Administrator')
            if (command.adminOnly && !isAdmin) {
                const embed = Components.errorEmbed('You\'re not allowed to use this command')
                await interaction.reply({ embeds: [embed] })
            } else {
                await command.exec(interaction)
            }
        } catch (err) {
            Util.errorPrint(err, { description: `command error :: ${interaction.commandName} | ${interaction.guild?.name} | ${interaction.user.tag}` })
        }
    }
}

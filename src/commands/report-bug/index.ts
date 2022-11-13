/**
 * report bug command of the pro intro bot
 */

import { ChatInputCommandInteraction, TextBasedChannel } from 'discord.js';
import { Components } from '../../struct/Components'
import configs from '../../configs/config'

export const command = {
    name: 'report-bug',
    exec: async (interaction: ChatInputCommandInteraction) => {
        interaction.deferReply()
        const channel =  await interaction.client.channels.fetch(configs.HOME_ADMIN_CHANNEL_ID) as TextBasedChannel

        const bugDescription = interaction.options.get('description')?.value
        const guild = await interaction.guild?.fetch()
        const user = (await interaction.user.fetch()).username
        const bugEmbed = Components.bugEmbed(bugDescription as string, guild?.name as string, user)

        const successEmbed = Components.successEmbed('The bug has been reported succesfully')

        await interaction.editReply(successEmbed)
        return await channel.send(bugEmbed)

    },
}

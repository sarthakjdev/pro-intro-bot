import { Components } from '../../struct/Components'
import { Bot } from '../../../bot'
import { ChatInputCommandInteraction } from 'discord.js'
import { Guild as IdbGuild } from '@prisma/client'
import { Factory } from '../../models/factory/factory'
import { checkChannel } from '../../helpers/helper'

export default async function deleteUserProfile(interaction: ChatInputCommandInteraction, client: Bot, dbGuild: IdbGuild) {
    await checkChannel(interaction, dbGuild)
    if (!dbGuild.profileCommandChannel) {
        const errorEmbed = Components.errorEmbed('The bot  is not enabled for profile feature in this server, Please contact admin to get it enabled')

        return interaction.editReply({ embeds: [errorEmbed] })
    }

    let dbUserProfile = await Factory.getUserProfile(interaction.user.id)

    if (!dbUserProfile) {
        const errorEmbed = Components.errorEmbed('You are not registered your profile')

        await interaction.editReply({ embeds: [errorEmbed] })
    }

     await Factory.deleteUserProfile(interaction.user.id)

    const successEmbed = Components.successEmbed("The profile has beem deleted")
    return interaction.editReply(successEmbed)
}


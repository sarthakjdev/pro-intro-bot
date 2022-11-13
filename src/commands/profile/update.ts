import { ChatInputCommandInteraction } from 'discord.js';
import { Bot } from '../../../bot';
import { Guild as IdbGuild } from '@prisma/client';
import { Components } from '../../struct/Components'
import { Factory } from '../../models/factory/factory';

export default async function updateUserProfile(interaction: ChatInputCommandInteraction, client: Bot, dbGuild: IdbGuild) {
    if (!dbGuild.profileCommandChannel) {
        const errorEmbed = Components.errorEmbed('The bot  is not enabled for profile feature in this server, Please contact admin to get it enabled')

        return interaction.editReply({ embeds: [errorEmbed] })
    }
    let dbUserProfile = await Factory.getUserProfile(interaction.user.id)

    if (!dbUserProfile) {
        const errorEmbed = Components.errorEmbed('You are not registered your profile')

        return await interaction.editReply({ embeds: [errorEmbed] })
    }

    const inputs = interaction.options.data

    // const dbUSerProfile = await Factory.updateUserProfile()

    // const profileEmbed = Components.profile(dbUserProfile)
    // return interaction.editReply(profileEmbed)
}


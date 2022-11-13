import { ChatInputCommandInteraction } from 'discord.js';
import { Bot } from '../../../bot';
import { Guild as IdbGuild } from '@prisma/client';
import { Components } from '../../struct/Components'
import { Factory } from '../../models/factory/factory';
import { checkChannel } from '../../helpers/helper';

export default async function getProfile(interaction: ChatInputCommandInteraction, client: Bot, dbGuild: IdbGuild) {
    await checkChannel(interaction, dbGuild)
    const userToFetch = interaction.options.get('user')?.value
    const userId = userToFetch || interaction.user.id

    const dbUSerProfile = await Factory.getUserProfile(userId as string)

    if (!dbUSerProfile) {
        const errorEmbed = Components.errorEmbed('User don\'n have profile with the bot, use /profile create to create a profile ')

        return interaction.editReply({ embeds: [errorEmbed] })
    }

    const profileEmbed = Components.profile(dbUSerProfile)

    return interaction.editReply(profileEmbed)

}

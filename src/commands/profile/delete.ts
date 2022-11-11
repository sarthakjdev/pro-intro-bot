import { Components } from '../../struct/Components'
import { Bot } from '../../../bot'

export default async function deleteUserProfile(interaction, client: Bot, guild, dbGuild) {
    if (!dbGuild.profileCommandsChannel) {
        const embed = Components.errorEmbed('This server has diabled the profile feature.')

        return interaction.editReply({ embeds: [embed] })
    }
    const { id } = interaction.user

    await client.factory.deleteUserProfile(id as string)

    const successEmbed = Components.successEmbed('Your profile has been deleted succesfully')

    return interaction.editReply(successEmbed)
}


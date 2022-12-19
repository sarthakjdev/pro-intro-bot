import { Components } from '../../struct/Components'
import { Bot } from '../../../bot'
import { ChatInputCommandInteraction, CommandInteraction, User } from 'discord.js'
import { Guild, UserProfile } from '@prisma/client'
import { Factory } from '../../models/factory/factory'

export default async function createUserProfile(interaction: ChatInputCommandInteraction, client: Bot, dbGuild: Guild) {
    if (!dbGuild.profileCommandChannel) {
        const errorEmbed = Components.errorEmbed('The bot  is not enabled for profile feature in this server, Please contact admin to get it enabled')

        return interaction.editReply({ embeds: [errorEmbed] })
    }
    let dbUserProfile = await Factory.getUserProfile(interaction.user.id)

    if(dbUserProfile) {
        const errorEmbed = Components.errorEmbed('You are already registered')

        const channel = await interaction.channel?.fetch()
        const profileEmbed = Components.profile(dbUserProfile)
        await interaction.editReply({ embeds: [errorEmbed] })
        return channel?.send(profileEmbed)
    }
    const inputs = interaction.options.data[0].options

    let userData = {}

    await inputs?.map((opt)=> {
        Object.defineProperty(userData, opt.name as any, {
            value: opt.value,
            writable: true
        })
    })

    const newDbUserProfile = await Factory.createUserProfile({id: interaction.user.id, ...userData as any})

    const profileEmbed = Components.profile(newDbUserProfile as UserProfile)
    return interaction.editReply(profileEmbed)
}


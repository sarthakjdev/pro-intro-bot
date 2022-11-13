import { ChatInputCommandInteraction, ComponentType } from 'discord.js';
import { Bot } from '../../../bot';
import { Guild as IdbGuild } from '@prisma/client';
import {Components} from '../../struct/Components'
import { Factory } from '../../models/factory/factory';
import { PermissionsBitField } from 'discord.js';
import { isAdmin } from '../../helpers/helper';

export async function enableProfileFeature(interaction : ChatInputCommandInteraction, client:Bot , dbGuild: IdbGuild) {

    await isAdmin(interaction)

    if(dbGuild.profileCommandChannel) {
        const successEmbed = Components.successEmbed("Your profile service is already enabled.")

        return interaction.editReply(successEmbed)
    }
    const profileCommandChannel = interaction.options.get('channel')?.value
    await Factory.updateProfileCommandChannel(interaction.guildId as string, profileCommandChannel as string)

    const successEmbed = Components.successEmbed('Your profile feature has been enable for your server')

    return interaction.editReply(successEmbed)

}


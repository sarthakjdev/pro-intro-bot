import { Guild as IdbGuild } from '@prisma/client';
import { ChatInputCommandInteraction } from 'discord.js';
import { Bot } from '../../../bot';
import {Components} from '../../struct/Components'
import { Factory } from '../../models/factory/factory';
import { isAdmin } from '../../helpers/helper';

export async function disableProfileFeature(interaction:ChatInputCommandInteraction , clien: Bot , dbGuild: IdbGuild) {

   await isAdmin(interaction)

    if(!dbGuild.profileCommandChannel) {
        const successEmbed = Components.successEmbed("Your profile service is already disabled.")

        return interaction.editReply(successEmbed)
    }
    await Factory.updateProfileCommandChannel(interaction.guildId as string, null)

    const successEmbed = Components.successEmbed('Your profile feature has been diabled for your server')

    return interaction.editReply(successEmbed)
}


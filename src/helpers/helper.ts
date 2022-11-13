import {  ChatInputCommandInteraction, PermissionsBitField } from "discord.js";
import { Guild as IdbGuild } from "@prisma/client";
import { Components } from "../struct/Components";


export function checkChannel(interaction: ChatInputCommandInteraction, dbGuild: IdbGuild){

    if(interaction.channelId != dbGuild.profileCommandChannel){
        const errorEmbed = Components.errorEmbed('Please use this command in the dedicated channel only')

        return interaction.editReply({embeds: [errorEmbed]})
    }
}

export function isAdmin(interaction: ChatInputCommandInteraction){
    const interactionMemberPerms = interaction.member?.permissions as PermissionsBitField
    const isAdmin = interactionMemberPerms.has('Administrator')

    if(!isAdmin){
        const errorEmbed = Components.errorEmbed('You are not allowed to use this command')

        return interaction.editReply({embeds: [errorEmbed]})
    }

    return
}
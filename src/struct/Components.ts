import { EmbedBuilder } from "@discordjs/builders";
import { UserProfile } from "@prisma/client";
import { APIEmbedField, Colors, EmbedField, User } from "discord.js";
import Util from '../utils/util'
import configs from '../configs/config'

/**
 * class to construct the embeds
 * @class
 * @export
 */
export class Components {

    /**
     * construct the profile embed
     * @param {User} user 
     * @memberof Components
     */
    static profile(user: UserProfile) {
        console.log("user ", user);
        const embed = new EmbedBuilder()
            .setColor(Colors.Green)
            .setDescription(`profile of user <@${user.id}>`)
            .setThumbnail(configs.THUMBNAIL)

        let fields: APIEmbedField[] = [] as any
        for (const prop in user) {
            console.log("prop ", prop);
            const field: APIEmbedField = { name: prop, value: user[prop], inline: false }
            fields.push(field)
        }

        embed.addFields(fields)

        return {
            embeds: [embed],
        }
    }

    /**
     * construct the ping embed
     * @param {string} ping 
     * @meberof Components
     */
    static ping(ping: string) {
        const embed = new EmbedBuilder()
            .setColor(Colors.Green)
            .setDescription(`Ping pong ping, ${ping}`)
            .setThumbnail(configs.THUMBNAIL)


        return {
            embeds: [embed],
        }
    }

    /**
     * bug embed
     * @param {string} description
     * @param {string} guildName
     * @param {string} userName
     * @memberof Components
     */
    static bugEmbed(description: string, guildName: string, user: User) {
        const embed = new EmbedBuilder()
            .setColor(Colors.Red)
            .setDescription(`Bug : ${description}`)
            .setTitle('A bug has been reported')
            .setThumbnail(configs.THUMBNAIL)
            .addFields([{ name: 'Sent by: ', value: `${user.tag}` }, { name: 'User Id', value: `${user.id}` }, { name: 'Guild: ', value: guildName }])

        return {
            embeds: [embed]
        }
    }


    /**
     * to construct the success embed
     * @param {string} message 
     * @memberof Components
     */
    static successEmbed(message) {
        const embed = new EmbedBuilder()
            .setColor(Colors.Green)
            .setDescription(`<:R_verify:915678098782052363> **${message}**`)
            .setThumbnail(configs.THUMBNAIL)


        return {
            embeds: [embed],
        }
    }

    /**
     * error embed
     * @param {string} message 
     * @memberof Components
     */
    static errorEmbed(message) {
        return Util.embed().setDescription(`<:R_cross:915678807367757824> **${message}**`)
    }
}
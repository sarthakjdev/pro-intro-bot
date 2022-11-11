import { EmbedBuilder } from "@discordjs/builders";
import { Colors, User } from "discord.js";
import Util from '../utils/util'

/**
 * class to construct the embeds
 * @class
 * @export
 */
export class Components {

    /**
     * construct the profile embed
     * @param {User} user 
     * @returns 
     */
    static profile(user: User) {
        const embed = new EmbedBuilder()
            .setColor(Colors.Green)

        return {
            embeds: [embed],
        }
    }

    /**
     * construct the ping embed
     * @param {string} ping 
     * @returns {EmbedBuilder}
     */
    static ping(ping: string) {
        const embed = new EmbedBuilder()
            .setColor(Colors.Green)

        return {
            embeds: [embed],
        }
    }


    /**
     * to construct the success embed
     * @param {string} message 
     * @returns 
     */
    static successEmbed(message) {
        const embed = new EmbedBuilder()
            .setColor(Colors.Green)
            .setDescription(`<:R_verify:915678098782052363> **${message}**`)

        return {
            embeds: [embed],
        }
    }

    /**
     * error embed
     * @param {string} message 
     * @returns 
     */
    static errorEmbed(message) {
        return Util.embed().setDescription(`<:R_cross:915678807367757824> **${message}**`)
    }
}
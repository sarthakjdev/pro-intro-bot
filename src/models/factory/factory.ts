import { Guild, UserProfile } from "@prisma/client";
import prisma from '../../lib/PrismaClient'
import Util from "../../utils/util";

export class Factory {

    /**
     * get user by id
     * @param {string} id 
     * @returns {Promise<UserProfile>}
     * @memberof Factory
     */
    static async getUserProfile(id: string): Promise<UserProfile | void | null> {
        try {
            const dbUser = await prisma.userProfile.findFirst({
                where: {
                    id
                }
            })

            return dbUser
        } catch (error) {
            return Util.errorPrint(error)
        }
    }

    /**
     * create a user
     * @param {UserProfile} data 
     * @returns {Promise<UserProfile>}
     * @memberof Factory
     */
    static async createUserProfile(data: UserProfile): Promise<UserProfile | null | void> {
        try {
            const dbUser = await prisma.userProfile.create({
                data: {
                    ...data
                }
            })

            return dbUser
        } catch (error) {
            return Util.errorPrint(error)
        }
    }


    /**
     * update the user
     * @param {UserProfile} user 
     * @returns {Promise<UserProfile>}
     * @memberof Factory
     */
    static async updateUserProfile(user: UserProfile): Promise<UserProfile | null | void> {
        try {
            const dbUser = await prisma.userProfile.update({
                where: {
                    id: user.id
                },
                data: {
                    ...user
                }
            })

            return dbUser
        } catch (error) {
            return Util.errorPrint(error)
        }
    }

    /**
     * delete the user
     * @param {string} id 
     * @returns {Promise<void>}
     * @memberof Factory
     */
    static async deleteUserProfile(id: string): Promise<void> {
        try {
            await prisma.userProfile.delete({
                where: {
                    id
                }
            })

            return
        } catch (error) {
            return Util.errorPrint(error)
        }
    }

    /**
     * create a guild
     * @param {Guild} data 
     * @returns {Promise<Guild>}
     * @memberof Factory
     */
    static async createGuild(guild: Guild): Promise<Guild | void> {
        try {
            const dbGuild = await prisma.guild.create({
                data: {
                    ...guild
                }
            })

            return dbGuild
        } catch (error) {
            return Util.errorPrint(error)
        }
    }


    /**
     * get guild by id
     * @param {string} id 
     * @returns {Promise<Guild>}
     * @memberof Factory
     */
    static async getGuildById(id: string): Promise<Guild | void | null> {
        try {
            const dbGuild = await prisma.guild.findFirst({
                where: {
                    id
                }
            })

            return dbGuild
        } catch (error) {
            return Util.errorPrint(error)
        }
    }

    /**
     * update the guild
     * @param {Guild} user 
     * @returns {Promise<Guild>}
     * @memberof Factory
     */
    static async updateGuild(guild: Guild): Promise<Guild | null | void> {
        try {
            const dbGuild = await prisma.guild.update({
                where: {
                    id: guild.id
                },
                data: {
                    ...guild
                }
            })

            return dbGuild
        } catch (error) {
            return Util.errorPrint(error)
        }
    }

    /**
     * update the guild
     * @param {string} id
     * @param {string} profileCommandChannel 
     * @returns {Promise<Guild>}
     * @memberof Factory
     */
    static async updateProfileCommandChannel(id: string, profileCommandChannel: string | null): Promise<Guild | void> {
        try {
            const dbGuild = await prisma.guild.update({
                where: {
                    id: id
                },
                data: {
                    profileCommandChannel: profileCommandChannel
                }
            })

            return dbGuild
        } catch (error) {
            return Util.errorPrint(error)
        }
    }

    /**
     * delete the guild
     * @param {string} id 
     * @returns {Promise<void>}
     * @memberof Factory
     */
    static async deleteGuild(id: string): Promise<void> {
        try {
            await prisma.guild.delete({
                where: {
                    id
                }
            })

            return
        } catch (error) {
            return Util.errorPrint(error)
        }
    }

}
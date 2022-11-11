import { UserProfile } from "@prisma/client";
import prisma from '@lib/PrismaClient'
import { Bot } from "bot";

export class UserFactory {
    /**
     * discodrd bot client
     * @memberof UserFactory
     */
    client: Bot

    /**
     * constructor to create instance of user factory
     * @constructor
     * @param {Bot} client 
     * @memberof UserFactory
     */
    constructor(client: Bot) {
        this.client = client
    }

    /**
     * get user by id
     * @param {string} id 
     * @returns {Promise<UserProfile>}
     * @memberof UserFactory
     */
    async getUserProfile(id: string): Promise<UserProfile> {
        try {
            const dbUser = await prisma.userProfile.findFirst({
                where: {
                    id
                }
            })

            return dbUser
        } catch (error) {
            this.client.util
        }
    }

    /**
     * create a user
     * @param {UserProfile} data 
     * @returns {Promise<UserProfile>}
     * @memberof UserFactory
     */
    async createUserProfile(data: UserProfile): Promise<UserProfile> {
        try {
            const dbUser = await prisma.userProfile.create({
                data: {
                    ...data
                }
            })

            return dbUser
        } catch (error) {

        }
    }


    /**
     * update the user
     * @param {UserProfile} user 
     * @returns {Promise<UserProfile>}
     * @memberof UserFactory
     */
    async updateUserProfile(user: UserProfile): Promise<UserProfile> {
        try {
            const dbUser = await prisma.userProfile.update({
                where: {
                    id: user.id
                },
                data: {
                    ...user
                }
            })

            return user
        } catch (error) {

        }
    }

    /**
     * delete the user
     * @param {string} id 
     * @returns {Promise<void>}
     * @memberof UserFactory
     */
    async deleteUserProfile(id: string): Promise<void> {
        try {
            await prisma.userProfile.delete({
                where: {
                    id
                }
            })

            return
        } catch (error) {

        }
    }

}
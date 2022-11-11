import {Components} from '../../struct/Components'
import {Bot} from '../../../bot'

export default async function createUserProfile(interaction, client: Bot  , guild, dbGuild) {
    if (!dbGuild.profileCommandsChannel) {
        const embed = Components.errorEmbed('This server has diabled the profile feature.')

        return interaction.editReply({ embeds: [embed] })
    }
    const { id } = interaction.user
    const name = interaction.options.get('name').value
    const description = interaction.options.get('description').value
    const title = interaction.options.get('titile').value
    const twitter = interaction.options.get('twitter')?.value
    const github = interaction.options.get('github')?.value
    const linkedin = interaction.options.get('linkedin')?.value
    const instagram = interaction.options.get('instagram')?.value
    const email = interaction.options.get('skills')?.value
    const resume = interaction.options.get('resume')?.value
    const behance = interaction.options.get('behance')?.value
    const personalPortfolio = interaction.options.get('personalPortfolio')?.value
    const medium = interaction.options.get('medium')?.value
    const skills = interaction.options.get('skills')?.value
    const username = interaction.user.username

    await client.factory.createUserProfile({id , name,  description, title, twitter, github, linkedin, instagram, skills, username, resume, email, behance, personalPortfolio, medium})

    const successEmbed = Components.successEmbed('Your profile has been created')

    return interaction.editReply(successEmbed)
}


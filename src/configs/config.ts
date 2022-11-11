
import path from 'path'
import dotenv from 'dotenv'

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, '../../.env') })
// interface for env file
interface ENV {
    HOME_GUILD_ID: string | undefined
    NODE_ENV: string | undefined
    HOME_ADMIN_CHANNEL_ID: string | undefined
    TOKEN: string | undefined
    COLOR: string | undefined
    THUMBNAIL: string | undefined
    COVER_IMAGE: string | undefined
    DATABASE_URL: string | undefined
    ADMINS: string | undefined
}

// interface for config object generation
interface Config {
    HOME_GUILD_ID: string
    NODE_ENV: string
    HOME_ADMIN_CHANNEL_ID: string
    TOKEN: string
    COLOR: string
    THUMBNAIL: string
    COVER_IMAGE: string
    DATABASE_URL: string
    ADMINS: string
}

// Loading process.env as ENV interface
const getConfig = (): ENV => ({
    HOME_GUILD_ID: process.env.HOME_GUILD_ID,
    NODE_ENV: process.env.NODE_ENV,
    HOME_ADMIN_CHANNEL_ID: process.env.HOME_ADMIN_CHANNEL_ID,
    TOKEN: process.env.TOKEN,
    COLOR: process.env.COLOR,
    THUMBNAIL: process.env.THUMBNAIL,
    COVER_IMAGE: process.env.COVER_IMAGE,
    DATABASE_URL: process.env.DATABASE_URL,
    ADMINS: process.env.ADMINS,
})

// checking if all the nev are defined if not throw ann error
const getVerifiedConfig = (config: ENV): Config => {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`)
        }
    }

    return config as Config
}

const config = getConfig()

const verifiedConfig = getVerifiedConfig(config)

export default verifiedConfig


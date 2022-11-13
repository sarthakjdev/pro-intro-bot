export = [
    {
        name: 'ping',
        description: 'shows the ping',
    },
    {
        name: 'profile',
        description: 'to manipulate the users profile',
        options: [
            {
                name: 'enable',
                description: 'start the profile feature',
                type: 1,
                options: [
                    {
                        name: 'channel',
                        description: 'channel for profile commands',
                        type: 7,
                        required: true,
                    },
                ],
            },
            {
                name: 'disable',
                description: 'stop the profile commands',
                type: 1,
            },
            {
                name: 'create',
                description: 'to create a users profile',
                type: 1,
                options: [
                    {
                        name: 'name',
                        description: 'name of the user',
                        required: true,
                        type: 3,
                    },
                    {
                        name: 'description',
                        description: 'description of the user',
                        required: true,
                        type: 3,
                    },
                    {
                        name: 'twitter',
                        description: 'twitter of the user Ex: https://twitter.com/username',
                        type: 3,

                    },
                    {
                        name: 'linkedin',
                        description: 'github of the user Ex: https://www.linkedin.com/in/username...',
                        type: 3,
                    },
                    {
                        name: 'github',
                        description: 'github of the user Ex: https://www.github.com/username...',
                        type: 3,
                    },
                    {
                        name: 'instagram',
                        description: 'instagram of the user Ex: https://instagram.com/username',
                        type: 3,
                    },
                    {
                        name: 'title',
                        description: 'a one liner title of yours ',
                        type: 3,
                    },
                    {
                        name: 'skills',
                        description: 'skills of the user',
                        type: 3,
                    },
                    {
                        name: 'beahnce',
                        description: 'behance profile link of the user',
                        type: 3,
                    },
                    {
                        name: 'medium',
                        description: 'medium profile of the user',
                        type: 3,
                    },
                    {
                        name: 'devto',
                        description: 'devto profile of the user',
                        type: 3,
                    },
                    {
                        name: 'resume',
                        description: 'resume link of the user',
                        type: 3,
                    },
                    {
                        name: 'portfolio',
                        description: 'personal portfolio link of the user',
                        type: 3,
                    },
                ],
            },
            {
                name: 'update',
                description: 'to update a users profile',
                type: 1,
                options: [
                    {
                        name: 'name',
                        description: 'name of the user',
                        required: true,
                        type: 3,
                    },
                    {
                        name: 'description',
                        description: 'description of the user',
                        required: true,
                        type: 3,
                    },
                    {
                        name: 'twitter',
                        description: 'twitter of the user Ex: https://twitter.com/username',
                        type: 3,

                    },
                    {
                        name: 'linkedin',
                        description: 'github of the user Ex: https://www.linkedin.com/in/username...',
                        type: 3,
                    },
                    {
                        name: 'github',
                        description: 'github of the user Ex: https://www.github.com/username...',
                        type: 3,
                    },
                    {
                        name: 'instagram',
                        description: 'instagram of the user Ex: https://instagram.com/username',
                        type: 3,
                    },
                    {
                        name: 'title',
                        description: 'a one liner title of yours ',
                        type: 3,
                    },
                    {
                        name: 'skills',
                        description: 'skills of the user',
                        type: 3,
                    },
                    {
                        name: 'beahnce',
                        description: 'behance profile link of the user',
                        type: 3,
                    },
                    {
                        name: 'medium',
                        description: 'medium profile of the user',
                        type: 3,
                    },
                    {
                        name: 'devto',
                        description: 'devto profile of the user',
                        type: 3,
                    },
                    {
                        name: 'resume',
                        description: 'resume link of the user',
                        type: 3,
                    },
                    {
                        name: 'portfolio',
                        description: 'personal portfolio link of the user',
                        type: 3,
                    },
                ],
            },
            {
                name: 'get',
                description: 'to get the user link',
                type: 1,
                options: [
                    {
                        name: 'user',
                        description: 'user whom profile is to be fetched',
                        type: 6,
                    },
                ],
            },
            {
                name: 'delete',
                description: 'to delete a users profile',
                type: 1,
            },
        ],
    },
    {
        name: 'report-bug',
        description: 'report a bug to the development team',
        options: [
            {
                name: 'description',
                description: 'description of the bug',
                type: 3,
                required: true,
            },
        ],
    },
    {
        name: 'help',
        description: 'help',
    },
]

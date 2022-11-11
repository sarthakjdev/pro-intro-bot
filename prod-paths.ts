/* eslint-disable @typescript-eslint/no-var-requires */
const tsConfigPaths = require('tsconfig-paths')
// eslint-disable-next-line import/extensions
const tsConfig = require('./tsconfig.base.json')

// import tsConfigPaths from 'tsconfig-paths'
// import tsConfig from './tsconfig.base.json'

const baseUrl = './dist' // Either absolute or relative path. If relative it's resolved to current working directory.
// eslint-disable-next-line no-unused-vars
const cleanup = tsConfigPaths.register({
    baseUrl,
    paths: tsConfig.compilerOptions.paths,
})

// When path registration is no longer needed
// cleanup();

import merge from 'deepmerge'
import local from './local'

const context = require.context('.', false, /\.js$/)
const defaultConfig = {}
context.keys().forEach((file) => {
  const key = file.replace('./', '').replace('.js', '')
  if (['index', 'local'].indexOf(key) === -1) defaultConfig[key] = context(file).default
})

const config = merge(defaultConfig, local)

export const { app, ghost } = config
export default config

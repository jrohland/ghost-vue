import _ from 'lodash'
import local from './local'

const context = require.context('.', false, /\.js$/)
const config = {}
context.keys().forEach((file) => {
  const key = file.replace('./', '').replace('.js', '')
  if (!_.includes(['index', 'local'], key)) config[key] = context(file).default
})

_.merge(config, local)

export const { ghost } = config
export default config

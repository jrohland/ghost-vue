import _ from 'lodash'

const context = require.context('.', false, /\.js$/)
const config = {}
context.keys().forEach((file) => {
  const key = file.replace('./', '').replace('.js', '')
  if (!_.includes(['index', 'local'], key)) config[key] = context(file)
})

// Attempt to load local config
try {
  _.merge(config, require('./local'))
} catch (err) {}

export const { ghost } = config
export default config

import createLogger from 'vuex/dist/logger'
const plugins = []
const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  plugins.push(createLogger({
    collapsed: false
  }))
}
export default plugins

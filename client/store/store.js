import Vuex from 'vuex'
import modules from './modules'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev,
    modules
  })
}

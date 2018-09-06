import Vuex from 'vuex'
import modules from './modules'
import plugins from './plugins'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    modules,
    plugins
  })
  // 开启store热更替
  if (module.hot) {
    module.hot.accept(['./modules'], () => {
      const newModules = require('./modules').default
      store.hotUpdate({
        modules: newModules
      })
    })
  }
  return store
}

import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    mode: 'history',
    routes,
    fallback: true,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  })
}

// return new Router 防止服务端渲染内存溢出

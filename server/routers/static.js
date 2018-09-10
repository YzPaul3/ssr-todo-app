const Router = require('koa-router')
const send = require('koa-send')

// 处理请求路径前缀为public的请求（静态资源）
const staticRouter = new Router({ prefix: '/public' })

staticRouter.get('/*', async ctx => {
  await send(ctx, ctx.path)
})

module.exports = staticRouter

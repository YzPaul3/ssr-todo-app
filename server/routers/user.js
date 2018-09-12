const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'eddie' && user.password === 'eddie111') {
    ctx.session.user = {
      username: 'eddie'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'eddie'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: '用户名密码错误'
    }
  }
})

module.exports = userRouter

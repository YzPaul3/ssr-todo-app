const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'eddie' && user.password === 'eddie111') {
    ctx.session.user = {
      username: 'eddie'
    }
    ctx.status = 200
    ctx.body = {
      respCode: '00',
      respMsg: true,
      result: true
    }
  } else {
    ctx.status = 400
    ctx.body = {
      respCode: '400',
      respMsg: '用户名密码错误!',
      result: null
    }
  }
})

module.exports = userRouter

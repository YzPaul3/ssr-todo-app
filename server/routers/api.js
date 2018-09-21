const Router = require('koa-router')
const axios = require('axios')
const domain = require('../domain.config')
const Cookie = require('../../util/tools')

const apiRouter = new Router({ prefix: '/api' })

const validateLogin = async (ctx, next) => {
  let cookie = ctx.header.cookie
  let userID = Cookie.getCookie(cookie, 'userid')
  if (!userID) {
    ctx.status = 401
    ctx.body = 'need login'
  } else {
    await next()
  }
}

const request = axios.create({
  baseURL: `${domain}/api/`,
  timeout: 1000
})

apiRouter.use(validateLogin)

const successResponse = (data) => {
  return {
    success: true,
    data
  }
}

apiRouter
  .get('/todos', async (ctx) => {
    const res = await request.get('/todos')
    ctx.body = successResponse(res.data)
  })
  .post('/addTodo', async (ctx) => {
    const param = ctx.request.body
    const res = await request.post('/addTodo', param)
    ctx.body = successResponse(res.data)
  })

module.exports = apiRouter

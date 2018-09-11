const Router = require('koa-router')
const axios = require('axios')
const domain = require('../domain.config')

const apiRouter = new Router({ prefix: '/api' })
const request = axios.create({
  baseURL: `${domain}/api/`,
  timeout: 1000
})

// const successResponse = (data) => {
//   return {
//     success: true,
//     data
//   }
// }

apiRouter
  .get('/todos', async (ctx) => {
    const res = await request.get('/todos')
    ctx.body = res.data
  })
  .post('/addTodo', async (ctx) => {
    const param = ctx.request.body
    const res = await request.post('/addTodo', param)
    ctx.body = res.data
  })

module.exports = apiRouter

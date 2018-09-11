const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const mockRouter = new Router()
const db = require('./db')

app.use(async (ctx, next) => {
  try {
    console.log(`mock-server received request with path ${ctx.path}`)
    await next()
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = err.message
  }
})

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, Content-Type')
  ctx.set('Content-Type', 'application/json;charset=utf-8')
  if (ctx.request.method === 'OPTIONS') {
    ctx.response.status = 200
  }
  await next()
})

const handleResponse = (ctx, data) => {
  ctx.body = JSON.stringify(data.resData)
}

db.forEach(mock => {
  mockRouter.all(mock.path, async (ctx) => {
    await handleResponse(ctx, mock)
  })
})

app.use(mockRouter.routes()).use(mockRouter.allowedMethods())

const HOST = '127.0.0.1'
const PORT = '3330'
app.listen(PORT, HOST, () => {
  console.log(`mock-server is listening on ${HOST}:${PORT}`)
})

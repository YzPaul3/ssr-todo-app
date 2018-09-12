require('babel-polyfill')
require('babel-register')({
  ignore: /node_modules\/(?!koa-send|koa-session)/
})
require('./app.js')

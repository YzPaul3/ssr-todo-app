require('babel-polyfill')
require('babel-register')({
  ignore: /node_modules\/(?!koa-send)/
})
require('./app.js')

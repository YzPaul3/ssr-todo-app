let domain
if (process.env.NODE_ENV === 'development') {
  domain = 'http://127.0.0.1:3330'
} else if (process.env.NODE_ENV === 'production') {
  domain = 'http://127.0.0.1:3330'
} else {
  domain = '/'
}

module.exports = domain

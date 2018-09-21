function getCookie (cookie, key) {
  var strCookie = cookie || ''
  // 形如: 'k=v; k=v; k=v; k=v'
  var kvs = strCookie.split(';').map(v => v.trim())
  var objCookie = {}

  kvs.forEach(v => {
    var kv = v.split('=')
    objCookie[kv[0]] = kv[1]
  })

  return objCookie[key]
}

module.exports = {
  getCookie
}

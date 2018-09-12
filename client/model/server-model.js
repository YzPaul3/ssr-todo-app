import axios from 'axios'
import { createError } from './util'
const request = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=utf-8',
    'cookie': ''
  }
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(resp => {
      const data = resp.data
      if (!data) {
        reject(createError(400, 'no data'))
      }
      if (!data.success) {
        reject(createError(400, data.message))
      }
      resolve(data.data)
    })
      .catch(err => {
        const resp = err.response
        if (resp.status === 401) {
          reject(createError(401, 'need auth'))
        }
      })
  })
}

export default {
  getAllTodos (cookies) {
    console.log(` ------------------------
                        ${cookies}
                  ------------------------`)
    return handleRequest(request.get('/api/todos', {
      headers: {
        'cookie': cookies
      }
    }))
  }
}

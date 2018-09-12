import axios from 'axios'
import { createError } from './util'
const request = axios.create({
  baseURL: '/'
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
  getAllTodos () {
    return handleRequest(request.get('/api/todos'))
  },
  addTodos (param) {
    return handleRequest(request.post('/api/addTodo', param))
  },
  login (username, password) {
    return handleRequest(request.post('/user/login', { username, password }))
  }
}

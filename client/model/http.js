/**
 * @file http请求脚本
 * @Author heyuze
 * @Date 2018-09-25
 */
import axios from 'axios'
import qs from 'qs'
import { createError } from './util'

// axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
axios.defaults.crossDomain = true
axios.defaults.timeout = 10000

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(resp => {
      const data = resp.data
      if (!data) {
        reject(createError(400, 'no data'))
      }
      if (data.respCode !== '00') {
        reject(createError(400, data.respMsg))
      }
      resolve(data)
    })
      .catch(err => {
        const resp = err.response
        if (resp.status === 401) {
          reject(createError(401, 'need auth'))
        }
      })
  })
}

export const getData = (url, params) => {
  return handleRequest(axios({
    method: 'get',
    url: `${url}${params ? `?${qs.stringify(params)}` : ''}`
  }))
}

export const postData = (url, params) => {
  return handleRequest(axios({
    method: 'post',
    url: url,
    data: params
  }))
}

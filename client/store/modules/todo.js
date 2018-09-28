import model from '../../model/client-model'
// import serverModel from '../../model/server-model'
import { handleError } from '../../model/util'
import { Notification } from 'element-ui'

export const state = {
  todos: [],
  user: null
}
export const mutations = {
  fillTodos (state, todos) {
    state.todos = todos
  },
  doLogin (state, userInfo) {
    state.user = userInfo
  }
}
export const getters = {
  todos (state) { return state.todos }
}

export const actions = {
  fetchTodos ({ commit }, param) {
    // return serverModel.getAllTodos(cookies)
    return model.getAllTodos(param)
      .then(data => {
        commit('fillTodos', data.result)
      })
      .catch(err => {
        handleError(err)
      })
  },
  addTodos ({ commit }, param) {
    model.addTodos(param)
      .then(data => {
        commit('fillTodos', data.result)
      })
      .catch(err => {
        handleError(err)
      })
  },
  login ({ commit }, param) {
    return new Promise((resolve, reject) => {
      model.login(param)
        .then(data => {
          commit('doLogin', data)
          Notification.success({
            message: '登录成功！'
          })
          resolve()
        })
        .catch(err => {
          handleError(err)
          reject(err)
        })
    })
  }
}

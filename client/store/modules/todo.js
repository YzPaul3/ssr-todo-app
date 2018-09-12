import model from '../../model/client-model'
import serverModel from '../../model/server-model'
import { handleError } from '../../model/util'
import notify from '../../components/notification/function'

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
  fetchTodos ({ commit }, cookies) {
    return serverModel.getAllTodos(cookies)
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
  login ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('doLogin', data)
          notify({
            content: '登录成功！'
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

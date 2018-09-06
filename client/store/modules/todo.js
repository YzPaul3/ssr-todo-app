export const state = {
  count: 0,
  firstName: 'Eddie',
  lastName: 'Ho'
}
export const mutations = {
  updateCount (state, data) {
    state.count = data.num
  }
}
export const getters = {
  fullName (state) {
    return `${state.firstName} ${state.lastName}`
  }
}
export const actions = {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  }
}

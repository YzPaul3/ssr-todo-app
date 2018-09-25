import { getData, postData } from './http'

export default {
  getAllTodos (param) {
    return getData('/api/todos', param)
  },
  addTodos (param) {
    return postData('/api/addTodo', param)
  },
  login (param) {
    return postData('/user/login', param)
  }
}

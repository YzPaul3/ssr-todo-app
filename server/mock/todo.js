const mockjs = require('mockjs')

const todos = mockjs.mock({
  respCode: '00',
  'result|1-10': [
    {
      todo: () => {
        return mockjs.Random.cword(5, 10)
      },
      completed: false
    }
  ],
  respMsg: 'success!'
})

module.exports = [
  {
    path: '/api/todos',
    resData: todos
  },
  {
    path: '/api/addTodo',
    resData: todos
  }
]

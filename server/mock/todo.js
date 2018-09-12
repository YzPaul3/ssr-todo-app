const mockjs = require('mockjs')

const todos = mockjs.mock({
  respCode: '00',
  'result|5': [
    {
      id: () => {
        return mockjs.Random.increment(1)
      },
      content: () => {
        return mockjs.Random.cword(5, 10)
      },
      completed: () => {
        return mockjs.Random.boolean()
      }
    }
  ],
  respMsg: 'success!'
})

const todosAdd = mockjs.mock({
  respCode: '00',
  'result|6': [
    {
      id: () => {
        return mockjs.Random.increment(1)
      },
      content: () => {
        return mockjs.Random.cword(5, 10)
      },
      completed: () => {
        return mockjs.Random.boolean()
      }
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
    resData: todosAdd
  }
]

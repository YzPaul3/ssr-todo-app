const Todo = () => import(/* webpackChunkName: "todo" */ '../views/todo/todo.vue')
const Login = () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo,
    name: 'app',
    meta: {
      title: 'title App',
      description: 'app description'
    }
    // children: []
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }
]

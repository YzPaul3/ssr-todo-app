<template>
  <form class="login-form" @submit="doSubmit">
    <h1>
      <span>Login</span>
      <span class="err-msg" v-show="errorMsg">{{errorMsg}}</span>
    </h1>
    <input type="text" class="login-input" placeholder="User Name" v-model="username">
    <input type="text" class="login-input" placeholder="Password" v-model="password">
    <button class="login-btn" type="submit">登 录</button>
  </form>
</template>
<script>
import {
  mapActions
} from 'vuex'

export default {
  metaInfo: {
    title: 'Login Page'
  },
  data () {
    return {
      username: '',
      password: '',
      errorMsg: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    doSubmit (e) {
      e.preventDefault()
      const param = {
        username: this.username,
        password: this.password
      }
      if (this.validate()) {
        this.login(param).then(() => {
          this.$router.replace('/app')
        })
      }
    },
    validate () {
      if (!this.username.trim()) {
        this.errorMsg = '用户名不能为空'
        return false
      }
      if (!this.password.trim()) {
        this.errorMsg = '密码不能为空'
        return false
      }
      this.errorMsg = ''
      return true
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-form
  display flex
  flex-direction column
  align-items flex-start
  width 350px
  margin 0 auto
  padding 20px
  background-color #fff
  h1
    font-weight 100
    color #3d3d3d
    .err-msg
      color red
      font-size 12px
.login-input
  appearance none
  padding 0 10px
  line-height 30px
  margin-bottom 20px
  border 1px solid #aaa
  width 95%
  border-radius 0
  box-shadow 0 0 0
.login-btn
  appearance none
  width 100%
  line-height 30px
  text-align center
  background-color #0d60c7
  color #eaeaea
  cursor pointer
  border-color #0d60c7
  transition all .3s
  &:hover
    color #fff
    background-color darken(#0d60c7, 10)
.error-msg
  font-size 12px
  color red

// @media screen and (max-width: 600px) {
//   .login-form {
//     width 90%
//   }
//   .login-input{
//     line-height 40px
//   }
// }
</style>

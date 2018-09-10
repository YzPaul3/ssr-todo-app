<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{count}}</p>
    <router-link :to="{name: 'app'}">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <!-- <notification content="test notification"/> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'

export default {
  metaInfo: {
    title: 'A SSR App'
  },
  components: {
    Header,
    Footer
  },
  mounted () {
    this.$notify({
      content: 'test $notify',
      btn: 'close'
    })
    // let i = 1
    // this.updateCountAsync({
    //   num: i++,
    //   time: 2000
    // })
    // setInterval(() => {
    //   this.$store.commit('updateCount', {
    //     num: i++,
    //     time: 2
    //   })
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    ...mapState({
      count: state => state.todo.count
    }),
    ...mapGetters(['fullName'])
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>



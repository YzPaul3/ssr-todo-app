<template>
  <div id="app">
    <Header></Header>
    <!-- <router-link :to="{name: 'app'}">app</router-link>
    <router-link to="/login">login</router-link> -->
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'

export default {
  metaInfo: {
    title: 'A SSR App'
  },
  components: {
    Header,
    Footer
  },
  mounted () {
  },
  methods: {
  },
  computed: {
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
</style>



<template>
  <div id="app">
      <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from 'components/nav/nav.vue'
export default {
  name: 'App',
  components:{
      Nav
  }
}
</script>

<style lang="stylus" >
  #app
    margin 0 auto
</style>

<template>
  <div id="app">
    <Nav></Nav>
    <Abstract
    class="Abstract"
    ref="abstract"
    :class="{top:isTop}"></Abstract>
    <router-view/>
  </div>
</template>

<script>
import Nav from 'components/nav/nav.vue'
import Abstract from 'components/abstract/abstract.vue'
export default {
    name: 'App',
    data(){
        return {
            isTop:false
        }
    },
    components:{
        Nav,
        Abstract
    },
    mounted(){
        let _this = this
        let top = ''
        _this.$nextTick(() =>{
            top = _this.$refs.abstract.$el.offsetTop - 15
        })
        setTimeout( () =>{
            window.onscroll = function(e){
                let y = e.path[1].scrollY
                if(y >= top){
                    _this.isTop = true
                }else {
                    _this.isTop = false
                }
            }
        },16)


    }

}
</script>

<style lang="stylus" >
  #app
    margin 0 auto
    height 2000px
    .Abstract
        margin-top 15px;
        &.top
            position fixed
            top 0px
</style>

<template>
  <div id="app">
    <div class="wrapper">
        <div class="leftWrap">
            <Nav></Nav>
            <Abstract
            class="Abstract"
            ref="abstract"
            :class="{top:isTop}"></Abstract>
        </div>

        <router-view class="rightWarp"/>
    </div>

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
    height 2000px
    width 100%;
    .wrapper
        // display inline-block
        margin 0 auto
        overflow hidden
        display flex
        justify-content center
        .leftWrap
            margin-right 20px
            .Abstract
                margin-top 15px
                &.top
                    position fixed
                    top 0px
        .rightWarp
            width 700px
            box-sizing border-box
            padding 40px
</style>

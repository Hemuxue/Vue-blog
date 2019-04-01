<template>
    <nav class="nav">
        <div class="titleWrap">
            <h2 class="title">Shily's Blog</h2>
            <p class="slogan">Share life, share konwledge</p>
        </div>
        <ul class="navList">
            <li class="navItem "
                v-for="(item,index) of navList"
                :key="item.title"
                @click="handleNavClick(index)"
                :class="{currentRouter: index === currentRouterIndex}"
            >
                <p >
                    <i class="iconfont" :class="item.logo"></i>
                    <span>{{item.title}}</span>
                </p>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    data(){
        return {
            routerList:['home','about','tags','classify','history'],
            navList:[{
                    logo:'icon-home1',
                    title:'首页',
                    path:''
                },{
                    logo:'icon-nickname',
                    title:'关于'
                },{
                    logo:'icon-tags-fill',
                    title:'标签'
                },{
                    logo:'icon-icon_yingyongguanli',
                    title:'分类'
                },{
                    logo:'icon-folder-open',
                    title:'归档'
                }
            ],
            currentRouterIndex:0,
        }
    },
    created(){
        let name = this.$route.name
        this.routerList.forEach( (item,index) =>{
            if(item === name){
                this.currentRouterIndex = index
            }
        })

    },
    watch:{
        $route(to,form){
            let name = to.name
            this.routerList.forEach( (item,index) =>{
                if(item === name){
                    this.currentRouterIndex = index
                }
            })
        }
    },
    methods:{
        handleNavClick(index){
            let router_name =  this.routerList[index]
            this.$router.push({name:router_name})
        }
    },

}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl';
    .nav
        width 240px
        background-color $color-background-content
        font-size $font-size-medium
        .titleWrap
            background-color #000
            width 100%
            padding 20px
            box-sizing border-box
            .title
                height 30px
                line-height 30px
                color $color-text
                text-align center
            .slogan
                margin-top 10px
                text-align center
                color #aaaaaa
        .navList
            width 240px;
            padding 20px 0 20px 0
            color #000
            .navItem
                width 100%
                cursor pointer
                opacity 0.8
                &.currentRouter
                    background-color rgb(249,249,249)
                    >p
                        &:after
                            content ''
                            position absolute
                            top:50%
                            right 15px
                            margin-top -3px
                            height 6px
                            width 6px
                            border-radius 3px
                            background-color #999
                &:hover
                    background-color rgb(249,249,249)
                    opacity 1
                >p
                    position relative
                    width 100%
                    box-sizing border-box
                    font-size $font-size-medium
                    padding 5px 20px
                    line-height 30px
                    height 40px

                    >span
                        margin-left 5px

</style>

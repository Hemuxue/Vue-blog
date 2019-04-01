<template>
    <nav class="nav">
        <div class="titleWrap">
            <h2 class="title">Shily's Blog</h2>
            <p class="slogan">Share life, share konwledge</p>
        </div>
        <ul class="navList">
            <li class="navItem currentRouter"
                v-for="(item,index) of navList"
                :key="item.title"
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
            currentRouter:'',
        }
    },
    methods:{
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
                opacity 0.6
                &.currentRouter
                    background-color #eee
                &:hover
                    opacity 1
                >p
                    position relative
                    width 100%
                    box-sizing border-box
                    font-size $font-size-medium
                    padding 5px 20px
                    line-height 30px
                    height 40px
                    &:after
                        content ''
                        position absolute
                        top:50%
                        right 15px
                        margin-top -3px
                        height 6px
                        width 6px
                        border-radius 3px
                        background-color #bbb
                    >span
                        margin-left 5px

</style>

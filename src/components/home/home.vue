<template>
    <div id="home">
        <ul class="blogWrap">
            <li class="blogList"
            v-for="(item,index) of blog"
            :key="item.id">
                <h1 class="title">{{item.title}}</h1>
                <div class="desWrap">
                    <p class="desItem">
                        <span class="textWrap"><i class="iconfont icon-calendar"></i></span><span class="textWrap">发表于</span><span class="textWrap">{{item.create_time}}</span>
                    </p>
                    <p class="desItem">
                        <span class="textWrap"><i class="iconfont icon-folder-open"></i></span>
                        <span class="textWrap">分类于</span>
                        <span class="textWrap">{{item.type}}</span>
                    </p>
                    <p class="desItem">
                        <span class="textWrap"><i class="iconfont icon-comment"></i></span>
                        <span class="textWrap">评论数：</span>
                        <span class="textWrap">{{item.common_number}}</span>
                    </p>
                    <p class="desItem">
                        <span class="textWrap"><i class="iconfont icon-icon_yulan"></i></span>
                        <span class="textWrap">阅读次数：</span>
                        <span class="textWrap">{{item.views}}</span>
                    </p>
                </div>
                <p class="content" v-html="item.content"></p>
                <div class="warp">
                    <div class="button">阅读更多></div>
                </div>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            blog : [{
                id:1,
                title:'Object 属性与方法全接触',
                content:'一起论文云服务平台,以论文指导、批阅、查重及答辩为主线,围绕“管理员、导师、学生”三方主体,实现论文指导全过程实时交互、管理和跟踪。',
                create_time: '2019-4-8',
                type:'JavaScript',
                common_number:4,
                views:12,

            },{
                id:2,
                title:'Object 属性与方法全接触',
                content:'一起论文云服务平台,以论文指导、批阅、查重及答辩为主线,围绕“管理员、导师、学生”三方主体,实现论文指导全过程实时交互、管理和跟踪。',
                create_time: '2019-4-8',
                type:'JavaScript',
                common_number:4,
                views:12,

            },{
                id:3,
                title:'Object 属性与方法全接触',
                content:'一起论文云服务平台,以论文指导、批阅、查重及答辩为主线,围绕“管理员、导师、学生”三方主体,实现论文指导全过程实时交互、管理和跟踪。',
                create_time: '2019-4-8',
                type:'JavaScript',
                common_number:4,
                views:12,

            }]
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~common/stylus/variable.styl';
    #home
        .blogWrap
            display flex
            flex-direction column
            justify-content flex-start
            .blogList
                position relative
                overflow hidden
                margin-top 60px
                .title
                    color $color-title
                    text-align center
                    font-weight 400
                    font-size 22px
                .desWrap
                    overflow hidden
                    text-align center
                    .desItem
                        margin-top 25px
                        display inline-block
                        height 16px
                        line-height 16px
                        font-size 12px
                        padding-right 15px
                        border-right 1px solid #999
                        &:nth-last-of-type(1)
                            border none
                        .textWrap
                            margin-left 5px
                            color #999
                            >i
                                font-size 12px;
                .content
                    margin-top 35px
                    height 80px
                    line-height 20px
                .warp
                    text-align center
                    margin 10px 0 60px 0
                    .button
                        display inline-block
                        line-height 25px
                        height 25px
                        border 2px solid #999999
                        border-radius  5px
                        padding 5px 10px
                &:after
                    content ''
                    position absolute
                    height 0px
                    width 70px
                    border-bottom 1px solid #bbb
                    bottom 0
                    left 50%
                    transform  translateX(-50%)






</style>

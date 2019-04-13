<template>
    <div id="about">
        <h4 class="title"><span>Shirly</span>前端工程师</h4>
        <p class="des">目前工作于成都天府三街，附件的小伙伴可以一起学习，一起提高。<br/>
        专注于前端开发(Vue, Angular, Node),全栈发展。<br/>
        欢迎来到我的博客，在这里我会分享我学习和工作中的感悟、知识。以及生活的点滴。<br/>
        欢迎给我留言。:) </p>

        <p class="remark">博客内容均为原创，如需转载，请该页面留言并在注明来源 :)</p>

        <div class="contact">
            <p class="cTitle">联系方式</p>
            <p class="number">Email: 527211775@qq.com | QQ:52721175</p>
        </div>
        <div class="iconWrap">
            <p class="icon">
                <i class="iconfont icon-github-fill"></i>
                <a href="https://github.com/Hemuxue" target="_Blank">Github</a>
            </p>
            <p class="icon">
                <i class="iconfont icon-juejin"></i>
                <a href="https://juejin.im/user/5b47eac6e51d4519115ced21/activities" target="_Blank">掘金</a>
            </p>
        </div>


    </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
    @import '~common/stylus/variable.styl';
    #about
        color $color-title;
        font-size $font-size-medium
        .title
            margin-top 100px
            margin-bottom 15px
            font-weight bold

            >span
                font-size $font-size-large
                font-weight bold
                margin-right 5px
        .des
            height 120px
            line-height 30px
        .remark
            margin-top 30px
            font-size $font-size-small
        .contact
            margin-top 30px
            font-size $font-size-medium
            .cTitle
                font-weight bold
                height 25px
                line-height 25px
            .number
                height 25px
                line-height 25px


        .iconWrap
            overflow hidden
            display flex
            justify-content flex-start
            margin-top 10px
            .icon
                margin-right 20px






</style>

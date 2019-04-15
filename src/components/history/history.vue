<template>
    <div id="history">
        <div class="hisWrap">

            <span class="icon"></span>
            <span class="totalDes">不错! 目前共计 77 篇日志。 继续努力。</span>

            <div class="yearWrap">
                <h1 class="year">2018</h1>
            </div>
            <div class="warpper"
            v-for="(item, index ) of dataList"
            :key="item.id">
                <div class="titleItem">
                    <span>{{item.time}}</span>
                    <h3 class="title">{{item.title}}</h3>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            dataList: [
                {
                    id:0,
                    time:'04-12',
                    title:'Object属性与方法全接触'
                },
                {
                    id:1,
                    time:'04-12',
                    title:'Object属性与方法全接触'
                },
                {
                    id:2,
                    time:'04-12',
                    title:'Object属性与方法全接触'
                },
                {
                    id:3,
                    time:'04-12',
                    title:'Object属性与方法全接触'
                },
                {
                    id:4,
                    time:'04-12',
                    title:'Object属性与方法全接触'
                },
                {
                    id:5,
                    time:'04-12',
                    title:'Object属性与方法全接触'
                },
                {
                    id:6,
                    time:'04-12',
                    title:'Object属性与方法全接触'
                },
            ]
        }
    }

}
</script>
<style lang="stylus" scoped>
    #history
        overflow hidden
        .hisWrap
            color #555
            margin-left 55px
            position relative
            z-index 1000
            padding-bottom 1px
            &:before
                content:''
                margin-left -2px
                top 0
                left  0
                position absolute
                width 4px
                height 100%
                background-color #f5f5f5
                z-index -1

            .icon
                position absolute
                height 10px
                width 10px
                border-radius 50%
                background #555
                opacity .5
                border 1px solid #fff
                left -6px
            .totalDes
                position relative
                left 20px
                color #555
                font-size 14px
            .yearWrap
                position relative
                margin 60px 0

                &:before
                    content ''
                    width 8px
                    height 8px
                    border-radius 50%
                    position absolute
                    background-color #555
                    opacity .5
                    border 1px solid #fff
                    left -5px
                    top 6px
                    z-index 10
                .year
                    margin-left 20px;
                    font-size 22px
                    font-weight bold
            .warpper
                margin-bottom 20px
                .titleItem
                    position relative
                    padding 0px 0 20px 20px
                    border-bottom: 1px dashed #ccc;
                    line-height 30px
                    height 30px
                    display flex
                    justify-content flex-start


                    &:before
                        content:''
                        width 6px
                        height 6px
                        border-radius 50%
                        position absolute
                        background-color #555
                        opacity .5
                        border 1px solid #fff
                        left -4px
                        top 11px
                        z-index 10
                    >span
                        color #555
                        line-height 30px
                        height 30px
                        margin-right 5px
                        font-size 12px
                    .title
                        font-size 16px
                        color #666
                        font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;




</style>

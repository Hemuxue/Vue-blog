<template>
    <div id="tags">
        <header class="header">tags</header>
        <div class="tagCloud">
            <h3 class="tagTitle">目前共计{{tagNumber}}个标签</h3>
            <div class="tagList" ref="tagList">
                <p v-for="(tag, index) of tagList"
                :key="tag.id"
                :index="index"
                class="tag">{{tag.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tagNumber: 40,
            tagList:[
                {
                    id:'1',
                    name:'Babel',
                    number:'2'
                },
                {
                    id:'2',
                    name:'css3',
                    number:'2'
                },
                {
                    id:'4',
                    name:'html5',
                    number:'2'
                },
                {
                    id:'5',
                    name:'Es6',
                    number:'2'
                },
                {
                    id:'6',
                    name:'Node',
                    number:'20'
                },
                {
                    id:'7',
                    name:'Vue',
                    number:'8'
                },
                {
                    id:'8',
                    name:'Angular',
                    number:'4'
                },
                {
                    id:'9',
                    name:'函数式编程',
                    number:'7'
                },
                {
                    id:'10',
                    name:'Babel',
                    number:'9'
                },

                {
                    id:'11',
                    name:'防抖节流',
                    number:'7'
                },

            ]

        }
    },
    mounted(){
        if(this.tagList.length !== 0 ){
            console.log('inter')
            this.$nextTick( () => {
                let tagsDomList =  Array.from(this.$refs.tagList.children);
                let tagList = this.tagList;
                let number = 0;
                let size,color,tempNumber;
                tagsDomList.forEach( (tag, index) =>{
                    number = tagList[index].number
                    if(number > 10){
                        size = 10 * 2 + 10
                        color = `#000000`
                    }else {
                        size = number * 2 + 10
                        tempNumber = Math.floor( 255 - number * 25.5 )
                        color = `rgb(${tempNumber}, ${tempNumber}, ${tempNumber})`
                    }
                    console.log(tag.style)
                    console.log(size.color)
                    tag.style.fontSize = size + 'px'
                    tag.style.color = color
                })
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~common/stylus/variable.styl'
    #tags
        overflow hidden
        padding-top 40px
        color $color-title
        .header
            font-size $font-size-large-x
            margin-top 60px
            text-align center
        .tagCloud
            overflow hidden
            margin-top 60px
            .tagTitle
                overflow hidden
                text-align center
                margin-bottom 20px
            .tagList
                text-align center
                .tag
                    display inline-block
                    margin 20px 15px
                    line-height 2
                    border-bottom 1px solid #999
                    font-size $font-size-small
                    color #ccc



</style>

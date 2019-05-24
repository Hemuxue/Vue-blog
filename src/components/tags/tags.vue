<template>
  <div id="tags">
    <header class="header">tags</header>
    <div class="tagCloud">
      <h3 class="tagTitle">目前共计{{tempTotal}}个标签</h3>
      <div class="tagList" ref="tagList">
        <p v-for="(tag, index) of tagList" :key="tag.tag_id" :index="index" class="tag" @click="handleRouteClick(tag.tag_id, tag.name)">{{tag.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      tempTotal: 0,
      tagList: []
    };
  },
  created(){
    this.getTagStatistics();
  },
  mounted() {
    if (this.tagList.length !== 0) {
      this.$nextTick(() => {
        let tagsDomList = Array.from(this.$refs.tagList.children);
        let tagList = this.tagList;
        let total = 0;
        let size, color, tempTotal;
        tagsDomList.forEach((tag, index) => {
          total = tagList[index].total;
          if (total > 10) {
            size = 10 * 2 + 10;
            color = `#000000`;
          } else {
            size = total * 2 + 10;
            tempTotal = Math.floor(255 - total * 25.5);
            color = `rgb(${tempTotal}, ${tempTotal}, ${tempTotal})`;
          }
          tag.style.fontSize = size + "px";
          tag.style.color = color;
        });
      });
    }
  },
  methods: {
    getTagStatistics(){
      Axios.get(`/api/getTagStatistics`).then(data => {

        if(data.data.code === 200 && data.data.status === 'success') {
          this.tagList = data.data.data
          this.tempTotal = this.tagList.length
        }
      })
    },
    handleRouteClick(id, name){
      this.$router.push({path: `/history/${id}`, query:{
        name: name,
        type: 'tag'
      }})
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl';

#tags {
  overflow: hidden;
  padding-top: 40px;
  color: $color-title;

  .header {
    font-size: $font-size-large-x;
    margin-top: 60px;
    text-align: center;
  }

  .tagCloud {
    overflow: hidden;
    margin-top: 60px;

    .tagTitle {
      overflow: hidden;
      text-align: center;
      margin-bottom: 20px;
    }

    .tagList {
      text-align: center;

      .tag {
        display: inline-block;
        margin: 20px 15px;
        line-height: 2;
        border-bottom: 1px solid #999;
        font-size: $font-size-small;
        color: #ccc;
        cursor:pointer;
      }
    }
  }
}
</style>

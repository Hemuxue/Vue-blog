<template>
  <div id="type">
    <header class="header">Classify</header>
    <header class="header" style="font-size: 16px;">目前共{{total}}个分类</header>
    <div class="type-all">
      <ul class="type-list">
        <li class="type-item" v-for="type of typeList" :key="type.type_id">
          <span class="type" @click="handleRouteClick(type.type_id, type.name)">{{type.name}}</span>
          <span class="type-item-total">{{`(${type.total})`}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      total: 0,
      typeList: []
    };
  },
  created(){
    this.getTypeStatistics();
  },
  methods: {
    getTypeStatistics(){
      Axios.get(`/api/getTypeStatistics`).then(data => {

        if(data.data.code === 200 && data.data.status === 'success') {
          this.typeList = data.data.data
          this.total = this.typeList.length
        }
      })
    },
    handleRouteClick(id, name){
      this.$router.push({path: `/history/${id}`, query:{
        name: name,
        type: 'type'
      }})
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl';

#type {
  overflow: hidden;
  padding-top: 40px;
  color: $color-title;

  .header {
    font-size: $font-size-large-x;
    margin-top: 60px;
    text-align: center;
  }
  .type-all {

    .type-list {
      margin-top: 30px;

      .type-item {
        list-style: circle;
        margin: 5px 10px;
        height 30px;
        line-height 30px;
        cursor:pointer;
        .type{
          color: #555;
          border-bottom: 1px solid #555;
        }
      }

    }

  }
}
</style>

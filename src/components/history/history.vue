<template>
  <div id="history">
    <div class="hisWrap">
      <div v-if="id === ''">
        <span class="icon"></span>
        <span class="totalDes">不错! 目前共计 {{total}} 篇日志。 继续努力。</span>
      </div>


      <div class="yearWrap">
        <h1 class="year" v-if="id === ''">2019</h1>
        <h1 class="year" v-else>
          {{name}}
          <span>{{flag}}</span>
        </h1>
      </div>
      <div class="warpper"  v-for="item of dataList" :key="item.id" @click="handleRouteClick(item.id)">
        <div class="titleItem">
          <span>{{item.ctime}}</span>
          <h3 class="title">{{item.title}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
import { yearFromate } from "common/js/util.js";
export default {
  data() {
    return {
      dataList: [],
      id: '',
      name: '',
      type: '',
      total: '',
      page: 1,
      pageSize: 10

    };
  },
  created() {
    this.getRouter()
    this.getData()
  },
  watch: {
    $route(to,from){
      this.getRouter()
      this.getData()
    }
  },
  methods: {
    getData(){
      if(this.name) {
        if(this.type === 'type') {
          Axios.get(`/api/getTypeClassfiy?type=${this.name}`).then((data) => {
            if(data.data.code === 200) {
              this.dataList = data.data.data
              this.dataList.forEach(ele => {
                ele.ctime = yearFromate(ele.ctime)
              })
            }
          })
        } else {
          Axios.get(`/api/getTagClassfiy?type=${this.name}`).then((data) => {
            if(data.data.code === 200) {
              this.dataList = data.data.data;
              this.dataList.forEach(ele => {
                ele.ctime = yearFromate(ele.ctime)
              })
            }
          })
        }

      }else {
        Axios.get(`/api/getBlogList?page=${this.page}&pageSize=${this.pageSize}`).then((data) => {
          if(data.data.code === 200) {
            let temp = data.data.data
            this.total = temp.total
            this.page = temp.total
            this.dataList = temp.data
            this.dataList.forEach(ele => {
              ele.ctime = yearFromate(ele.ctime)
            })
          }
        });
      }
    },
    getRouter() {
      const route = this.$route
      if(route.params.id) {
        this.id = route.params.id
      } else {
        this.id = ''
      }
      if(route.query.name && route.query.type) {
        this.name = route.query.name
        this.type = route.query.type
        this.flag = this.type === 'type' ? '分类' : '标签';
      } else {
        this.name = ''
        this.type = ''
        this.flag = ''
      }
    },
    handleRouteClick(id){
      this.$router.push({path: `/detail/${id}`})
    }
  }
};
</script>
<style lang="stylus" scoped>
#history {
  overflow: hidden;

  .hisWrap {
    color: #555;
    margin-left: 55px;
    position: relative;
    z-index: 1000;
    padding-bottom: 1px;

    &:before {
      content: '';
      margin-left: -2px;
      top: 0;
      left: 0;
      position: absolute;
      width: 4px;
      height: 100%;
      background-color: #f5f5f5;
      z-index: -1;
    }

    .icon {
      position: absolute;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background: #555;
      opacity: 0.5;
      border: 1px solid #fff;
      left: -6px;
    }

    .totalDes {
      position: relative;
      left: 20px;
      color: #555;
      font-size: 14px;
    }

    .yearWrap {
      position: relative;
      margin: 60px 0;

      &:before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: absolute;
        background-color: #555;
        opacity: 0.5;
        border: 1px solid #fff;
        left: -5px;
        top: 6px;
        z-index: 10;
      }

      .year {
        margin-left: 20px;
        font-size: 22px;
        font-weight: bold;
        >span {
          font-size: 16px;
          color: #bbb;
          margin-left: 5px;
          font-weight:600;
        }
      }
    }

    .warpper {
      margin-bottom: 20px;
      cursor:pointer;

      .titleItem {
        position: relative;
        padding: 0px 0 20px 20px;
        border-bottom: 1px dashed #ccc;
        line-height: 30px;
        height: 30px;
        display: flex;
        justify-content: flex-start;

        &:before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          background-color: #555;
          opacity: 0.5;
          border: 1px solid #fff;
          left: -4px;
          top: 11px;
          z-index: 10;
        }

        >span {
          color: #555;
          line-height: 30px;
          height: 30px;
          margin-right: 5px;
          font-size: 12px;
        }

        .title {
          font-size: 16px;
          color: #666;
          font-family: 'Lato', 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
      }
    }
  }
}
</style>

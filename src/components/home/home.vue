<template>
  <div id="home">
    <ul class="blogWrap">
      <li class="blogList" v-for="(item) of blogList" :key="item.id">
        <h1 class="title" @click="handleDetailClick(item.id)">{{item.title}}</h1>
        <div class="desWrap">
          <p class="desItem">
            <span class="textWrap">
              <i class="iconfont icon-calendar"></i>
            </span>
            <span class="textWrap">发表于</span>
            <span class="textWrap">{{item.ctime}}</span>
          </p>
          <p class="desItem">
            <span class="textWrap">
              <i class="iconfont icon-folder-open"></i>
            </span>
            <span class="textWrap">分类于</span>
            <span class="textWrap">{{item.type}}</span>
          </p>
          <p class="desItem">
            <span class="textWrap">
              <i class="iconfont icon-comment"></i>
            </span>
            <span class="textWrap">评论数：</span>
            <span class="textWrap">{{item.common_number}}</span>
          </p>
          <p class="desItem">
            <span class="textWrap">
              <i class="iconfont icon-icon_yulan"></i>
            </span>
            <span class="textWrap">阅读次数：</span>
            <span class="textWrap">{{item.views}}</span>
          </p>
        </div>
        <div class="content" v-html="item.content"></div>
        <div class="warp">
          <div class="button" @click="handleDetailClick(item.id)">阅读更多></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Axios from "axios";
import { yearFromate } from "common/js/util.js";
export default {
  data() {
    return {
      blogList: [],
      page:1,
      pageSize:10,
      total:0
    };
  },
  created() {
    this.getBlog()
  },
  methods: {
    getBlog(page = 1 , pageSize = 10){
      Axios.get(`/api/getBlogList?page=${page}&pageSize=${pageSize}`).then(data => {
        console.log(data);
        this.blogList = [];
        if(data.data.code === 200 && data.data.status === 'success'){
          const temp = data.data.data;
          this.total = temp.total
          temp.data.forEach(item =>{
            item.ctime = yearFromate(item.ctime)
            item.common_number = '123'
            this.blogList.push(item);
          })
          console.log(this.blogList);
        }
      })
    },
    handleDetailClick(id){
      console.log(id)
      this.$router.push({path: `detail/${id}`})
    }
  }
};
</script>
<style lang="stylus" >
@import '~common/stylus/variable.styl';
#home {
  .blogWrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .blogList {
      position: relative;
      overflow: hidden;
      margin-top: 60px;

      .title {
        cursor pointer;
        color: $color-title;
        text-align: center;
        font-weight: 400;
        font-size: 22px;
      }

      .desWrap {
        overflow: hidden;
        text-align: center;

        .desItem {
          margin-top: 25px;
          display: inline-block;
          height: 16px;
          line-height: 16px;
          font-size: 12px;
          padding-right: 15px;
          border-right: 1px solid #999;

          &:nth-last-of-type(1) {
            border: none;
          }

          .textWrap {
            margin-left: 5px;
            color: #999;

            >i {
              font-size: 12px;
            }
          }
        }
      }

      .content {
        overflow hidden
        margin-top: 35px;
        max-height: 300px;
        min-width:100px

        img {
          max-width: 620px;
        }
      }

      .warp {
        text-align: center;
        margin: 30px 0 50px 0;

        .button {
          box-sizing:content-box;
          display: inline-block;
          line-height: 25px;
          height: 25px;
          border: 2px solid #999999;
          border-radius: 5px;
          padding: 5px 10px;
          cursor pointer;
        }
      }

      &:after {
        content: '';
        position: absolute;
        height: 0px;
        width: 70px;
        border-bottom: 1px solid #bbb;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>

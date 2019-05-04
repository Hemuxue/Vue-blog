<template>
  <div class="abstract">
    <!-- <ul class="tab">
      <li
        v-for="(item,index) of tabList"
        :key="item"
        class="tabItem"
        @click="handleTabClick(index)"
        :class="{active: index === activeTabIndex}"
      >{{item}}</li>
    </ul> -->
    <div class="intro">
      <div class="imgWrap">
        <img src="./Zhuoku063.jpg" alt>
      </div>
      <p class="name">Shirly</p>
      <ul class="classifyWrap">
        <li class="classifyList" v-for="(item) of classifyList" :key="item">{{item}}</li>
      </ul>
      <ul class="total">
        <li
          class="totalItem"
          v-for="(item,index) of totalList"
          @click="handleRouterClick(index)"
          :key="item.name"
        >
          <p class="totalNumber">{{item.total}}</p>
          <p class="totalDes">{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import { yearFromate } from "common/js/util.js";
export default {
  data() {
    return {
      routerList: ["history", "classify", "tags"],
      tabList: ["站点概览"],
      classifyList: ["JavaScript", "Vue", "Angular", "Node"],
      totalList: [],
      activeTabIndex: 1
    };
  },
  created() {
    this.getStatistics();
  },
  methods: {
    handleTabClick(index) {
      this.activeTabIndex = index;
    },
    handleRouterClick(index) {
      let router_name = this.routerList[index];
      this.$router.push({ name: router_name });
    },
    getStatistics() {
      Promise.all([
        Axios.get("/api/getBlogCount"),
        Axios.get("/api/getTypeCount"),
        Axios.get("/api/getTagCount")
      ]).then(([blog, type, tag]) => {
        this.totalList.push({
          total:blog.data.data.total,
          name: '博客'
        })
        this.totalList.push({
          total:type.data.data.total,
          name: '分类'
        })
        this.totalList.push({
          total:tag.data.data.total,
          name: '标签'
        })
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable.styl';

.abstract {
  padding: 40px 20px;
  background-color: #fff;
  width: 240px;
  box-sizing: border-box;

  .tab {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    .tabItem {
      // margin-right 20px;
      margin: 0 15px;
      font-size: $font-size-medium;
      cursor: pointer;
      height: 30px;
      line-height: 30px;

      &:hover {
        color: #fc6423;
      }

      &.active {
        color: #fc6423;
        border-bottom: 1px solid #fc6423;
      }
    }
  }

  .intro {
    .imgWrap {
      margin: 0 auto;
      text-align: center;

      >img {
        width: 100px;
        height: 100px;
        padding: 3px;
        border: 1px solid #eee;
      }
    }

    .name {
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-weight: bold;
    }

    .classifyWrap {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;

      .classifyList {
        padding: 0 4px;
        border-right: 1px solid #777;
        opacity: 0.6;
        font-size: $font-size-medium;

        &:nth-last-of-type(1) {
          border: none;
        }
      }
    }

    .total {
      margin-top: 40px;
      display: flex;
      justify-content: center;

      .totalItem {
        padding: 0 8px;
        border-right: 1px solid #eee;
        font-weight: bold;
        cursor: pointer;

        >p {
          text-align: center;
        }

        .totalNumber {
          opacity: 0.7;
          font-size: $font-size-large;
          font-weight: bold;

          &:hover {
            opacity: 0.9;
          }
        }

        .totalDes {
          margin-top: 5px;
          opacity: 0.5;
          font-size: $font-size-small;
        }
      }
    }
  }
}
</style>

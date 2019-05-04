<template>
  <div class="detail" v-if="!loading">
    <div class="blog">
      <h1 class="title">{{blog.title}}</h1>
      <div class="desWrap">
        <p class="desItem">
          <span class="textWrap">
            <i class="iconfont icon-calendar"></i>
          </span>
          <span class="textWrap">发表于</span>
          <span class="textWrap">{{blog.ctime}}</span>
        </p>
        <p class="desItem">
          <span class="textWrap">
            <i class="iconfont icon-folder-open"></i>
          </span>
          <span class="textWrap">分类于</span>
          <span class="textWrap">{{blog.type}}</span>
        </p>
        <p class="desItem">
          <span class="textWrap">
            <i class="iconfont icon-comment"></i>
          </span>
          <span class="textWrap">评论数：</span>
          <span class="textWrap">123</span>
        </p>
        <p class="desItem">
          <span class="textWrap">
            <i class="iconfont icon-icon_yulan"></i>
          </span>
          <span class="textWrap">阅读次数：</span>
          <span class="textWrap">{{blog.views}}</span>
        </p>
      </div>
      <div class="content" v-html="blog.content"></div>
    </div>
    <Comment :blogId="id"></Comment>
  </div>
</template>
<script>
import Comment from "../comment/comment";
import Axios from "axios";
import { yearFromate } from "common/js/util.js";
export default {
  components: {
    Comment
  },
  data() {
    return {
      id:'',
      blog: {},
      page: 1,
      pageSize: 10,
      total: 0,
      loading: true
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      this.loading = true;
      Axios.get(`/api/getBlogDetail?id=${this.id}`).then(data => {
        this.blogList = [];
        if (data.data.code === 200 && data.data.status === "success") {
          const temp = data.data.data;
          const blog = {};
          for (const prop in temp) {
            if (prop === "ctime") {
              blog[prop] = yearFromate(temp[prop]);
            } else {
              blog[prop] = temp[prop];
            }
          }
          this.blog = blog;
          this.loading = false;
        }
      });
    }
  }
};
</script>
<style lang="stylus">
@import '~common/stylus/variable.styl';

.detail {
  .blog {
    position: relative;
    overflow: hidden;
    margin-top: 60px;

    .title {
      cursor: pointer;
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
      overflow: hidden;
      margin-top: 35px;
      max-height: 300px;
      min-width: 100px;

      img {
        max-width: 620px;
      }
    }
  }
}
</style>

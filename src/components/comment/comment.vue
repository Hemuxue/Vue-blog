<template>
  <div class="comment">
    <div class="comment-list">
      <p class="comment-count">
        <span class="count">{{count}}</span>
        <span>评论</span>
      </p>
      <a-comment v-for="comment of commentList" :key="comment.id">
        <span slot="actions" v-on:click="handleReply(comment.id, comment.id, comment.user_name)">Reply to</span>
        <a slot="author">{{comment.user_name}}</a>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          :alt="comment.user_name"
        />
        <p slot="content">{{comment.comments}}</p>
        <span slot="datetime">{{comment.ctime}}</span>
        <template v-if="comment.children && comment.children.length !== 0">
          <a-comment v-for="com of comment.children" :key="com.id">
            <span slot="actions" v-on:click="handleReply(comment.id, com.id, com.user_name)">Reply to</span>
            <a slot="author">{{com.user_name}}</a>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              :alt="com.user_name"
            />
            <p slot="content">回复<span class="reply" v-if="com.reply_name !== 'null'">@{{com.reply_name}}</span>{{com.comments}}</p>
            <span slot="datetime">{{com.ctime}}</span>
          </a-comment>
        </template>
      </a-comment>
    </div>

    <a-comment ref="commentInput">
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
      <div slot="content" id="CommentInput">
        <div class="comment-des-input">
          <a-input placeholder="请输入用户名" v-model="commentForm.user_name"/>
          <a-input placeholder="请输入邮箱" v-model="commentForm.email" style="margin-left:20px;"/>
        </div>
        <a-textarea
          style="margin-top:10px;"
          :placeholder="placeholder"
          :rows="4"
          @change="handleChange"
          :value="value"
        ></a-textarea>

        <a-button
          style="margin-top:20px;"
          htmlType="submit"
          :loading="submitting"
          @click="handleSubmit"
          type="primary"
        >comment</a-button>
      </div>
    </a-comment>
  </div>
</template>

<script>
import moment from "moment";
import Axios from "axios";
import { yearFromate } from "common/js/util.js";
export default {
  props: {
    blogId: {
      type: String,
      required: true,
      default: "-1"
    }
  },
  data() {
    return {
      commentList: [],
      submitting: false,
      value: "",
      commentForm: {
        user_name: "",
        email: ""
      },
      height: "",
      parentInfo: {
        parent: -1,
        replyId: -1,
        replyName: "null"
      },
      placeholder: "输入内容",
      count:''
    };
  },
  created() {
    this.getCommentList();
    this.getCommentCount();
  },
  methods: {
    getCommentList() {
      Axios.get(`/api/queryCommentsByBlogId?bid=${this.blogId}`).then(data => {
        const tempData = data.data;
        if (tempData.code === 200 && tempData.status === "success") {
          tempData.data.forEach((ele, index) => {
            if (ele.parent == "-1") {
              this.commentList.push(ele);
            }
          });
          tempData.data.forEach((ele, index) => {
            if (ele.parent != "-1") {
              this.commentList.forEach((e, i) => {
                if (e.id == ele.parent) {
                  if (!e.children) {
                    e.children = [];
                  }
                  e.children.push(ele)
                }
              });
            }
          });
        }
        this.getLocaltion()

      });
    },
    handleSubmit() {
      this.submitting = true;
      if (
        this.value === "" ||
        this.commentForm.user_name === "" ||
        this.commentForm.email === ""
      ) {
        this.$message.error("请输入完整信息");
        return;
      }
      Axios.get(
        `/api/addComment?bid=${this.blogId}&parent=${this.parentInfo.parent}
        &replyId=${this.parentInfo.replyId}
        &replyName=${this.parentInfo.replyName}
        &userName=${this.commentForm.user_name}
        &email=${this.commentForm.email}&comments=${this.value}`
      ).then(data => {
        if (data.data.code === 200 && data.data.status === "success") {
          const obj = {
            id: data.data.data.id,
            parent: this.parentInfo.parent,
            reply_id: this.parentInfo.replyId,
            reply_name: this.parentInfo.replyName,
            user_name: this.commentForm.user_name,
            email: this.commentForm.email,
            comments: this.value,
            ctime: yearFromate(new Date().getTime() / 1000),
            children: []
          };
          if (this.parentInfo.parent === -1) {
            this.commentList.push(obj);
          } else {
            this.commentList.forEach(ele => {
              if(ele.id == this.parentInfo.parent) {
                ele.children.push(obj)
                this.$set(this.commentList, 'children', ele);

              }
            })

          }
          this.getLocaltion()
        }
      });

      this.submitting = false;
    },
    handleChange(e) {
      this.value = e.target.value;
    },
    handleReply(parent = -1, id = -1, name = "null") {
      window.scrollTo(0, this.height);
      this.parentInfo = {
        parent: parent,
        replyId: id,
        replyName: name
      };
      this.placeholder = `@${name}`;
    },
    handleCommentList(comments, id, commentItem) {
      if (id === "null") {
        this.commentList.push(commentItem);
      } else {
        comments.forEach(item => {
          if (item.id === id) {
            if (item.children) {
              item.children.push(commentItem);
              return;
            }
          }
        });
      }
    },
    getLocaltion() {
      this.$nextTick(() => {
        this.height = this.$refs.commentInput.$el.offsetTop;
      });
    },
    getCommentCount(){
      Axios.get(`/api/queryCommentsCountByBlogId?bid=${this.blogId}`).then((data) => {
        if(data.data.code === 200 && data.data.status == 'success') {
          this.count = data.data.data.count
        }
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
.comment {
  margin-top: 40px;

  .comment-list {
    padding: 20px 0;
    border-top:1px solid #eee
    border-bottom:1px solid #eee

    .comment-count {
      .count {
        font-weight:600;
        font-size: 18px;
        color:#555;
      }
    }

    .reply {
      margin: 0 5px;
      color:#00a1d6;
    }
  }

  .comment-des-input {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
}
</style>





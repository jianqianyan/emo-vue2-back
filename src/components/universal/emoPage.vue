<template>
  <div class="emo-page">
    <div class="page-body">
      <button v-show="nowPage > 1 || minPage > 0" @click="upPage()">
        上一页
      </button>
      <div
        class="page"
        v-for="index in Math.min(10 , maxPage - minPage)"
        :key="index"
        :class="{ 'page-active': nowPage == index }"
        @click="turnto(index)"
      >
        {{ minPage + index }}
      </div>
      <button @click="downPage()" v-show="nowPage + minPage < maxPage">下一页</button>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "emoPage",
  data() {
    return {
      minPage: 0,
      nowPage: 1,
    };
  },
  props: {
    pageNumber: {
      type: Number,
      default: 0
    },
    pageSize:{
      type: Number,
      default: 10
    }
  },
  methods: {
    upPage() {
      if (this.nowPage <= 6 && this.minPage > 0) {
        this.minPage--;
      } else {
        this.nowPage--;
      }
      this.$emit("pageChange", this.nowPage + this.minPage);
    },
    downPage() {
      if (this.nowPage > 5) {
        this.minPage++;
      } else {
        this.nowPage++;
      }
      this.$emit("pageChange", this.nowPage + this.minPage);
    },
    turnto(index) {
      if (index <= 5 && this.minPage == 0) {
        this.nowPage = index;
      } else {
        this.minPage += index - 5;
        this.minPage = Math.max(0, this.minPage);
        if (index > 5) {
          this.nowPage = 5;
        }
      }
      this.$emit("pageChange", this.nowPage + this.minPage);
    },
  },
  computed:{
    maxPage(){
      return Math.ceil(this.pageNumber / this.pageSize);
    }
  }
};
</script>

<style scoped>
.emo-page {
  width: 100%;
  height: 120px;
  float: left;
  /* background: red; */
  position: relative;
  margin: 0 auto;
}
.page-body {
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.emo-page button {
  width: 70px;
  height: 40px;
  float: left;
  border: solid 1px #bdc3c7;
  background: white;
  border-radius: 5px;
}
.page {
  float: left;
  height: 38px;
  width: 38px;
  margin: 0px 2px 0px 2px;
  /* background: red; */
  line-height: 40px;
  text-align: center;
  border: solid 1px #bdc3c7;
  border-radius: 5px;
}
.page-active {
  background: #bdc3c7;
  color: white;
}
.page:hover,
.emo-page button:hover {
  background: #bdc3c7;
  color: white;
}
</style>
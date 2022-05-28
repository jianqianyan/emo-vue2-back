<template>
  <div class="video-bar">
    <div class="bar-son" v-for="(item, index) in barSon" :key="index" :class="{'bar-son-active': nowActive == index}" @click="beChlik(index)">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoBar",
  data() {
    return {
      barSon: [
        {
          name: "全部视频",
          link: "/index/videoManage/allVideo",
        },
        {
          name: "搜索视频",
          link: "/index/videoManage/searchVideo",
        },
        {
          name: "推荐设置",
          link: "/index/videoManage/recommendSetting",
        },
      ],
      nowActive: 0,
    };
  },
  methods: {
      beChlik(index){
          this.nowActive = index;
          this.$router.push({
              path: this.barSon[index].link
          })
      }
  }
};
</script>

<style scoped>
.video-bar {
  width: 100%;
  height: 700px;
  border-right: solid 1px;
  /* background: #3498db; */
}
.bar-son {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.bar-son span {
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.bar-son-active {
  background: #ecf0f1;
}
</style>
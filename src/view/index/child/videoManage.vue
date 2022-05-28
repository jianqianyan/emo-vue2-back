<template>
  <div class="video-manage">
    <div class="left-box">
      <video-bar></video-bar>
    </div>
    <div class="right-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import videoBar from "@/components/video/videoBar";
export default {
  name: "videoManage",
  components: {
    videoBar,
  },
  created() {
    this.$router.push({
      path: "/index/videoManage/allVideo",
    });
  },
};
</script>

<style scoped>
.video-manage {
  width: 100%;
}
.left-box {
  width: 10%;
  height: 700px;
  float: left;
}
.right-box {
  width: 90%;
  height: 700px;
  float: left;
}
</style>
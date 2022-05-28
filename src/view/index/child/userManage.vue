<template>
  <div class="user-manage">
    <div class="left-box">
      <user-bar></user-bar>
    </div>
    <div class="right-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import userBar from "@/components/index/userBar";
export default {
  name: "userManage",
  components: {
    userBar,
  },
  created() {
    // this.$router.push({
    //   path: "/index/userManage/allUser",
    // });
  },
};
</script>

<style scoped>
.userManage {
  width: 100%;
}
.left-box {
  width: 10%;
  height: 700px;
  float: left;
  /* background: red; */
}
.right-box {
  width: 90%;
  height: 700px;
  float: left;
}
.details{
  z-index: 999;
  background: red;
  width: 400px;
  height: 400px;
}
</style>
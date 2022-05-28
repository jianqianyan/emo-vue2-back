<template>
  <div class="index-header">
    <div class="name">
      <p>后台系统</p>
    </div>
    <div
      class="header-son"
      :class="{'header-son-active': nowActive == index }"
      v-for="(item, index) in headerList"
      :key="index" @click="changeRoueter(index, item.link)"
    >
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "indexHeader",
  props: {
    newActive: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      headerList: [
        {
          name: "用户",
          link: "/index/userManage/allUser",
        },
        {
          name: "视频",
          link: "/index/videoManage/allVideo",
        },
      ],
      nowActive: this.newActive
    };
  },
  methods: {
      changeRoueter(index , link){
          this.nowActive = index;
          this.$router.push({
            path: link,
          })
      }
  }
};
</script>

<style scoped>
.index-header {
  width: 100%;
  height: 40px;
  background: #bdc3c7;
}
.header-son {
  height: 30px;
  padding: 10px 20px 0px 20px;
  /* background: #3498db; */
  font-size: 10px;
  float: left;
}
.header-son-active {
  background: #34495e;
  color: #bdc3c7;
  border-radius: 5px;
}
.name{
  width: 10%;
  height: 40px;
  /* background: red; */
  text-align: center;
  float: left;
  display:table-cell; 
  line-height:40px;
  font-size: 10px;
  /* border-right: solid 1px; */
}
</style>
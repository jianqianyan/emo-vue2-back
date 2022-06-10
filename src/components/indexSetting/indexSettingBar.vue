<template>
  <div class="index-setting-manage">
    <div class="bar-son" v-for="(item, index) in barSon" :key="index" :class="{'bar-son-active': nowActive == index}" @click="beChlik(index)">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "index-setting-manage",
  data() {
    return {
      barSon: [
        {
          name: "走马灯设置",
          link: "/index/indexSettingManage/walking",
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
.index-setting-manage {
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
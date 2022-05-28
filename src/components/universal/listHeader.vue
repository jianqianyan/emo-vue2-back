// Show column headers
<template>
  <div class="list-header">
    <div class="left-box">
      <div class="list-son" v-for="(item, index) in listEle" :key="index">
        {{ item }}
      </div>
    </div>
    <div class="right-box"></div>
  </div>
</template>

<script>
export default {
  name: "listHeader",
  props: {
    listEle: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.list-header {
  width: 100%;
  height: 40px;
  /* border-bottom: solid 1px; */
  /* background: ; */
}
.left-box {
  width: 80%;
  display: flex;
  height: 40px;
  float: left;
}
.right-box {
  width: 20%;
  float: left;
}
.list-son {
  height: 40px;
  flex: 1;
  line-height: 40px;
  border: solid 0.5px #ecf0f1;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 14px;
}
</style>
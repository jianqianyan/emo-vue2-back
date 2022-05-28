<template>
  <div class="emo-table">
    <div class="table-header">
      <list-header :listEle="listEle"></list-header>
    </div>
    <div class="table-body">
      <message-box
        v-for="(item, index) in list"
        :key="index"
        :message="item"
        :color="index % 2"
        :source="source"
      ></message-box>
    </div>
  </div>
</template>
<script>
import listHeader from "./listHeader.vue";
import messageBox from "./messageBox.vue";
export default {
  name: "emoTable",
  components: {
    listHeader,
    messageBox,
  },
  props: {
    listEle: {
      type: Array,
    },
    list: {
      type: Array,
    },
    source: {
      type: String
    }
  },
};
</script>
<style scoped>
</style>
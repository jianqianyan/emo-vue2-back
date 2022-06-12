<template>
  <div class="walking">
    <div class="walking-header">
        <span>走马灯设置</span>
        <button @click="addWalking()">新增</button>
    </div>
    <emo-table :listEle="listEle" :list="list" :source="'walking'"></emo-table>
    <emo-page @pageChange="pageChange" :pageNumber="pageNumber"></emo-page>
  </div>
</template>

<script>
import emoTable from "@/components/universal/emoTable";
import emoPage from "@/components/universal/emoPage";
export default {
  name: "walking",
  components: {
    emoTable,
    emoPage,
  },
  data() {
    return {
      listEle: ["序号", "名称","预览图", "链接", "是否可用"],
      list: [],
      page: 1,
      pageSize: 10,
      pageNumber: 0,
    };
  },
  created() {
    this.getMessage();
  },
  methods: {
    getMessage() {
      let table = "walkings";
      let condition = {};
      this.$getdata(table, this.page, condition, this.pageSize).then((res) => {
        this.list = res.data.message;
        this.pageNumber = res.data.messageNumber;
      });
    },
    pageChange(page) {
      this.page = page;
      this.getMessage();
    },
    addWalking(){
        this.$router.push({
            path: "/index/indexSettingManage/addWalking"
        })
    }
  },
};
</script>
<style scoped>
.walking {
  width: 96%;
  padding-left: 2%;
  padding-right: 2%;
}
</style>
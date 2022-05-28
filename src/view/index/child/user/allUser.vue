<template>
  <div class="all-user">
    <emo-table :listEle="listHeader" :list="userList" source="user"></emo-table>
    <emo-page @pageChange="pageChange" :pageNumber = "pageNumber"></emo-page>
  </div>
</template>

<script>
import emoTable from "@/components/universal/emoTable";
import emoPage from "@/components/universal/emoPage";
export default {
  name: "allUser",
  components: {
    emoTable,
    emoPage,
  },
  data() {
    return {
      userList: {},
      listHeader: [
        "id",
        "名称",
        "密码",
        "性别",
        "电话号码",
        "简介",
        "注册时间",
        "邮箱",
        "头像地址",
        "是否可用"
      ],
      pageNumber: 0,
    };
  },
  created() {
    this.userList = JSON.parse(localStorage.getItem("userData"));
    this.pageNumber = Number(localStorage.getItem("userPageNumber"));
  },
  methods: {
    pageChange(page){
      this.$store.state.userPage = page;
      let table = "users";
      this.$getdata(table , page).then(res => {
        this.userList = res.data.message;
        this.pageNumber = res.data.messageNumber;
      })
    }
  }
};
</script>

<style scoped>
.all-user {
  width: 96%;
  padding-left: 2%;
  padding-right: 2%;
}
.all-user-header{
  width: 100%;
  height: 50px;
}
.all-user-header button{
  width: 70px;
  height: 30px;
  float:right;
  margin-right: 40px;
  margin-top:20px;
}
</style>
<template>
  <div class="search-user">
    <div class="search-part">
      <span>搜索方式</span>
      <form>
        <select id="country" name="country" v-model="condition">
          <option value="id">ID</option>
          <option value="name">名称</option>
          <option value="phone">电话</option>
        </select>
      </form>
      <input type="text" v-model="message" />
      <button @click="search()">搜索</button>
      <div v-if="searchState == 1" class="pageNumber">
        共有{{ pageNumber }} 条数据
      </div>
    </div>
    <div class="message-part">
      <div v-if="searchState == 0"></div>
      <div v-else-if="searchState == 1">
        <emo-table :listEle="listHeader" :list="userList" source="user"></emo-table>
        <emo-page @pageChange="pageChange" :pageNumber="pageNumber"></emo-page>
      </div>
      <div v-else>
        {{ searchMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import emoTable from "@/components/universal/emoTable";
import emoPage from "@/components/universal/emoPage";
export default {
  name: "searchUser",
  data() {
    return {
      condition: "id",
      message: "",
      userList: [],
      searchState: 0,
      searchMessage: "",
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
      page: 1,
      pageNumber: 0,
    };
  },
  components: {
    emoTable,
    emoPage,
  },
  methods: {
    search() {
      let condition = this.condition;
      let message = this.message;
      let table = "users";
      this.$getdata(table, this.page, { [condition]: message })
        .then((res) => {
          if (res.state == 200) {
            this.userList = res.data.message;
            this.searchState = 1;
            this.pageNumber = res.data.messageNumber;
          } else if (res.state == -1) {
            this.searchMessage = res.data.cause;
            this.searchState = 2;
          }
        })
        .catch((err) => console.log(err));
    },
    pageChange(page) {
      this.page = page;
      this.search();
    },
  },
};
</script>
<style scoped>
.search-user {
  width: 96%;
  padding-left: 2%;
  padding-right: 2%;
  height: 400px;

  /* background: red; */
}
.search-part {
  height: 60px;
  border-bottom: solid 1px black;
}
.search-part span {
  font-size: 20px;
  float: left;
  width: 100%;
}
.search-part input {
  float: left;
}
.search-part form {
  float: left;
  width: 100px;
  height: 25px;
}
.search-part select {
  width: 100px;
  height: 25px;
  border-radius: 5px;
  border: solid 1px #bdc3c7;
}
.search-part input {
  height: 23px;
  border-radius: 5px;
  border: solid 1px #bdc3c7;
  padding-left: 10px;
  margin-left: 20px;
}
.search-part button {
  width: 60px;
  height: 25px;
  border: solid 1px #bdc3c7;
  border-radius: 5px;
  margin-left: 5px;
}
.search-part button:hover {
  border: black solid 1px;
}
.pageNumber {
  float: right;
}
</style>
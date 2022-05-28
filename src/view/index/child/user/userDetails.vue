<template>
  <div class="user-details">
    <div class="details-header">
      <span>信息详情</span>
      <span class="back" @click="back()">返回</span>
    </div>
    <div class="details-son">
      <div class="details-title">
        <span>id</span>
      </div>
      <div class="details-input">
        <span>{{ userMessage["id"] }}</span>
      </div>
    </div>
    <div class="details-son">
      <div class="details-title">
        <span>名称</span>
      </div>
      <div class="details-input">
        <input type="text" v-model="userMessage['name']" />
      </div>
    </div>
    <div class="details-son">
      <div class="details-title">
        <span>密码</span>
      </div>
      <div class="details-input">
        <input type="text" v-model="userMessage['password']" />
      </div>
    </div>
    <div class="details-son">
      <div class="details-title">
        <span>性别</span>
      </div>
      <div class="details-input">
        <table>
          <input type="radio" v-model="userMessage['sex']" value="男" />
          <span>男</span>
        </table>
        <table>
          <input type="radio" v-model="userMessage['sex']" value="女" />
          <span>女</span>
        </table>
      </div>
    </div>
    <div class="details-son">
      <div class="details-title">
        <span>电话号码</span>
      </div>
      <div class="details-input">
        <input type="text" v-model="userMessage['phone']" />
      </div>
    </div>
    <div class="details-son">
      <div class="details-title">
        <span>简介</span>
      </div>
      <div class="details-input">
        <input type="text" v-model="userMessage['information']" />
      </div>
    </div>
    <div class="details-son">
      <div class="details-title">
        <span>注册时间</span>
      </div>
      <div class="details-input">
        <span>{{ userMessage["registe_time"] }}</span>
      </div>
    </div>
    <div class="details-son">
      <div class="details-title">
        <span>邮箱</span>
      </div>
      <div class="details-input">
        <input type="text" v-model="userMessage['email']" />
      </div>
    </div>
    <div class="operation">
      <button @click="dialogVisible = true">更改</button>
      <button @click="back()">取消</button>
    </div>
    <div class="info" v-if="returnState == 1">
      {{ returnMessage }}
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>确认是否更改</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeMessage()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "userDetails",
  props: {},
  data() {
    return {
      userMessage: this.$route.query,
      nameList: [],
      dialogVisible: false,
      returnState: 0,
      returnMessage: "",
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    changeMessage() {
      this.dialogVisible = false;
      this.$axios({
        method: "POST",
        url: "/users/changeMessage",
        data: this.userMessage,
      })
        .then((res) => {
          this.returnState = 1;
          this.returnMessage = res.data.data.message;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.user-details {
  width: 96%;
  padding-left: 2%;
  height: 400px;
}
.back {
  padding-left: 350px;
  height: 30px;
  line-height: 30px;
}
.details-header {
  width: 100%;
  height: 50px;
}
.details-son {
  width: 100%;
  height: 30px;
}
.details-title {
  width: 10%;
  height: 30px;
  float: left;
}
.details-title span {
  float: right;
  margin-right: 10px;
  line-height: 30px;
}
.details-input {
  width: 70%;
  height: 30px;
  float: left;
  line-height: 30px;
}
.details-input input[type="text"] {
  width: 200px;
  height: 25px;
  padding-left: 5px;
  border: solid 1px #7f8c8d;
  border-radius: 5px;
}
.details-input table {
  width: 50px;
  height: 25px;
  float: left;
}
.operation {
  width: 90%;
  height: 50px;
  padding-left: 5%;
  padding-right: 5%;
}
.operation button {
  width: 60px;
  height: 30px;
  margin-top: 20px;
  margin-left: 60px;
  border-radius: 5px;
  border: solid 1px #bdc3c7;
  background: #ecf0f1;
}
.operation button:hover {
  background: #bdc3c7;
}
.info {
  width: 450px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>

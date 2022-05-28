<template>
  <div class="login">
    <div class="login-body">
      <p>Login</p>
      <br />
      <form action="">
        <input
          type="text"
          class="phone"
          autocomplete
          placeholder="phone"
          v-model="Params.phone"
        />
        <input
          type="password"
          class="password"
          autocomplete
          placeholder="password"
          v-model="Params.password"
        />
      </form>
      <br />
      <div class="remember">
        <input
          type="radio"
          id="remember"
          value="1"
          @click="rememberMe($event)"
        />
        <label for="remember"> </label>
        <span class="remember-font">Remember me</span>
      </div>
      <button @click="dialogVisible = true">sign in</button>
      <div v-if="login_state" style="margin-top: 10px">
        {{ login_message }}
      </div>
    </div>
    <el-dialog
      title="验证码"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div class="VerCode">
        <div class="VerCode-img">
          <img
            src="http://localhost:3000/img_code"
            alt=""
            ref="img_codeRefs"
            @click="replace_img()"
          />
        </div>
        <div class="VerCode-input">
          <input
            type="text"
            class="imgCode"
            autocomplete
            placeholder="验证码"
            v-model="Params.img_code"
          />
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="login()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      rememberFlag: 0,
      dialogVisible: false,
      Params: {
        password: "",
        phone: "",
        img_code: "",
        type: 2,
      },
      login_state: 0,
      login_message: "",
    };
  },
  methods: {
    rememberMe(e) {
      if (this.rememberFlag) {
        this.rememberFlag = 0;
        e.target.checked = false;
      } else {
        this.rememberFlag = 1;
      }
    },
    login() {
      this.dialogVisible = false;
      this.login_state = 1;
      if (
        !this.Params.phone ||
        !this.Params.password ||
        !this.Params.img_code
      ) {
        this.login_message = "账号密码或验证码不能为空";
        return;
      }
      this.$axios({
        url: "/login",
        data: this.Params,
        method: "POST",
      })
        .then((res) => {
          let message = res.data;
          if (message.state == -1) {
            this.login_message = message.data.cause;
          } else {
            this.login_message = "登录成功";
            localStorage.setItem("token", message.data.token);
            let table = ["users", "videos"];
            this.$getdata(table).then((res) => {
              this.$store.state.userData = res[0].data.message;
              this.$store.state.userPageNumber = res[0].data.messageNumber;
              this.$store.state.videoData = res[1].data.message;
              this.$store.state.videoPageNumber = res[1].data.messageNumber;
              localStorage.setItem(
                "userData",
                JSON.stringify(res[0].data.message)
              );
              localStorage.setItem(
                "userPageNumber",
                JSON.stringify(res[0].data.messageNumber)
              );
              localStorage.setItem(
                "videoData",
                JSON.stringify(res[1].data.message)
              );
              localStorage.setItem(
                "videoPageNumber",
                JSON.stringify(res[1].data.messageNumber)
              );
              setTimeout(() => {
                this.$router.push({
                  path: "/index",
                });
              }, 1000);
            });
          }
        })
        .catch((err) => console.log(err));
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    replace_img() {
      this.$refs.img_codeRefs.src =
        "http://localhost:3000/img_code?time=" + new Date();
    },
  },
  created() {},
};
</script>

<style scoped>
.login-body {
  height: 300px;
  width: 700px;
  /* background: red; */
  position: absolute;
  left: 50%;
  top: 50%;
  padding-left: 100px;
  padding-right: 100px;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
}
.login-body input:focus {
  outline: none;
}
.login-body button {
  width: 400px;
  height: 25px;
  border-radius: 4px;
  border: 1px solid #bdc3c7;
}
.phone {
  width: 380px;
  height: 25px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 10px;
  border-radius: 6px 6px 0 0;
  border: 1px solid #bdc3c7;
}
.password {
  width: 380px;
  height: 25px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 10px;
  border-radius: 0 0 6px 6px;
  border: 1px solid #bdc3c7;
  border-top: 0px;
}

.remember {
  width: 400px;
  height: 20px;
  color: black;
}
input[type="radio"] {
  width: 0px;
  height: 0px;
  position: absolute;
  /* opacity: 0; */
}
input[type="radio"] + label::before {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  margin-bottom: 2.5px;
  vertical-align: text-bottom;
  border: 1px solid #d9d9d9;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  content: "";
}
input[type="radio"]:checked + label::before {
  background-color: white;
  background-clip: content-box;
  border-color: #3498db;
  border-width: 2px;
}
.remember-font {
  font-size: 10px;
  transform: scale(0.8);
  display: inline-block;
}
.VerCode {
  width: 100%;
  height: 50px;
}
.VerCode-img {
  width: 30%;
  height: 50px;
  float: left;
}
.VerCode-img img {
  width: 100%;
}
.VerCode-input {
  width: 70%;
  height: 50px;
  float: left;
}
.imgCode {
  width: 90%;
  height: 35px;
  border-radius: 5px;
  border: solid 1px;
  padding-left: 5%;
  margin-left: 5%;
  margin-top: 5px;
}
.imgCode input:focus {
  outline: none;
}
.login-body input {
  outline: none;
}
</style>
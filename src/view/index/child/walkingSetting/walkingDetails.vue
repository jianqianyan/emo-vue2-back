<template>
  <div class="walking-details">
    更改
    <div class="message-box">
      <div class="id-box">
        <div class="title-box">
          <span>id</span>
        </div>
        <div class="input-box">
          {{ message.id }}
        </div>
      </div>
      <div class="name-box">
        <div class="title-box">
          <span>名称</span>
        </div>
        <div class="input-box">
          <input type="text" v-model="message.name" class="base-input1" />
        </div>
      </div>
      <div class="link-box">
        <div class="title-box">
          <span>链接</span>
        </div>
        <div class="input-box">
          <input type="text" v-model="message.link" class="base-input1" />
        </div>
      </div>
      <div class="recommend-box">
        <div class="title-box">
          <span>是否可用</span>
        </div>
        <div class="input-box">
          <el-switch
            v-model="is_recommend"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="beChange('is_recommend', is_recommend)"
          >
          </el-switch>
          <!-- {{ message.is_recommend }} -->
        </div>
      </div>
      <div class="img-box">
        <div class="title-box">
          <span>图片</span>
        </div>
        <el-image
          style="height: 200px"
          :src="imgPath(message.img_path)"
          :preview-src-list="bigImg(message.img_path)"
        ></el-image>
        <updata @path="getpath"></updata>
      </div>
      <!-- {{ message }} -->
      <button class="base-button details-button" @click="changeMessage()">
        更改
      </button>
      <button class="base-button details-button" @click="cancel()">取消</button>
      <p>{{ returnMessage }}</p>
    </div>
  </div>
</template>

<script>
import updata from "@/components/universal/updata";
export default {
  name: "walking-details",
  data() {
    return {
      message: this.$route.query,
      is_recommend: false,
      returnMessage: "",
    };
  },
  components: {
    updata,
  },
  methods: {
    getpath(path) {
      this.message.img_path = path;
    },
    switch() {
      if (typeof this.message["is_recommend"] != "undefined")
        this.is_recommend = this.message["is_recommend"] == 1 ? true : false;
    },
    reverseSwitch() {
      if (typeof this.message["is_recommend"] != "undefined")
        this.message["is_recommend"] = this.is_recommend == true ? 1 : 0;
    },
    cancel() {
      this.$router.push({
        path: "/index/walkingSettingManage/walking",
      });
    },
    changeMessage() {
      this.$axios({
        method: "POST",
        url: "/walking/change",
        data: this.message,
      })
        .then((res) => {
          if (res.data.state == 200) this.returnMessage = res.data.data.message;
          else this.returnMessage = res.data.cause;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.switch();
  },
  watch: {
    is_recommend() {
      this.reverseSwitch();
    },
  },
  computed: {
    imgPath() {
      return function (path) {
        return this.$store.state.image_base + "/" + path;
      };
    },
    bigImg() {
      return function (path) {
        let arr = new Array();
        arr.push(this.$store.state.image_base + "/" + path);
        return arr;
      };
    },
  },
};
</script>

<style scoped>
.message-box {
  width: 300px;
}
.walking-details {
  width: 96%;
  line-height: 30px;
  padding-left: 2%;
  padding-right: 2%;
}
.title-box {
  width: 70px;
  height: 40px;
  float: left;

  padding-right: 20px;
  text-align: right;
}
.input-box {
  width: 200px;
  height: 40px;
  float: left;
}
.details-button {
  width: 60px;
  border-radius: 3px;
  margin-left: 60px;
}
</style>
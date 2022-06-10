// Information of each object
<template>
  <div class="message-box">
    <div class="left-box">
      <div
        class="message-son"
        v-for="(item, index) in Object.keys(message)"
        :key="index"
        :class="{ 'message-box-black': color == 0 }"
      >
        <div v-if="item == 'available'" class="available-button">
          <el-switch
            v-model="available"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="beChange('available', available)"
          >
          </el-switch>
        </div>
        <div v-else-if="item == 'is_recommend'" class="available-button">
          <el-switch
            v-model="is_recommend"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="beChange('is_recommend', is_recommend)"
          >
          </el-switch>
        </div>
        <div v-else-if="item == 'img_path'">
          <img :src="message[item]" alt="">
        </div>
        <div v-else>
          {{ message[item] }}
        </div>
      </div>
    </div>
    <div class="right-box" :class="{ 'message-box-black': color == 0 }">
      <button @click="details()">查看</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageBox",
  props: {
    message: {
      type: Object,
    },
    color: {
      type: Number,
    },
    source: {
      type: String,
    },
  },
  data() {
    return {
      available: true,
      is_recommend: true,
    };
  },
  methods: {
    details() {
      this.$router.push({
        path: "/index/" + this.source + "Manage/details",
        query: this.message,
      });
    },
    beChange(keys, value) {
      let table = this.source + "s";
      if (value == true) value = 1;
      else value = 0;
      let condition = { [keys]: value };
      let id = this.message.id;
      this.$axios({
        url: "/change",
        data: {
          id,
          table,
          condition,
        },
        method: "POST",
      })
        .then((res) => {
          if (res.data.state == -1) {
            alert(res.data.data.cause);
            this.message[keys] = 0;
            this.switch();
          }
          else if(res.data.state == 200){
            
          }
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    switch() {
      if (typeof this.message["available"] != "undefined")
        this.available = this.message["available"] == 1 ? true : false;
      if (typeof this.message["is_recommend"] != "undefined")
        this.is_recommend = this.message["is_recommend"] == 1 ? true : false;
    },
    reverseSwitch() {
      if (typeof this.message["available"] != "undefined")
        this.message["available"] = this.available == true ? 1 : 0;
      if (typeof this.message["is_recommend"] != "undefined")
        this.message["is_recommend"] = this.is_recommend == true ? 1 : 0;
    },
  },
  created() {
    this.switch();
  },
  watch: {
    message() {
      this.switch();
    },
    available() {
      this.reverseSwitch();
    },
    is_recommend() {
      this.reverseSwitch();
    },
  },
  computed:{
    imgPath(path){
    }
  }
};
</script>
<style scoped>
.message-box {
  width: 100%;
  height: 40px;
}
.message-box-black {
  background: #bdc3c7;
}
.message-son {
  flex: 1;
  height: 40px;
  padding-right: 5px;
  padding-left: 5px;
  position: relative;
  word-break: break-all;

  text-overflow: ellipsis;

  display: -webkit-box;

  -webkit-box-orient: vertical;

  -webkit-line-clamp: 2;

  overflow: hidden;
  border: solid 0.5px #ecf0f1;
}
.left-box {
  display: flex;
  width: 80%;
  float: left;
}
.right-box {
  width: 19%;
  float: left;
  height: 40px;
  border: solid 0.5px #ecf0f1;
}
.right-box button {
  width: 45px;
  height: 25px;
  margin-top: 8px;
  margin-left: 8px;
}
.available-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
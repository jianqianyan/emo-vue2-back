<template>
  <div class="add-walking">
    上传图片
    <updata @path="getPath"></updata>
    <div class="updata-son">
      <div class="updata-title"><span>名称</span></div>
      <input type="text" class="base-input" v-model="name" />
    </div>
    <div class="updata-son">
      <div class="updata-title"><span>链接</span></div>
      <input type="text" class="base-input" v-model="link" /><span class="notes"
        >*可选</span
      >
    </div>
    <button class="base-button updata-button" @click="addWalking()">
      增加
    </button>
  </div>
</template>
<script>
import updata from "@/components/universal/updata";
export default {
  name: "addWalking",
  components: {
    updata,
  },
  data() {
    return {
      path: "",
      name: "",
      link: "",
    };
  },
  methods: {
    getPath(filePath) {
      this.path = filePath;
    },
    addWalking() {
      if (this.name == "") {
        alert("名称不能为空");
        return;
      }
      if (this.path == "") {
        alert("请先上传图片");
        return;
      }
      let condition = {
        name: this.name,
        img_path: this.path,
        link: this.link,
      };
      this.$axios({
        url: "/walking/add",
        data: condition,
        method: "POST",
      })
        .then((res) => {
          if (res.data.state == "-1") {
            alert(res.data.data.cause);
          } else {
            alert(res.data.data.message.info);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.add-walking {
  width: 96%;
  padding-left: 2%;
  padding-right: 2%;
}
.updata-son {
  height: 40px;
}
.updata-title {
  float: left;
  width: 40px;
  height: 40px;
  line-height: 30px;
}
.updata-button {
  width: 310px;
}
.notes {
  color: var(--color1);
}
</style>
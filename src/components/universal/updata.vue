<template>
  <div class="updata">
    <div class="up">
      <div class="base-button up-button">
        <span>上传图片</span>
      </div>
    </div>
    <input type="file" @change="postfile($event)" />
    <div v-if="isupFile">
      已上传{{ progress }}
      {{ upMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "updata",
  data() {
    return {
      progress: 0,
      videoFile: "",
      isupFile: 0,
      upMessage: "",
    };
  },
  methods: {
    postfile(e) {
      let formdata = new FormData();
      formdata.append("img", e.target.files[0]);
      this.videoFile = formdata;
      this.isupFile = 1;
      this.$axios({
        url: "/updata",
        method: "POST",
        data: formdata,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progress) => {
          this.progress =
            Math.floor((progress.loaded / progress.total) * 100) + "%";
        },
      })
        .then((res) => {
          if (res.data.state == 200) {
            this.$emit("path", res.data.data.message.path);
          } else {
            this.upMessage = "上传失败";
          }
        })
        .catch((err) => {
          console.log(err);
          this.upMessage = "上传失败";
        });
    },
  },
};
</script>

<style scoped>
.updata {
  width: 260px;
  height: 160px;
  /* background: red; */
  position: relative;
  overflow: hidden;
}
.up-button {
  width: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translatex(-50%) translateY(-50%);
  text-align: center;
}
.up {
  width: 250px;
  height: 100px;
  /* background: red; */
  border: dashed var(--color1);
  position: relative;
}
.updata input {
  position: absolute;
  top: 0;
  font-size: 100px;
  opacity: 0;
}
</style>
<template>
  <div class="recommend-setting">
    推荐设置
    <emo-table
      :listEle="listHeader"
      :list="videoList"
      source="video"
    ></emo-table>
    <emo-page @pageChange="pageChange" :pageNumber="pageNumber"></emo-page>
  </div>
</template>

<script>
import emoTable from "@/components/universal/emoTable";
import emoPage from "@/components/universal/emoPage";
export default {
  name: "recommend-setting",
  components: {
    emoTable,
    emoPage,
  },
  data() {
    return {
      videoList: [],
      listHeader: [
        "id",
        "名称",
        "封面地址",
        "视频地址",
        "简介",
        "标签",
        "上传者id",
        "上传者名称",
        "简介",
        "上传时间",
        "播放量",
        "是否可用",
        "是否推荐",
      ],
      pageNumber: 0,
    };
  },
  methods: {
    getRommend() {
      this.$axios({
        url: "/admin/recommedVideoSet",
        method: "GET",
      })
        .then((res) => {
          this.videoList = res.data.data.message;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pageChange() {},
  },
  created() {
    this.getRommend();
  },
};
</script>

<style scoped>
.recommend-setting {
  width: 96%;
  padding-left: 2%;
  padding-right: 2%;
}
</style>
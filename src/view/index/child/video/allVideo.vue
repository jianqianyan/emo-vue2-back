<template>
  <div class="all-video">
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
  name: "allVideo",
  components: {
    emoTable,
    emoPage,
  },
  data() {
    return {
      videoList: {},
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
        "是否推荐"
      ],
      pageNumber: 0,
    };
  },
  created() {
    this.videoList = JSON.parse(localStorage.getItem("videoData"));
    this.pageNumber = Number(localStorage.getItem("videoPageNumber"));
  },
  methods: {
    pageChange(page) {
      this.$store.state.videoPage = page;
      let table = "videos";
      this.$getdata(table, page).then((res) => {
        this.videoList = res.data.message;
        this.pageNumber = res.data.messageNumber;
      });
    },
  },
};
</script>

<style scoped>
.all-video {
  width: 96%;
  padding-left: 2%;
  padding-right: 2%;
}
</style>
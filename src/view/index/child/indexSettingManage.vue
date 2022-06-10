<template>
    <div class="index-setting-manage">
        <div class="left-box">
            <index-setting-bar></index-setting-bar>
        </div>
        <div class="right-box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import indexSettingBar from "@/components/indexSetting/indexSettingBar";
export default {
    name: "index-setting-manage",
    components:{
        indexSettingBar
    },
    created(){

    }
}
</script>

<style scoped>
.index-setting-manage {
  width: 100%;
}
.left-box {
  width: 10%;
  height: 700px;
  float: left;
  /* background: red; */
}
.right-box {
  width: 90%;
  height: 700px;
  float: left;
}
</style>


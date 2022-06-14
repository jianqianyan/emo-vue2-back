<template>
    <div class="walking-setting-manage">
        <div class="left-box">
            <walking-setting-bar></walking-setting-bar>
        </div>
        <div class="right-box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import walkingSettingBar from "@/components/walkingSetting/walkingSettingBar";
export default {
    name: "walking-setting-manage",
    components:{
        walkingSettingBar
    },
    created(){

    }
}
</script>

<style scoped>
.walking-setting-manage {
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


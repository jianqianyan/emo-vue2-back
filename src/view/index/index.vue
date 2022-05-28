<template>
    <div class="index">
        <index-header></index-header>
        <router-view></router-view>
        
    </div>
</template>

<script>
import indexHeader from "@/components/index/indexHeader"
export default {
    name: "index",
    components:{
        indexHeader
    },
    created(){
        this.$router.push({
            path: "/index/userManage/allUser"
        })
    }
}
</script>

<style scoped>

</style>
<template>
    <div class="walking">
        "走马灯设置"
        <emo-table :listEle = "listEle" :list = "list"></emo-table>
    </div>
</template>

<script>
import emoTable from "@/components/universal/emoTable";
import emoPage from "@/components/universal/emoPage";
export default {
    name: "walking",
    components: {
        emoTable,
        emoPage
    },
    data(){
        return {
            listEle: ["序号" , , "预览图" , "链接" ,  "是否可用"],
            list: [],
            page: 1,
            pageSize: 10,
        }
    },
    created(){
        this.getMessage();
    },
    methods: {
        getMessage(){
            let table = "walking";
            let condition = {}
            this.$getdata(table , this.page , condition , this.pageSize).then(res => {
                this.list = res.data.message;
            })
        }
    }   
}
</script>
<style scoped>
.walking{
    width: 96%;
    padding-left: 2%;
    padding-right: 2%;
}
</style>
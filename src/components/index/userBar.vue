<template>
  <div class="userBar">
    <div
      class="LookUser"
      @click="beClick(0)"
      :class="{ 'userBar-active': nowAction == 0 }"
    >
      <span>
        全部用户
        <!-- <svg
          t="1652280011377"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1901"
          width="20"
          height="20"
        >
          <path
            d="M490.666667 601.6L797.866667 298.666667l59.733333 59.733333-302.933333 302.933333-59.733334 64-59.733333-59.733333L128 358.4 187.733333 298.666667l302.933334 302.933333z"
            fill="#2c2c2c"
            p-id="1902"
          ></path>
        </svg> -->
      </span>
    </div>
    <div
      class="searchUser"
      @click="beClick(1)"
      :class="{ 'userBar-active': nowAction == 1 }"
    >
      <span>
        搜索用户
        <!-- <svg
          t="1652280011377"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1901"
          width="20"
          height="20"
        >
          <path
            d="M490.666667 601.6L797.866667 298.666667l59.733333 59.733333-302.933333 302.933333-59.733334 64-59.733333-59.733333L128 358.4 187.733333 298.666667l302.933334 302.933333z"
            fill="#2c2c2c"
            p-id="1902"
          ></path>
        </svg> -->
      </span>
    </div>
    <!-- <div class="addUser" @click="beClick(2)" :class="{'userBar-active':nowAction == 2}"> 
      <span>
        增加用户<svg
          t="1652280011377"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1901"
          width="20"
          height="20"
        >
          <path
            d="M490.666667 601.6L797.866667 298.666667l59.733333 59.733333-302.933333 302.933333-59.733334 64-59.733333-59.733333L128 358.4 187.733333 298.666667l302.933334 302.933333z"
            fill="#2c2c2c"
            p-id="1902"
          ></path>
        </svg>
      </span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "userBar",
  data() {
    return {
      nowAction: 0,
      link: [
        "/index/userManage/allUser",
        "/index/userManage/searchUser",
        "/index/userManage/addUser",
      ],
    };
  },
  methods: {
    beClick(index) {
      this.nowAction = index;
      this.$router.push({
        path: this.link[index],
      });
    },
  },
};
</script>

<style scoped>
.userBar {
  width: 100%;
  height: 700px;
  border-right: solid 1px;
  /* background: #3498db; */
}
.userBar div {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.userBar-active {
  background: #ecf0f1;
}
.LookUser span {
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.searchUser span {
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.addUser span {
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>
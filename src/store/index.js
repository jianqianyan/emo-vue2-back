import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    User: "qianyan",
    video_base: "http://81.68.212.237:3000/video",
    image_base: "http://81.68.212.237:3000/image",
    photo_base: "http://81.68.212.237:3000/user_photo",
    ver_base: "http://81.68.212.237:3000/img_code",
    dataLoaded: false,
    userData: [],
    videoData: [],
    userPage: 1,
    videoPage: 1,
    pageSize: 10,
    userPageNumber: 0,
    videoPageNumber: 0,
  },
  mutations,
  actions,
  getters,
  modules: {}
});

export default store;

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

// 引入axios
import _axios from './until/_axios'
Vue.prototype.$axios = _axios

// 引入vuex
import Vuex from "vuex";
import store from "./store";
Vue.prototype.$store = store;
Vue.use(Vuex);

// 引入getdata
import getdata from './until/_getdata';
Vue.prototype.$getdata = getdata
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

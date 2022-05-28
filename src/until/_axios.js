import axios from "axios";
import router from "../router";

let config = {
  baseURL: "http://localhost:3000", //配置路径
  withCredentials: true, //允许跨域
};

const _axios = axios.create(config);

// 拦截发送出去的让他携带上token
_axios.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers['Authorization'] = "Bearer " + localStorage.getItem('token');
  }
  return config;
}, err => {
  return Promise.reject(err);
})

// 拦截返回的信息，统一处理
_axios.interceptors.response.use(response => {
  return response;
}, err => {
    // console.log(err.response);
  if (err.response) {
     // 返回401 清除token信息并跳转到登录界面
    switch (err.response.status) {
      case 401:
        router.push({
          path: "/login",
        })
    }
  }
  return Promise.reject(err);
})


export default _axios;

import Vue from 'vue'
import Router from 'vue-router'
const login = () => import("@/view/login")
const index = () => import("@/view/index/index")
const userManage = () => import("@/view/index/child/userManage")
const videoManage = () => import("@/view/index/child/videoManage")
const walkingSettingManage = () => import("@/view/index/child/walkingSettingManage")

// Resolve duplicate routing
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

Vue.use(Router)

const routes = [{
    path: '/',
    redirect: "/login"
  },
  {
    path: '/login',
    name: "login",
    component: login
  },
  {
    path: "/index",
    name: "index",
    component: index,
    children: [{
        path: "userManage",
        name: "userManage",
        component: userManage,
        children: [{
          path: "allUser",
          name: "allUser",
          component: () => import("@/view/index/child/user/allUser")
        }, {
          path: "searchUser",
          name: "searchUser",
          component: () => import("@/view/index/child/user/searchUser")
        }, {
          path: "addUser",
          name: "addUser",
          component: () => import("@/view/index/child/user/addUser")
        }, {
          path: "details",
          name: "userDetails",
          component: () => import("@/view/index/child/user/userDetails")
        }]
      },
      {
        path: "videoManage",
        name: "videoManage",
        component: videoManage,
        children: [{
          path: "allVideo",
          name: "allVideo",
          component: () => import("@/view/index/child/video/allVideo")
        }, {
          path: "searchVideo",
          name: "searchVideo",
          component: () => import("@/view/index/child/video/searchVideo")
        }, {
          path: "recommendSetting",
          name: "recommendSetting",
          component: () => import("@/view/index/child/video/recommendSetting")
        }, {
          path: "details",
          name: "videoDetails",
          component: () => import("@/view/index/child/video/videoDetails")
        }]
      },
      {
        path: "walkingSettingManage",
        name: "walkingSettingManage",
        component: walkingSettingManage,
        children: [{
          path: "walking",
          name: "walking",
          component: () => import("@/view/index/child/walkingSetting/walking")
        },{
          path: "addWalking",
          name: "addWalking",
          component: () => import("@/view/index/child/walkingSetting/addWalking")
        },{
          path: "details",
          name: "walkingDetails",
          component: () => import("@/view/index/child/walkingSetting/walkingDetails")
        }]
      }
    ]
  }
]

const router = new Router({
  routes,
  mode: "history",
})

export default router;

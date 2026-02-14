import Vue from "vue"
import Router from "vue-router"
Vue.use(Router);

//主路由
const home = r => require.ensure([], () => r(require("@/page/home/index")), "home");
const list = r => require.ensure([], () => r(require("@/page/peopleList/index")), "list");
const test = r => require.ensure([], () => r(require("@/page/peopleList/test")), "test");
const chat = r => require.ensure([], () => r(require("@/page/chat/index")), "chat");
const profile = r => require.ensure([], () => r(require("@/page/profile/index")), "profile");
const friend = r => require.ensure([], () => r(require("@/page/friend/index")), "friend");
const moments = r => require.ensure([], () => r(require("@/page/moments/index")), "moments");
const space = r => require.ensure([], () => r(require("@/page/space/index")), "space");

//子路由
const friends = r => require.ensure([], () => r(require("@/page/peopleList/Children")), "friends");

export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/list",
      name: "list",
      component: list
    },
    {
      path: "/test",
      name: "test",
      component: test
    },
    {
      path: "/chat",
      name: "chat",
      component: chat
    },
    {
      path: "/profile",
      name: "profile",
      component: profile
    },
    {
      path: "/friend",
      name: "friend",
      component: friend
    },
    {
      path: "/moments",
      name: "moments",
      component: moments
    },
    {
      path: "/space",
      name: "space",
      component: space
    }
  ]
})

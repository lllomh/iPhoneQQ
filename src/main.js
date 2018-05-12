// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// hobo zid sosd
import Vue from "vue"
import App from "./App"
import router from "./router"
import Mint from "mint-ui"
import "../static/mint-ui/style.css"
import VueResource from 'vue-resource'
Vue.use(VueResource) //后台数据
Vue.use(Mint); //注册 mint插件//后期自己添加

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
})

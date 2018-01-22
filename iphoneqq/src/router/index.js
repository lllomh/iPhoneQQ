import Vue from 'vue'
import Router from 'vue-router'

import home from '@/page/home/index'  //导入主页 home 组件

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})

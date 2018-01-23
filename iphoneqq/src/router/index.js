import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import home from '@/page/home/index'  //导入主页 home 组件
import list from '@/page/peopleList/index'
import test from '@/page/peopleList/test'


export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})

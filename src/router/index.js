import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const home = r => require.ensure([], () => r(require('@/page/home/index')), 'home');
const list = r => require.ensure([], () => r(require('@/page/peopleList/index')), 'list');
const test = r => require.ensure([], () => r(require('@/page/peopleList/test')), 'test');

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

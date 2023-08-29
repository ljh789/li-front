import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/forMe',
      name: 'ForMe',
      component: () => import('@/components/ForMe')
    },
    {
      path: '/findWork',
      name: '/findWork',
      component: () => import('@/components/FindWork')
    }
  ]
})

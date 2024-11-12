import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('@/components/Home')
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

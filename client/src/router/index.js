import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      redirect: '/dashboard',
      component: () => import('@/layouts/Layout'),
      children: [
        {
          name: 'Alerts',
          path: '/dashboard/pages/alerts',
          component: () => import('@/views/pages/ProfileD')
        },
        {
          name: 'Profile',
          path: '/dashboard/pages/profile',
          component: () => import('@/views/pages/Profile')
        },
        {
          name: 'Icons',
          path: 'pages/icons'
        },
        {
          name: 'TableSimple',
          path: 'pages/tables-simple'
        },
         {
          name: 'Corte',
          path: 'pages/Corte'
        },
        {
          name: 'Dashboard',
          path: '/dashboard',
          component: () => import('@/views/Dashboard')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'Landing',
      component: () => import('@/views/Landing')
    }
  ]
})

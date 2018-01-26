import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/views/Page1'
import Page2 from '@/views/Page2'
import Layout from '@/views/Layout'
import Notfound from '@/views/Notfound'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      meta:{
        requireAuth:false
      },
      name:'Login',
      component:Login
    },
    {
      path: '/',
      meta: {
        requireAuth: true
      },
      name: 'Layout',
      component: Layout,
      redirect: '/login', //重定向到第一个子路由，否则只渲染Layout组件
      children: [
        {
          path: 'page1',
          meta: { requireAuth: true },
          component: Page1
        },
        {
          path: 'page2',
          meta: { requireAuth: true },
          component: Page2
        },
      ]
    },
    // 最后是404页面
    {
      path: '*',
      meta: { requireAuth: true },
      component: Notfound
    }
  ]
})

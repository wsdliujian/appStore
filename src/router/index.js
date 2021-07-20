import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/Layout.vue'),
    //定义嵌套路由
    children:[
      {
        path: '/oneFish',
        name: '测试一',
        component: () => import('../views/oneFish/index.vue'),
      },
      {
        path: '/twoFish',
        name: '测试2',
        component: () => import('../views/twoFish/index.vue'),
      },
      {
        path: '/threeFish',
        name: '测试3',
        component: () => import('../views/threeFish/index.vue'),
      },
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

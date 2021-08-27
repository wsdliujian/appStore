import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/layout',
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
      },{
        path: '/fourFish',
        name: '测试4',
        component: () => import('../views/fourFish/index.vue'),
      },{
        path: '/fiveFish',
        name: '测试5',
        component: () => import('../views/fiveFish/index.vue'),
      },

    ]
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/sixFish/login.vue'),
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


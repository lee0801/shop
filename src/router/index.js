import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  //登录页面
  {
    path:'/login',
    name:'login',
    component:()=> import('@/views/Login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/LayOut'),
    redirect:'/roles',
    children: [
      {
        path: '/roles',
        name:'roles',
        component: () => import('@/views/pages/rolesList.vue')
      },
      {
        path: '/user',
        name:'user',
        component: () => import('@/views/pages/usersList.vue')
      },
      {
        path:'/goods',
        name:'goods',
        component: () => import('@/views/pages/goodsList')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

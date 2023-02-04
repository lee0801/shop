import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  //登录页面
  {
    path:'/login',
    name:'login',
    component:()=> import('@/components/Login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/components/LayOut'),
    // redirect:'/roles',
    children: [
      {
        path: '/roles',
        name:'roles',
        component: () => import('@/views/rolesList')
      },
      {
        path: '/user',
        name:'user',
        component: () => import('@/views/usersList')
      },
      {
        path:'/goods',
        name:'goods',
        component: () => import('@/views/goodsList')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//路由守卫
/* router.beforeEach((to,from,next)=>{
  
}) */
export default router

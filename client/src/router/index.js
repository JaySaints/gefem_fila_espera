import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../view/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../view/Login.vue')
  },
  {
    path: '/mil',
    name: 'Users',
    component: () => import(/* webpackChunkName: "list-users" */ '../view/Users.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

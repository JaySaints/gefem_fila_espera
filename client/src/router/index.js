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
    path: '/profile',
    name: 'Profile',
    component: () => import('../view/Profile.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../view/Login.vue')
  },
  {
    path: '/mil',
    name: 'Users',
    component: () => import(/* webpackChunkName: "list-users" */ '../view/ListUsers.vue')
  },
  {
    path: '/mil/:uid',
    name: 'Edit-Users',
    component: () => import(/* webpackChunkName: "list-users" */ '../view/EditUsers.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

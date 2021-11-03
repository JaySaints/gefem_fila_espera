import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */'../view/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */'../view/Profile.vue')
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
    component: () => import(/* webpackChunkName: "edit-users" */ '../view/EditUsers.vue')
  },
  {
    path: '/queue',
    name: 'Show-Queue',
    component: () => import(/* webpackChunkName: "show-queue" */ '../view/Queue.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../components/user/Login.vue')
  },
  {
    path: '/mil',
    name: 'Users',
    component: () => import(/* webpackChunkName: "list-users" */ '../components/user/ListUsers.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

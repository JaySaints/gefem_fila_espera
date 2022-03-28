import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "show-queue" */ '../view/Queue.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */'../view/Profile.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../view/Login.vue')
  },
  {
    path: '/mil',
    name: 'Users',
    component: () => import(/* webpackChunkName: "list-users" */ '../view/ListUsers.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/mil/:uid',
    name: 'Edit-Users',
    component: () => import(/* webpackChunkName: "edit-users" */ '../view/EditUsers.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/reports/',
    name: 'Reports',
    component: () => import(/* webpackChunkName: "Reports" */ '../view/Reports.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

// verify is authenticat
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

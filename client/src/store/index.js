import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from '../service/api'

Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  state: {
    token: localStorage.getItem.token || null,
    user: {},
    isLoggedIn: false,
    status: false,
    isAdmin: false
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, result) {
      state.token = result.token
      state.user = result.user
      state.status = result.success
      state.isAdmin = result.user.role
    },
    logout (state) {
      state.token = null
      state.user = null
      state.status = false
    }
  },
  actions: {
    async login ({ commit }, user) {
      commit('auth_request')
      const res = await api.login_user_post(user)
      if (res.data.success) {
        const result = {
          token: res.data.token,
          user: res.data.user,
          success: res.data.success
        }
        localStorage.setItem('token', result.token)
        axios.defaults.headers.common.Authorization = result.token.token
        commit('auth_success', result)
      }
      return res
    },
    async logout ({ commit }) {
      await localStorage.removeItem('token')
      localStorage.clear()
      delete axios.defaults.headers.common.Authorization
      commit('logout')
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    isAuthAdmin: state => state.isAdmin,
    authState: state => state.status,
    user: state => state.user
  },
  modules: {
  }
})

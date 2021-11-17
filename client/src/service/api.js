import axios from 'axios'

const port = 8081
const DomainServer = `http://localhost:${port}`

export default {
  create_user_post (payload) {
    return axios.post(`${DomainServer}/mil/create`, payload)
  },
  login_user_post (payload) {
    return axios.post(`${DomainServer}/login`, payload)
  },
  all_user_get () {
    return axios.get(`${DomainServer}/mil`)
  },
  one_user_get (uid) {
    return axios.get(`${DomainServer}/mil/${uid}`)
  },
  update_user_post (uid, payload) {
    return axios.post(`${DomainServer}/mil/${uid}/update`, payload)
  },
  delete_user_get (uid) {
    return axios.get(`${DomainServer}/mil/${uid}/delete`)
  },
  update_profile_post (uid, payload) {
    return axios.post(`${DomainServer}/profile/${uid}/update`, payload)
  },
  reset_passowrd_get (uid) {
    return axios.get(`${DomainServer}/mil/${uid}/reset`)
  }
}
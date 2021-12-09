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
  all_user_get (payload) {
    return axios.get(`${DomainServer}/mil`, {
      params: {
        search: payload
      }
    })
  },
  one_user_get (uid) {
    return axios.get(`${DomainServer}/mil/${uid}`)
  },
  one_user_post (uid) {
    return axios.post(`${DomainServer}/profile`, uid)
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
  },
  get_inflate_get () {
    return axios.get(`${DomainServer}/inflate`)
  },
  enter_on_queue_post (payload) {
    return axios.post(`${DomainServer}/enter-on-queue`, payload)
  },
  list_queue_get () {
    return axios.get(`${DomainServer}/list-queue`)
  },
  in_attendance_get () {
    return axios.get(`${DomainServer}/list-queue/in-attendance`)
  },
  update_status_queue_post (payload) {
    return axios.post(`${DomainServer}/list-queue`, payload)
  },
  send_message_post (payload) {
    return axios.post(`${DomainServer}/send-message`, payload)
  },
  search_reports_post (payload) {
    return axios.post(`${DomainServer}/search-reports`, payload)
  }
}

<template>
  <container>
      <user-login />
  </container>
</template>

<script>
import UserLogin from '../components/user/UserLogin.vue'

export default {
  name: 'Login',
  data () {
    return {
    }
  },
  components: {
    UserLogin
  }
}
</script>

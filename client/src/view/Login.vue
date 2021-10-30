<template>
  <v-container fluid fill-height>
      <user-login />
  </v-container>
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

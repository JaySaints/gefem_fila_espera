<template>
    <div>
        <header-bar />
        <user-profile />
    </div>
</template>

<script>
import HeaderBar from '../components/global/HeaderBar.vue'
import UserProfile from '../components/user/UserProfile.vue'

export default {
  name: '',
  data () {
    return {

    }
  },
  components: {
    UserProfile,
    HeaderBar
  }
}
</script>

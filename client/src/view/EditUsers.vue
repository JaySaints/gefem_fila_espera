<template>
  <div>
      <header-bar />
      <user-update />
  </div>
</template>

<script>
import HeaderBar from '../components/global/HeaderBar.vue'
import UserUpdate from '../components/user/UserUpdate.vue'

export default {
  name: '',
  data () {
    return {

    }
  },
  components: {
    UserUpdate,
    HeaderBar
  }
}
</script>

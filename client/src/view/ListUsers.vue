<template>
  <v-container>
      <header-bar>
      <div class="div-input">
      <v-text-field
        v-model="search"
        label="Procurar Militar"
        type="text"
        hide-details="auto"
        style="width: 300px;"
        clearable
      ></v-text-field>
      </div>
    </header-bar>

    <div>
      <table-users />
    </div>

    <div class="button_add_user">
      <create-user />
    </div>
  </v-container>
</template>

<script>
import HeaderBar from '../components/global/HeaderBar.vue'
import CreateUser from '../components/user/UserCreate.vue'
import TableUsers from '../components/user/UserTable.vue'
import _ from 'lodash'

export default {
  name: 'Users',
  data () {
    return {
      search: ''
    }
  },
  components: {
    HeaderBar,
    CreateUser,
    TableUsers
  },
  methods: {
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'Users'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style>
.button_add_user {
    position: fixed;
    padding: 2em;
    left: 95%;
    top: 90%;
    transform: translate(-50%, -50%);
}

</style>

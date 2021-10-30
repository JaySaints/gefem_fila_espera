<template>
  <v-container>
      <header-bar>
      <div class="div-input">
      <v-text-field
        v-model="find_name"
        label="Procurar Militar"
        type="text"
        hide-details="auto"
        style="width: 300px;"
        @keyup.enter="search(find_name)"
        clearable
        outlined
      ></v-text-field>
      </div>

      <div>
      <v-btn fab icon dark @click="search(find_name)">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
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

export default {
  name: 'Users',
  data () {
    return {

    }
  },
  components: {
    HeaderBar,
    CreateUser,
    TableUsers
  },
  methods: {
    search (name) {
      alert('Hello ' + name)
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

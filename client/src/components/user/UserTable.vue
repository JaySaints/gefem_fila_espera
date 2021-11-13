<template>
  <v-container>
    <div class="list_users">
        <v-simple-table>
          <thead class="elevation-1 primary">
            <tr>
              <th class="text-center" id="t1">
                POSTO
              </th>
              <th class="text-center" id="t1">
                NOME
              </th>
              <th class="text-center" id="t1">
                TELEFONE
              </th>
              <th class="text-center" id="t1">
                SEÇÃO
              </th>
              <th class="text-center" id="t1">
                EDITAR
              </th>
            </tr>
          </thead>
          <tbody align="center">
            <tr
              v-for="user in users"
              :key="user.id"
            >
              <td>{{ user.post }}</td>
              <td>{{ user.name }}</td>
              <td>{{ `(${user.codArea}) ${user.phone}` }}</td>
              <td>{{ user.session }}</td>
              <td>
                <v-btn
                  color="grey darken-1"
                  class="mr-4"
                  dark
                  icon
                  small
                  :to="{ name: 'Edit-Users', params: {uid: user.id} }"
                ><v-icon>mdi-pencil</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
      </v-simple-table>
    </div>
  </v-container>
</template>

<script>
import api from '../../service/api'

export default {
  name: 'ListUsers',
  data () {
    return {
      find_name: '',
      users: []
    }
  },
  async mounted () {
    // do a request to the backend for all the users
    this.users = (await api.all_user_get()).data.users
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
#t1 {
  color: white;
  font-size: 10pt;
}
</style>

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
                SESSÃO
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
              <td>{{ user.phone }}</td>
              <td>{{ user.section }}</td>
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
                <!-- <v-btn
                  color="error"
                  class="mr-4"
                  dark
                  icon
                  small
                  :to="{ name: 'Edit-Users', params: {uid: user.id} }"
                ><v-icon>mdi-delete</v-icon>
                </v-btn> -->
              </td>
            </tr>
          </tbody>
      </v-simple-table>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'ListUsers',
  data () {
    return {
      find_name: '',
      users: [
        { id: '1', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '2', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '3', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '4', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '5', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '6', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '7', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '8', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '9', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '10', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '11', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '12', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '13', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '14', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '15', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '16', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { id: '17', post: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' }
      ]
    }
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

/* #t2 {
  width: 10%;
  color: white;
  font-size: 10pt;
} */

</style>

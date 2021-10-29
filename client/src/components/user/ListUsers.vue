<template>
  <v-container>
    <header-page>
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
    </header-page>

    <div class="list_users">
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-center">
                POSTO
              </th>
              <th class="text-center">
                NOME
              </th>
              <th class="text-center">
                TELEFONE
              </th>
              <th class="text-center">
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
              <td>{{ user.graduation }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.section }}</td>
              <td>
                <v-btn
                  color="grey darken-1"
                  class="mr-4"
                  dark
                  icon
                  large
                ><v-icon>mdi-pencil</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
      </v-simple-table>
    </div>

    <div class="button_add_user">
      <create-user />
    </div>
  </v-container>
</template>

<script>
import HeaderPage from '../global/HeaderPage.vue'
import CreateUser from '../user/CreateUser.vue'

export default {
  name: 'ListUsers',
  data () {
    return {
      find_name: '',
      users: [
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' },
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' }
      ]
    }
  },
  components: {
    HeaderPage,
    CreateUser
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

#t1 {
  width: 10%;
}

th {
  background-color: #42A5F5;
}

</style>

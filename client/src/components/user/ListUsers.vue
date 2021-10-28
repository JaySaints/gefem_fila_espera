<template>
  <v-container>
    <header-page>
      <div class="div-input">
      <v-text-field
        id="inp-666"
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
        <v-simple-table fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">
                Editar
              </th>
              <th class="text-center">
                Nome
              </th>
              <th class="text-center">
                Telefone
              </th>
              <th class="text-center">
                Sessão
              </th>
              <th class="text-center">
                Graduação
              </th>
            </tr>
          </thead>
          <tbody align="center">
            <tr
              v-for="user in users"
              :key="user.id"
            >
              <td>
                <v-btn
                  color="blue darken-1"
                  class="mr-4"
                  dark
                  icon
                  large
                ><v-icon>mdi-account-edit</v-icon>
                </v-btn>
              </td>
              <td>{{ user.graduation }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.section }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <div class="button_add_user">
    <v-fab-transition>
      <v-btn
        color="blue darken-2"
        fab
        large
        dark
      >
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>
    </v-fab-transition>
    </div>
  </v-container>
</template>

<script>
import HeaderPage from '../global/HeaderPage.vue'

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
        { graduation: 'CABO', name: 'Pablo J. Santos', phone: '41 99999-0909', section: 'Ordenança' }
      ]
    }
  },
  components: {
    HeaderPage
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
.div_input {
  margin-top: 15%;
}

/* #inp-666 {
  color:red;
  width: 300px;
  height: 100px;
  margin-top: 25px;
} */

</style>

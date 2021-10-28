<template>
  <v-container>
    <header-page />
    <v-row aling="center">
      <v-col cols="4"></v-col>

      <v-col cols="4">
        <v-text-field
        v-model="name"
        label="Procurar Militar"
        type="text"
        required
        outlined
        ></v-text-field>
      </v-col>

      <v-col cols="2">
        <v-btn
          color="blue darken-4"
          dark
          fab
        ><v-icon>mdi-magnify</v-icon></v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
      <panel>
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
      </panel>
      </v-col>
    </v-row>
    <div class="fixedContainer">
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
  }
}
</script>

<style>
/* .v-btn--example {
    bottom: 0;
    margin-top: 30%;

} */

.fixedContainer {
    position: fixed;
    padding: 2em;
    left: 95%;
    top: 90%;
    transform: translate(-50%, -50%);
}
</style>

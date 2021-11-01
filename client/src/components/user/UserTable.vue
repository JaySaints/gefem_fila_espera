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
              <th class="text-center" id="t2">
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
  </v-container>
</template>

<script>

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
  }
}
</script>

<style>
#t1 {
  color: white;
  font-size: 10pt;
}

#t2 {
  width: 10%;
  color: white;
  font-size: 10pt;
}

</style>

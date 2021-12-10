<template>
  <v-container>
    <div class="list_users">
        <v-simple-table style="width: 100%;table-layout:fixed">
          <thead class="elevation-1 primary">
            <tr>
              <th class="text-center" id="t1">
                MILITAR
              </th>
              <th class="text-center" id="t1">
                SEÇÃO
              </th>
              <th class="text-center" id="t1">
                ASSUNTO
              </th>
              <th class="text-center" id="t1">
                DATA DO DESPACHO
              </th>
              <th class="text-center" id="t1">
                STATUS
              </th>
              <th class="text-center" id="t1">
                HORA INÍCIO
              </th>
              <th class="text-center" id="t1">
                HORA TERMINO
              </th>
            </tr>
          </thead>
          <tbody align="center">
            <tr
              v-for="user in users"
              :key="user.id"
            >
              <td>{{ `${user.User.post} ${user.User.name}` }}</td>
              <td>{{ user.User.session }}</td>
              <td >{{ user.subject }}</td>
              <td>{{ user.dateScheduling }}</td>
              <td>{{ user.status }}</td>
              <td>{{ user.dateTimeStart }}</td>
              <td>{{ user.dateTimeEnd }}</td>
            </tr>
          </tbody>
      </v-simple-table>
    </div>
  </v-container>
</template>

<script>

export default {
  name: '',
  data () {
    return {
    }
  },
  props: [
    'users'
  ],
  mounted () {
  }
}
</script>

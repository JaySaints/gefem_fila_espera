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
              <td>{{ `${user.post} ${user.name}` }}</td>
              <td>{{ user.session }}</td>
              <td >{{ user.subject }}</td>
              <td>{{ user.date }}</td>
              <td>{{ user.hourStart }}</td>
              <td>{{ user.hourEnd }}</td>
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
      users: [
        { id: 1, post: 'cap', name: 'Jota', session: 'Ordenança', subject: 'Envio de pagamento', date: '15/12/2019', hourStart: '13:54:03', hourEnd: '14:11:47' }
      ]
    }
  }
}
</script>

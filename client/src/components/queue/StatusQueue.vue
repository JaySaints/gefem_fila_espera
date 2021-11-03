<template>
    <v-card
        elevation="24"
        max-width="444"
        class="mx-auto"
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h5">
                    <strong>Status da Fila</strong>
                </v-list-item-title>
              <hr>
                <dir class="font-weight-bold mt-4">
                  Total na fila: 10 <br>
                  Data da Fila
                  <v-text-field
                      v-model="email"
                      type="date"
                    ></v-text-field>
                </dir>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      users: [
        { id: 1, post: 'Cap', name: 'J. Santos', phone: '41 999995555', session: 'Ordenança' }
      ]
    }
  }
}
</script>

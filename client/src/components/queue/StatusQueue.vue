<template>
  <v-card
    max-width="444"
    height="150"
    class="mx-auto"
    color="orange lighten-2"
  >
    <v-card-title>Data da Fila:</v-card-title>
      <v-card-subtitle>
        <v-layout>
          <v-flex>
          </v-flex>
        </v-layout>
      </v-card-subtitle>
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

<template>
  <v-card
    max-width="444"
    height="150"
    class="mx-auto"
    color="orange lighten-2"
  >
    <v-col class="text-center">
      <h1 style="font-size: 40pt;">8</h1>
      <hr>
      <span class="black--text">Total de militares na fila</span>
    </v-col>
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

<template>
  <v-card
    max-width="444"
    height="150"
    class="mx-auto"
    color="yellow lighten-2"
  >
    <v-col class="text-center">
      <v-card>
        <v-toolbar color="primary">
          <v-card-title dark>Sáb, 7 de Novembro</v-card-title>
          <v-spacer></v-spacer>
          <v-btn dark icon large><v-icon>mdi-calendar-month</v-icon></v-btn>
        </v-toolbar>
      </v-card>
      <br>
          <hr>
      <span class="black--text">Data da Fila</span>
    </v-col>
  </v-card>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      date: null,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      trip: {
        name: '',
        location: null,
        start: null,
        end: null
      }
    }
  }
}
</script>

<style>

</style>

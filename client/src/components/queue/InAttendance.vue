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
           <!-- <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="'../../../public/persons.png'"></v-img>
              </v-avatar> -->
    </v-col>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        }
      ]
    }
  }
}
</script>

<style>
.card_title {
    font-size: 14pt;
}
</style>

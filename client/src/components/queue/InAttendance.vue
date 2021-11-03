<template>
  <v-card
    elevation="24"
    max-width="444"
    class="mx-auto"
  >
    <v-carousel
      :continuous="false"
      :show-arrows="true"
      height="auto"
      hide-delimiters
      width="50"
    >
      <v-carousel-item
        v-for="(user, index) in users"
        :key="index"
      >
        <v-card outlined width="500">
            <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h5">
                    <v-layout>
                      <v-flex xs8>
                        <strong>Em atendimento</strong>
                      </v-flex>
                      <v-flex xs4>
                        <v-btn
                          class="ma-1"
                          color="success"
                          outlined
                          rounded
                        >Concluído</v-btn>
                      </v-flex>
                    </v-layout>
                </v-list-item-title>
              <hr>
                <dir class="font-weight-bold mt-4">
                  Militar: {{user.post}} {{user.name}} <br>
                  Tel: {{ user.phone }} <br>
                  Data: 15/05/2021 <br>
                  Inicio despacho: 13:16:23
                </dir>
            </v-list-item-content>
            </v-list-item>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      isAdmin: true,
      userLogged: 3,
      users: [
        { id: 1, post: 'Cap', name: 'J. Santos', phone: '41 999995555', session: 'Ordenança' },
        { id: 1, post: 'Cap', name: 'J. Santos', phone: '41 999995555', session: 'Ordenança' }
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

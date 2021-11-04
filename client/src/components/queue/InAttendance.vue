<template>
  <v-card
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
        <v-card
          outlined
          width="500"
          height="150"
          color="success lighten-2"
        >
           <v-card-actions>
           <v-card-tilte class="text-h5 ml-2">Em atendimento...</v-card-tilte>
           <v-spacer></v-spacer>
             <v-btn
              dark
              small
              rounded
              color="primary darken-1"
            ><v-icon>mdi-exit-run</v-icon></v-btn>
           </v-card-actions>
           <v-card-subtitle>
             <v-layout>
               <v-flex>
                Militar: <strong>{{ `${user.post} ${user.name}` }}</strong>. <br>
                Data: <strong>20 de novembro de 2021</strong> <br>
                Inicío do despacho: <strong>20:09:23 horas</strong>
               </v-flex>
             </v-layout>
           </v-card-subtitle>
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
        { id: 1, post: 'Cap', name: 'Gustavo Machado', phone: '41 999995555', session: 'Ordenança' },
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

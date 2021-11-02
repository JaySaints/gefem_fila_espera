<template>
  <v-card>
    <v-carousel
      :continuous="false"
      :show-arrows="true"
      height="auto"
      hide-delimiters
      class="pa-2"
    >
      <v-carousel-item
        v-for="(user, index) in users"
        :key="index"
      >
        <v-card class="ma-2">
            <v-toolbar dark color="primary">
                <v-btn
                    icon
                    dark
                    v-if="isAdmin"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                <v-card-title class="card_title">Em Atendimento</v-card-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
                <v-text-field
                    :value="`${user.post} ${user.name}`"
                    label="Nome:"
                    readonly
                ></v-text-field>

                <v-text-field
                    v-model="user.phone"
                    label="Tel:"
                    readonly
                ></v-text-field>

                <v-text-field
                    v-model="user.session"
                    label="Sessão:"
                    readonly
                ></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-center" v-if="isAdmin">
                <v-btn
                    color="warning"
                    small
                    fab
                    dark
                >
                    <v-icon>mdi-exit-run</v-icon>
                </v-btn>
            </v-card-actions>
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

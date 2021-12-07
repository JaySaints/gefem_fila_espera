<template>
  <v-card
    class="mx-auto"
    width="256"
    tile
    app
  >
    <v-list
      color="#0071bc"
      dark
      height="128px"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="avatarSrc"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ subTitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list
      nav
      dense
    >
      <v-list-item-group
        color="#0071bc"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon :color="item.color" v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/mil" v-if="isAdmin">
          <v-list-item-icon>
            <v-icon color="cyan darken-4">mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Militares</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/reports" v-if="isAdmin">
          <v-list-item-icon>
            <v-icon color="yellow darken-2">mdi-upload</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Emitir Relatório</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          prepend-icon="mdi-link-variant"
        >
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Links Úteis</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          :to="link.to"
        >
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    avatarSrc: '',
    isAdmin: false,
    title: 'Menu',
    subTitle: 'Bem-Vindo',
    items: [
      { text: 'Fila', icon: 'mdi-history', color: 'blue darken-2', to: '/' },
      { text: 'Perfil', icon: 'mdi-account', color: 'amber darken-2', to: '/profile' }
    ],
    links: [
      { text: 'Fila', to: '/' },
      { text: 'Perfil', to: '/profile' },
      { text: 'Militares', to: '/mil' },
      { text: 'Login', icon: 'mdi-login', color: 'green darken-2', to: '/login' }
    ]
  }),
  computed: {
    ...mapGetters(['isAuthAdmin'])
  },
  mounted () {
    if (this.isAuthAdmin === 2) {
      this.isAdmin = true
    }
  }
}
</script>

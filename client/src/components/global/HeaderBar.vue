<template>
    <div
        color="#0071bc"
        flat
        class="mx-auto"
        height="200px"
        tile
    >
        <v-navigation-drawer
        v-model="drawer"
        app
        >
          <navigat-drawer />
          <template v-slot:append>
            <div class="pa-2">
              <v-btn
              dark
              width="240"
              color="red darken-2"
              @click="logoutUser()"
              >
                <v-icon>mdi-logout</v-icon>Logout
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
        <v-app-bar
            app
            color="#0071bc"
            dark
        >
          <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-app-bar-title>
            <router-link
                tag="span"
                class="home"
                :to="{name: 'home'}"
            >Fila Online</router-link>
          </v-app-bar-title>

          <v-spacer></v-spacer>

          <!-- Insert options on Header Bar -->
          <slot class="slot_bar"/>

        </v-app-bar>
    </div>
</template>

<script>
import NavigatDrawer from '@/components/global/NavigatDrawer'
import { mapActions } from 'vuex'

export default {
  name: 'HeaderPage',
  data () {
    return {
      drawer: false
    }
  },
  components: {
    NavigatDrawer
  },
  props: [
    'option_btn'
  ],
  computed: {
    ...mapActions(['logout'])
  },
  methods: {
    async logoutUser () {
      await this.logout
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>
.home {
    cursor: pointer;
}

.home:hover {
    color: rgb(68, 176, 209);
}
</style>

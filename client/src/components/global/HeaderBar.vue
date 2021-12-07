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

          <v-app-bar-title>Fila Online</v-app-bar-title>

          <v-spacer></v-spacer>

          <!-- Insert options on Header Bar -->
          <slot class="slot_bar"/>

        </v-app-bar>
    </div>
</template>

<script>
import NavigatDrawer from '@/components/global/NavigatDrawer'

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
  ]
}
</script>

<style>

</style>

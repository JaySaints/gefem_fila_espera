<template>
    <div
        color="primary"
        flat
        height="200px"
        tile
    >
        <v-navigation-drawer
        v-model="drawer"
        app
        ><navigat-drawer />
        </v-navigation-drawer>
        <v-app-bar
            app
            color="primary"
            dark
        >
            <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-app-bar-title>Fila de Espera</v-app-bar-title>
        </v-app-bar>
    </div>
</template>

<script>
import NavigatDrawer from '@/components/global/NavigatDrawer'

export default {
  name: 'HeaderPage',
  data () {
    return {
      drawer: 0
    }
  },
  components: {
    NavigatDrawer
  }
}
</script>

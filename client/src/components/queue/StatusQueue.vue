<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card color="red darken-1" :elevation="hover ? 16 : 2">
            <v-row>
              <v-col cols="12" sm="8">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">
                      <v-btn fab color="red lighten-2" elevation="0">
                        <v-icon color="white">mdi-history</v-icon>
                      </v-btn>
                    </div>
                    <v-list-item-title class="headline mb-1 white--text">
                      {{ setTotal ? 'Fila vazia!' : total }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="white--text">Total em Espera</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="4">
                <v-avatar size="100" class="ml-n10 mt-6" tile><v-img src="../../../public/people.png"></v-img></v-avatar>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      setTotal: null
    }
  },
  props: [
    'total'
  ]
}
</script>

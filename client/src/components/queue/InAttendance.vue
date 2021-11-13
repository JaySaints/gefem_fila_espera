<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card color="cyan darken-1" :elevation="hover ? 16 : 2">
            <v-row>
              <v-col cols="12" sm="8">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">
                      <v-btn fab color="cyan lighten-2" elevation="0">
                        <v-icon color="white">mdi-check-outline</v-icon>
                      </v-btn>
                    </div>
                    <v-list-item-title class="headline mb-1 white--text">
                      Cap Jack Apparow
                    </v-list-item-title>
                    <v-list-item-subtitle class="white--text">Em Atendimento...</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="4">
                <v-avatar size="100" class="ml-n10 mt-6" tile><v-img src="./persons.png"></v-img></v-avatar>
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
  data () {
    return {
    }
  }
}
</script>

<style>
</style>

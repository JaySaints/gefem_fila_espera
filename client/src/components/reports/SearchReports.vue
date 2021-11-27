<template>
  <v-card
    height="150"
    width="500"
  >
      <v-card-title>Selecionar Período</v-card-title>
      <v-container>
      <v-row>
        <v-col cols="4">
          <v-text-field
                  label="Data início"
                  type="date"
                  required
                ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
                  label="Data Fim"
                  type="date"
                  required
                ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn
            rounded
            class="white--text"
            color="primary"
          ><v-icon>mdi-magnify</v-icon> Buscar</v-btn>
        </v-col>

      </v-row>
      </v-container>
  </v-card>
</template>

<script>

export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

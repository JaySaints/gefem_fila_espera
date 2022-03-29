<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="ma-1"
                    color="grey"
                    dark
                    rounded
                    v-bind="attrs" v-on="on"
                    @click="dialog = !dialog"
                    aria-label="Informações"
                    title="Informações"
                ><v-icon>mdi-information</v-icon></v-btn>
            </template>

            <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                Informações
            </v-card-title>

            <v-card-text class="text-center">
              <v-layout>
                <v-flex>
                  <strong>Militar:</strong>
                  <p>{{elements.User.post}} {{elements.User.name}}</p>
                  <strong>Telefone:</strong>
                  <p>({{ elements.User.codArea }}) {{elements.User.phone}}</p>
                  <strong>Data e Hora que entrou na fila:</strong>
                  <p>{{`${fdate} ${fhour}`}}</p>
                  <strong>Assunto:</strong>
                  <p>{{elements.subject}}</p>
                </v-flex>
              </v-layout>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="primary"
                text
                @click="dialog = !dialog"
                >
                OK
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import formatDateTime from '../global/formatDateTime'

export default {
  name: '',
  data () {
    return {
      dialog: null,
      fdate: '',
      fhour: ''
    }
  },
  props: [
    'elements'
  ],
  methods: {
  },
  mounted () {
    this.fdate = formatDateTime.format(this.elements.createdAt).date
    this.fhour = formatDateTime.format(this.elements.createdAt).hour
  }
}
</script>

<style>
</style>

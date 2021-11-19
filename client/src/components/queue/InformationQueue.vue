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
                ><v-icon>mdi-information</v-icon></v-btn>
            </template>

            <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                Aviso!
            </v-card-title>

            <v-card-text class="text-center">
                <strong>
                    Tem certeza que deseja sair da fila?
                </strong>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                 <v-btn
                color="primary"
                text
                @click="dialog = false"
                >
                Cancelar
                </v-btn>
                <v-btn
                color="primary"
                text
                @click="updateStatus(elements.id)"
                >
                OK
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import api from '../../service/api'

export default {
  name: '',
  data () {
    return {
      dialog: null
    }
  },
  props: [
    'elements'
  ],
  methods: {
    async updateStatus (uid) {
      this.dialog = false
      try {
        const result = (await api.update_status_queue_post({ status: 'Saiu da Fila', uid: uid })).data
        console.log(result)
        this.$emit('update', { uid: uid })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

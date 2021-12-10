<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="ma-1"
                    color="success lighten-1"
                    dark
                    rounded
                    v-bind="attrs" v-on="on"
                    @click="dialog = !dialog"
                    aria-label="Iniciar Despacho"
                    title="Iniciar Despacho"
                ><v-icon>mdi-exit-run</v-icon></v-btn>
            </template>

            <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                Aviso!
            </v-card-title>

            <v-card-text class="text-center">
                <strong>
                    Iniciar despacho?
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
                Não
                </v-btn>
                <v-btn
                color="primary"
                text
                @click="updateStatus(elements.id)"
                >
                Sim
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import api from '../../service/api'
import formatDateTime from '../global/formatDateTime'

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
    async updateStatus (id) {
      this.dialog = false
      try {
        const startTime = formatDateTime.format(new Date())
        await api.update_status_queue_post({ status: 'Em atendimento', id: id, uid: this.elements.userId, dateTimeEnd: null, dateTimeStart: startTime.hour })
        this.$emit('update', { id: id })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

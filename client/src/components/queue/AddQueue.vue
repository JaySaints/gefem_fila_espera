<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
            <v-btn
                color="blue darken-2"
                fab
                large
                dark
                v-bind="attrs"
                v-on="on"
                aria-label="Entrar na Fila"
                title="Entrar na Fila"
            ><v-icon>mdi-plus</v-icon></v-btn>
        </v-fab-transition>
      </template>
      <v-card>
        <v-card-title>
          <v-icon style="margin-right: 10px;">mdi-account</v-icon>
          <span class="text-h5">Entrar na Fila</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="12"
              >
                <v-select
                  v-if="isAdmin"
                  v-model="military"
                  :items="listMilitary"
                  :item-text="item => `${item.post} ${item.name}`"
                  item-value="id"
                  label="Militar"
                ></v-select>
                <v-text-field
                  v-else
                  v-model="military"
                  outlined
                  v-text="`${user.post} ${user.name}`"
                  label="Militar"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
              >
               <v-textarea
                  v-model="subject"
                  background-color="grey lighten-2"
                  color="cyan"
                  row="3"
                  no-resize
                  label="Assunto:"
                  row-height="40"
                  clearable
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
            <v-btn
              color="green darken-4"
              large
              rounded
              dark
              @click="dialog = false"
              aria-label="Voltar"
              title="Voltar"
            >
              <v-icon>mdi-arrow-u-left-top-bold</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
              color="primary darken-2"
              large
              rounded
              @click="save_user()"
              aria-label="Salvar"
              title="Salvar"
          >
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import api from '../../service/api'
// import formatDateTime from '../global/formatDateTime'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      dialog: false,
      isAdmin: false,
      username: '',
      post: '',
      subject: '',
      posts: [],
      military: '',
      listMilitary: []
    }
  },
  computed: {
    ...mapGetters(['isAuthAdmin']),
    ...mapGetters(['user'])
  },
  methods: {
    async save_user () {
      try {
        // var today = formatDateTime.format(new Date())
        var fullDate = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)

        const payload = {
          dateScheduling: fullDate,
          userId: this.military,
          subject: this.subject,
          status: 'em espera'
        }

        await api.enter_on_queue_post(payload).data
        this.$emit('queue')
      } catch (error) {
        console.log(error)
      }
      this.dialog = false
    }
  },
  async mounted () {
    try {
      this.listMilitary = (await api.all_user_get()).data.users
    } catch (error) {
      // console.log(error.response.data.error)
      this.military = this.user.id
    }

    if (this.isAuthAdmin === 2) {
      this.isAdmin = true
    }
  }
}
</script>

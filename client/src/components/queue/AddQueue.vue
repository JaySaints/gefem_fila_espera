<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
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
                sm="4"
              >
                <v-select
                  v-model="user.post"
                  :items="posts"
                  label="Posto *"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="8"
              >
                <v-text-field
                  v-model="user.name"
                  label="Nome *"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
              >
               <v-textarea
                  v-model="user.subject"
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
          <small>* Campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
            <v-btn
              color="green darken-4"
              large
              rounded
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-arrow-u-left-top-bold</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
              color="primary darken-2"
              large
              rounded
              @click="save_user()"
          >
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      user: {
        name: '',
        post: '',
        subject: ''
      },
      posts: ['Coronel', 'Ten-Coronel', 'Major', 'Capitão', 'Tenente', 'Asp', 'Sub-Tenente', 'Sargento', 'Cabo', 'Soldado'],
      sessions: ['BC/AP', '1º BO', '2º BO', '3º BO', '4º BO', 'NPOR', 'Tesouraria', 'Salc', 'Almox', 'Aprov', 'ordenança', 'N/A']
    }
  },
  methods: {
    save_user () {
      alert(`Posto: ${this.user.post} - Nome: ${this.user.name} - Assunto: ${this.user.subject}`)
      this.dialog = false
      this.user.post = ''
      this.user.name = ''
      this.user.subject = ''
    }
  }
}
</script>

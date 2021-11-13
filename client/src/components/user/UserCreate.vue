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
            ><v-icon>mdi-account-plus</v-icon></v-btn>
        </v-fab-transition>
      </template>
      <v-card>
        <v-card-title>
          <v-icon style="margin-right: 10px;">mdi-account</v-icon>
          <span class="text-h5">Cadastrar Militar</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="4"
              >
                <v-select
                  v-model="post"
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
                  v-model="name"
                  label="Nome *"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="4"
              >
                <v-select
                  v-model="session"
                  :items="sessions"
                  label="Seção *"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                v-model="email"
                  label="Email *"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="2"
              >
                <v-text-field
                  v-model="codArea"
                  label="codArea *"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm=""
              >
                <v-text-field
                v-model="phone"
                  label="Telefone *"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-radio-group
                  v-model="role"
                  row
                  mandatory
                  hint="Tipo de usuário."
                  persistent-hint
                >
                  <v-radio
                    label="Despachante"
                    value="1"
                  ></v-radio>
                  <v-radio
                    label="Admin"
                    value="2"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
          <small>* Campos obrigatórios</small>
        </v-card-text>
        <v-divider></v-divider>
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
              @click="create_user()"
          >
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </v-card-actions>
        <v-snackbar
          v-model="hasSaved"
          :timeout="2000"
          absolute
          center
        >
          Militar Cadastrado!
        </v-snackbar>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import api from '../../service/api'

export default {
  data () {
    return {
      dialog: false,
      hasSaved: false,
      name: '',
      role: null,
      post: '',
      session: '',
      phone: '',
      email: '',
      codArea: '',
      posts: ['Coronel', 'Ten-Coronel', 'Major', 'Capitão', 'Tenente', 'Asp', 'Sub-Tenente', 'Sargento', 'Cabo', 'Soldado'],
      sessions: ['BC/AP', '1º BO', '2º BO', '3º BO', '4º BO', 'NPOR', 'Tesouraria', 'Salc', 'Almox', 'Aprov', 'ordenança', 'N/A']
    }
  },
  methods: {
    async create_user () {
      // alert(`Posto: ${this.post} - Nome: ${this.name} - Seção: ${this.session} - Tipo: ${this.type} - Email: ${this.email} - Telefone ${this.codArea} ${this.phone}`)
      try {
        const user = {
          post: this.post,
          name: this.name,
          session: this.session,
          email: this.email,
          codArea: this.codArea,
          phone: this.phone,
          role: this.role,
          password: this.phone
        }
        const result = (await api.create_user_post(user)).data
        if (result.success) {
          this.hasSaved = true
        }
      } catch (error) {
        console.log(error)
      }
      this.post = ''
      this.name = ''
      this.session = ''
      this.email = ''
      this.codArea = ''
      this.phone = ''
    }
  }
}
</script>

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
                aria-label="Cadastrar Militar"
                title="Cadastrar Militar"
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
                  v-model="user.post"
                  :items="posts"
                  label="Posto *"
                  :rules="[rules.required]"
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
                  :rules="[rules.required]"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="4"
              >
                <v-select
                  v-model="user.session"
                  :items="sessions"
                  label="Seção *"
                  :rules="[rules.required]"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="user.email"
                  label="Email *"
                  type="email"
                  :rules="[rules.required]"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="2"
              >
                <v-text-field
                  v-model="user.codArea"
                  label="DDD *"
                  :rules="[rules.required]"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm=""
              >
                <v-text-field
                v-model="user.phone"
                  label="Telefone *"
                  :rules="[rules.required]"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-radio-group
                  v-model="user.role"
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
              @click="create_user()"
              aria-label="Salvar"
              title="Salvar"
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
          {{ returnMsg }}
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
      user: {
        name: '',
        role: null,
        post: '',
        session: '',
        phone: '',
        email: '',
        codArea: ''
      },
      sessions: [],
      posts: [],
      returnMsg: '',
      rules: {
        required: (value) => !!value || 'Obrigatório!'
      }
    }
  },
  methods: {
    async create_user () {
      const areAllFieldsFilledIn = Object
        .keys(this.user)
        .every(key => !!this.user[key])
      if (!areAllFieldsFilledIn) {
        this.returnMsg = 'Preencha todos os campos OBRIGATÓRIOS!'
        this.hasSaved = true
        return
      }
      try {
        const user = {
          name: this.user.name,
          post: this.user.post,
          session: this.user.session,
          email: this.user.email,
          codArea: this.user.codArea,
          phone: this.user.phone,
          role: this.user.role,
          password: this.user.phone
        }
        const result = (await api.create_user_post(user)).data
        if (result.success) {
          this.returnMsg = 'Militar Cadastrado!'
          this.hasSaved = true
        }
        this.user.post = ''
        this.user.name = ''
        this.user.session = ''
        this.user.email = ''
        this.user.codArea = ''
        this.user.phone = ''
      } catch (error) {
        console.log(error)
        this.returnMsg = error.response.data.error
        this.hasSaved = true
      }
    }
  },
  async mounted () {
    const objects = (await api.get_inflate_get()).data
    this.sessions = objects.sessions
    this.posts = objects.posts
  }
}
</script>

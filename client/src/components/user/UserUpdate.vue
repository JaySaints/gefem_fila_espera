<template>
  <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
            <v-container>
                <v-card>
                    <v-card-title>
                        <v-icon style="margin-right: 10px;">mdi-account</v-icon>
                        <span  class="text-h5">Editar Cadastro</span>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col
                                cols="12"
                                sm="4"
                            >
                                <v-select
                                v-model="userObject.post"
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
                                v-model="userObject.name"
                                label="Nome *"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="4"
                            >
                                <v-select
                                v-model="userObject.session"
                                :items="sessions"
                                label="Seção *"
                                required
                                ></v-select>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="8"
                            >
                            <v-text-field
                                v-model="userObject.email"
                                label="Email *"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="2"
                            >
                                <v-text-field
                                v-model="userObject.codArea"
                                label="DDD *"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="4"
                            >
                                <v-text-field
                                v-model="userObject.phone"
                                label="Telefone *"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-radio-group
                                v-model="userObject.role"
                                row
                                mandatory
                                hint="Tipo de usuário."
                                persistent-hint
                                >
                                <v-radio
                                    name="role"
                                    label="Despachante"
                                    :value="1"
                                ></v-radio>
                                <v-radio
                                    name="role"
                                    label="Admin"
                                    :value="2"
                                ></v-radio>
                                </v-radio-group>
                            </v-col>
                            <v-col cols="6" ms="6">
                                <v-btn
                                    color="warning"
                                    small
                                    @click="reset_password()"
                                    aria-label="Resetar Senha"
                                    title="Resetar Senha"
                                >Resetar senha</v-btn>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>* Campos obrigatórios</small>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions class="justify-center">
                        <v-btn
                            color="green darken-4"
                            large
                            rounded
                            dark
                            :to="{ name: 'Users'}"
                            aria-label="Voltar"
                            title="Voltar"
                        >
                            <v-icon>mdi-arrow-u-left-top-bold</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-2"
                            large
                            rounded
                            dark
                            @click="delete_user()"
                            aria-label="Deletar"
                            title="Deletar"
                        >
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary darken-2"
                            large
                            rounded
                            @click="update_user()"
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
                    Dados Atualizados!
                    </v-snackbar>
                </v-card>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
import api from '../../service/api'

export default {
  name: '',
  data () {
    return {
      uid: null,
      hasSaved: false,
      userObject: {
        name: '',
        role: null,
        post: '',
        session: '',
        phone: '',
        email: '',
        codArea: ''
      },
      posts: [],
      sessions: []
    }
  },
  async mounted () {
    const objects = (await api.get_inflate_get()).data
    this.sessions = objects.sessions
    this.posts = objects.posts
    this.uid = this.$route.params.uid
    this.userObject = (await api.one_user_get(this.uid)).data.user
  },
  methods: {
    async update_user () {
      try {
        const user = {
          post: this.userObject.post,
          name: this.userObject.name,
          session: this.userObject.session,
          email: this.userObject.email,
          codArea: this.userObject.codArea,
          phone: this.userObject.phone,
          role: this.userObject.role
        }
        const result = (await api.update_user_post(this.uid, user)).data
        if (result.success) {
          this.hasSaved = true
        }
      } catch (error) {
        console.log(error)
      }
    },
    async reset_password () {
      try {
        const result = (await api.reset_passowrd_get(this.uid)).data
        console.log(result.msg)
      } catch (error) {
        console.log(error)
      }
    },
    async delete_user () {
      try {
        console.log(this.uid)
        await api.delete_user_get(this.uid)
        this.$router.push({ name: 'Users' })
      } catch (error) {
        // console.log(error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
            <v-container>
                <v-card>
                    <v-card-title>
                        <v-icon style="margin-right: 10px;">mdi-account</v-icon>
                        <span  class="text-h5">Perfil do Militar</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                        <v-row>
                        <v-col
                            cols="12"
                            sm="3"
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
                            sm="5"
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
                        <v-col
                            cols="12"
                            sm="6"
                        >
                        <v-text-field
                            v-model="userObject.email"
                            label="Email *"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" ms="6">
                            <v-text-field
                            v-model="password"
                            label="Senha"
                            type="password"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" ms="6">
                            <v-text-field
                            v-model="confPassword"
                            label="Confirmar senha"
                            type="password"
                            ></v-text-field>
                        </v-col>
                        </v-row>
                    </v-container>
                    <small>* Campos obrigatórios</small>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-divider></v-divider>
                    <v-card-actions class="justify-center">
                        <v-btn
                            color="green darken-4"
                            large
                            rounded
                            dark
                            @click="backPage"
                            aria-label="Voltar"
                            title="Voltar"
                        >
                            <v-icon>mdi-arrow-u-left-top-bold</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary darken-1"
                            large
                            rounded
                            @click="update_profile()"
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
import { mapGetters } from 'vuex'
import api from '../../service/api'

export default {
  name: 'UserProfile',
  data () {
    return {
      isEditing: false,
      hasSaved: false,
      uid: null,
      updata: false,
      userObject: {
        name: '',
        post: '',
        codArea: '',
        session: '',
        phone: '',
        email: ''
      },
      password: '',
      confPassword: '',
      posts: [],
      sessions: []
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  async mounted () {
    const objects = (await api.get_inflate_get()).data
    this.sessions = objects.sessions
    this.posts = objects.posts
    this.uid = this.user.id
    this.userObject = (await api.one_user_get(this.uid)).data.user
  },
  methods: {
    async update_profile () {
      try {
        if (this.password !== this.confPassword) {
          console.log('As senhas não conferem!')
          this.updata = false
        } else if (this.password === '' && this.confPassword === '') {
          this.password = ''
          this.updata = true
          console.log('Salvar sem alterar senha')
        } else {
          this.updata = true
        }

        if (this.updata) {
          const profile = {
            post: this.userObject.post,
            name: this.userObject.name,
            session: this.userObject.session,
            email: this.userObject.email,
            codArea: this.userObject.codArea,
            phone: this.userObject.phone,
            password: this.password
          }
          const result = (await api.update_profile_post(this.uid, profile)).data

          if (result.success) {
            this.hasSaved = true
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    },
    backPage () {
      this.$router.go(-1)
    }
  }
}
</script>

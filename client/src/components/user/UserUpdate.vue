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
                                :rules="[rules.required]"
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
                                :rules="[rules.required]"
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
                                :rules="[rules.required]"
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
                                :rules="[rules.required]"
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
                                :rules="[rules.required]"
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
                                type="tel"
                                :rules="[rules.required]"
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
                            <v-col cols="2">
                              <button-dialog
                                :dialog_title="'Aviso!'"
                                :dialog_text="'Tem certeza que deseja resetar a senha?'"
                                :btn_color="'warning'"
                                :btn_small="true"
                                :btn_title="'Resetar Senha'"
                                :btn_label="'RESETAR SENHA'"
                                v-on:onClickYes="reset_password()"
                              />
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
                        <button-dialog
                          :dialog_title="'Aviso!'"
                          :dialog_text="'Tem certeza que deseja excluir este cadastro?'"
                          :btn_icon="'mdi-delete'"
                          :btn_color="'red lighten-1'"
                          :btn_title="'Excluir'"
                          :btn_large="true"
                          :btn_rounded="true"
                          v-on:onClickYes="delete_user()"
                        />
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
                    :color="snackColor"
                    absolute
                    center
                    >
                      {{ returnMsg }}
                    </v-snackbar>
                </v-card>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
import api from '../../service/api'
import ButtonDialog from './ButtonDialog.vue'

export default {
  components: { ButtonDialog },
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
      snackColor: '',
      posts: [],
      sessions: [],
      returnMsg: '',
      rules: {
        required: (value) => !!value || 'Obrigatório!'
      }
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
    sayHi: function () {
      return alert('Hello Man')
    },
    async update_user () {
      const areAllFieldsFilledIn = Object
        .keys(this.userObject)
        .every(key => !!this.userObject[key])
      if (!areAllFieldsFilledIn) {
        this.returnMsg = 'Preencha todos os campos obrigatório!'
        this.snackColor = 'red'
        this.hasSaved = true
        return
      }
      try {
        const user = {
          post: this.userObject.post,
          name: this.userObject.name,
          session: this.userObject.session,
          email: this.userObject.email,
          codArea: (this.userObject.codArea).toString(),
          phone: (this.userObject.phone).toString(),
          role: this.userObject.role
        }
        const result = (await api.update_user_post(this.uid, user)).data
        if (result.success) {
          this.returnMsg = 'Dados Atualizados!'
          this.snackColor = 'success'
          this.hasSaved = true
        }
      } catch (error) {
        this.returnMsg = error.response.data.error
        this.snackColor = 'red'
        this.hasSaved = true
        console.log(error)
      }
    },
    async reset_password () {
      try {
        await api.reset_passowrd_get(this.uid).data
        this.returnMsg = 'Senha Resetada!'
        this.snackColor = 'success'
        this.hasSaved = true
      } catch (error) {
        console.log(error)
      }
    },
    async delete_user () {
      try {
        await api.delete_user_get(this.uid)
        this.$router.push({ name: 'Users' })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

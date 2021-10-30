<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12 login-card">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                    <v-text-field
                      v-model="email"
                      prepend-icon="mdi-account"
                      name="email"
                      label="Email"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      v-model="password"
                      prepend-icon="mdi-lock"
                      name="password"
                      label="Senha"
                      type="password"
                    ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" to="/">Entrar</v-btn>
              </v-card-actions>
          </v-card>
          <div class="text-center">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <a
                  v-bind="attrs"
                  v-on="on"
                >Esqueci minha senha</a>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Aviso!
                </v-card-title>

                <v-card-text class="text-center">
                  <strong>
                    Procure o Ordenança para resetar sua senha
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
                    OK
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null,
      dialog: false
    }
  },
  methods: {
    access () {
      var msg = `Entrou ${this.name} ${this.password}`
      console.log(msg)
      this.error = msg
    }
  }
}
</script>

<style>
.login-card {
  margin-top: 100px;
}

</style>

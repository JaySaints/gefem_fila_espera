<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12 login-card">
              <v-toolbar dark color="primary">
                <v-icon style="margin-right: 10px;">mdi-login</v-icon>
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
          <div>
            <forget-pwd />
          </div>
        </v-flex>
    </v-layout>
</template>

<script>
import ForgetPwd from '../alerts/ForgetPwd.vue'

export default {
  components: { ForgetPwd },
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

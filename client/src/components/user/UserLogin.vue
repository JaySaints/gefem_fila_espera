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
                      @keyup.enter="access()"
                    ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="access()" rounded>Entrar</v-btn>
              </v-card-actions>
              <v-snackbar
                    v-model="snack"
                    :timeout="2000"
                    absolute
                    center
                    >
                      {{ err }}
                    </v-snackbar>
          </v-card>
          <div>
            <forget-pwd />
          </div>
        </v-flex>
    </v-layout>
</template>

<script>
import ForgetPwd from '../alerts/ForgetPwd.vue'
// import api from '../../service/api'
import { mapActions } from 'vuex'

export default {
  components: { ForgetPwd },
  name: 'Login',
  data () {
    return {
      email: '',
      snack: false,
      password: '',
      err: null,
      dialog: false
    }
  },
  methods: {
    ...mapActions(['login']),
    async access () {
      try {
        this.login({
          email: this.email,
          password: this.password
        }).then(res => {
          if (res.data.success) {
            this.err = res.data.msg
            this.snack = true
            this.$router.push({ name: 'home' })
          }
        }).catch(error => {
          this.err = error.response.data.error
          this.snack = true
        })
      } catch (error) {
        this.err = error.response.data.error
        this.snack = true
      }
    }
  }
}
</script>

<style>
.login-card {
  margin-top: 100px;
}

</style>

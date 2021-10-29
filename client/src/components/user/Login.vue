<template>
  <v-layout justify-center class="login-body" absolut>
    <v-flex xs4>
      <v-card
        class="login-card"
        max-width="auto"
        ligth
        danse
      >
        <!-- HEADER -->
        <v-toolbar
          flat
          dark
          color="primary"
        >
          <v-icon>mdi-account</v-icon>
          <v-toolbar-title class="ml-2">{{ title }}</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field
            v-model="name"
            label="Nome"
            type="text"
            required
            outlined
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              @keyup.enter="access()"
              required
              autocomplete="new-password"
              outlined
            ></v-text-field>

            <v-btn
              color="blue darken-4"
              @click="access()"
              dark
            >Entrar
            </v-btn>
          </form>
        </v-card-text>
      </v-card>
      <div class="danger-alert" v-html="error"></div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      title: 'Login',
      name: '',
      password: '',
      email: '',
      error: null
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

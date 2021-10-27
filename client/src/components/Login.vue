<template>
    <v-layout justify-center>
    <v-flex xs8>
      <v-card
        max-width="auto"
        color="grey lighten-1"
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
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              @keyup.enter="access()"
              required
              autocomplete="new-password"
            ></v-text-field>

            <v-btn
              color="blue darken-4"
              @click="access()"
              large
              dark
              fab
            >
              <v-icon>mdi-arrow-up-circle-outline</v-icon>
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

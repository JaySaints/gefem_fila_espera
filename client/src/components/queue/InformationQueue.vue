<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="ma-1"
                    color="grey"
                    dark
                    rounded
                    v-bind="attrs" v-on="on"
                    @click="dialog = !dialog"
                ><v-icon>mdi-information</v-icon></v-btn>
            </template>

            <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                Informações
            </v-card-title>

            <v-card-text class="text-center">
                <strong>
                    <p>{{elements.User.post}} - {{elements.User.name}}</p>
                    <p>Telefone: ({{ elements.User.codArea }}) {{elements.User.phone}}</p>
                    <p>Início do Despacho: {{elements.dateScheduling}}</p>
                    <p>Assunto: {{elements.subject}}</p>
                    <p v-html="hasTelegram"></p>
                </strong>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="primary"
                text
                @click="dialog = !dialog"
                >
                OK
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      dialog: null,
      hasTelegram: ''
    }
  },
  props: [
    'elements'
  ],
  methods: {
  },
  mounted () {
    if (this.elements.User.chatId == null) {
      this.hasTelegram = 'Aviso: Telegram NÃO cadastrado.'
    } else {
      this.hasTelegram = 'Aviso: Telegram cadastrado para receber mensagens.'
    }
  }
}
</script>

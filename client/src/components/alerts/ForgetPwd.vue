<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <template v-slot:activator="{ on, attrs }">
                <a v-bind="attrs" v-on="on">Esqueci minha senha.</a>
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
</template>

<script>

export default {
  name: '',
  data () {
    return {
      dialog: null
    }
  }
}
</script>

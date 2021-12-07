<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="ma-1"
                    :color="btn_color"
                    dark
                    :large="btn_large"
                    :x-small="btn_xsmall"
                    :small="btn_small"
                    :rounded="btn_rounded"
                    v-bind="attrs" v-on="on"
                    @click="dialog = !dialog"
                    :aria-label="btn_title"
                    :title="btn_title"
                >{{ btn_label }}<v-icon>{{ btn_icon }}</v-icon></v-btn>
            </template>

            <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                {{ dialog_title }}
            </v-card-title>

            <v-card-text class="text-center">
                <strong>
                    {{ dialog_text }}
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
                Não
                </v-btn>
                <v-btn
                color="primary"
                text
                @click="$emit('onClickYes'), dialog = !dialog"
                >
                Sim
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
  },
  props: [
    'btn_icon',
    'dialog_title',
    'dialog_text',
    'btn_color',
    'btn_large',
    'btn_xsmall',
    'btn_small',
    'btn_label',
    'btn_rounded',
    'btn_title'
  ],
  methods: {
  }
}
</script>

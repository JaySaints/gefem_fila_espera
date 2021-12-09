<template>
  <v-container>
  <v-hover v-slot="{ hover }" open-delay="200">
    <v-card
      width="500"
      :elevation="hover ? 16 : 2"
    >
      <v-toolbar color="primary" dark>
        <v-toolbar-title>{{ title_bar }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-layout>
          <v-flex>
            <v-text-field
              v-model="dateStart"
              :label="field1_label"
              type="date"
              required
            ></v-text-field>
          </v-flex>
          <v-flex v-if="field2">
            <v-text-field
              v-model="dateEnd"
              class="ml-5"
              :label="field2_label"
              type="date"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <slot name="card_action" />
        <v-spacer></v-spacer>
        <v-btn
          rounded
          dark
          color="blue"
          elevation="0"
          @click="click()"
        >
          <v-icon>mdi-magnify</v-icon>Buscar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
  </v-container>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      switch1: false,
      dateStart: '',
      dateEnd: ''
    }
  },
  props: [
    'title_bar',
    'field1_label',
    'field2_label',
    'field2'
  ],
  methods: {
    click () {
      var payload = {
        start: this.dateStart,
        end: this.dateEnd
      }
      this.$emit('onClickSearch', payload)
    }
  }
}
</script>

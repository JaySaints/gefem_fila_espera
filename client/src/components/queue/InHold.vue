<template>
  <div>
    <v-card
        elevation="17"
        width="1300"
        class="mx-auto"
    >
        <v-slide-group
            class="pa-2"
            active-class="success"
            :show-arrows="true"
        >
            <v-slide-item
                v-for="(item, index) in usersObject"
                :key="index"
            >
                <v-card class="ma-2" color="#eaebee" width="250">
                    <v-toolbar color="#0071bc" dark collapse height="40">
                        <v-card-title>{{ `${++index}º` }}</v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field
                            :value="`${item.User.post} ${item.User.name}`"
                            label="Nome:"
                            readonly
                        ></v-text-field>

                        <v-text-field
                            v-model="item.User.session"
                            label="Seção:"
                            readonly
                        ></v-text-field>
                    </v-card-text>
                    <v-divider></v-divider>
                   <v-card-actions class="justify-center">
                      <started-dispatch :elements="item" v-on:update="updatePage"/>

                        <v-btn
                            class="ma-1"
                            color="grey"
                            dark
                            rounded
                            v-if="isAdmin || userLogged == item.id"
                        ><v-icon>mdi-information</v-icon></v-btn>

                      <exit-queue  :elements="item" v-on:update="updatePage"/>
                        </v-card-actions>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-card>
  </div>
</template>

<script>
import api from '../../service/api'
import ExitQueue from './ExitQueue.vue'
import StartedDispatch from './StartedDispatch.vue'

export default {
  components: { ExitQueue, StartedDispatch },
  name: '',
  data () {
    return {
      isAdmin: true,
      dialog_3: null,
      userLogged: 10,
      err: '',
      usersObject: []
    }
  },
  props: [
    'updateQueue'
  ],
  methods: {
    updatePage (payload) {
      this.usersObject = this.usersObject.filter(item => item.id !== payload.uid)
      this.$emit('update', { total: this.usersObject.length })
      this.$emit('upcard')
    }
  },
  async mounted () {
    this.usersObject = (await api.list_queue_get()).data.users
    this.$emit('update', { total: this.usersObject.length })
  },
  watch: {
    updateQueue: {
      immediate: true,
      async handler () {
        if (this.updateQueue) {
          this.usersObject = (await api.list_queue_get()).data.users
          this.$emit('update', { total: this.usersObject.length })
        }
      }
    }
  }
}
</script>

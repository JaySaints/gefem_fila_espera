<template>
  <div>
    <v-card
        elevation="17"
        width="1300"
        class="mx-auto"
    >
        <div class="text-center text-h2" v-html="err"></div>
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
                      <started-dispatch :elements="item" v-on:update="updatePage" v-if="isAdmin"/>

                        <information-queue :elements="item" v-if="isAdmin || item.User.id === user.id" />

                      <exit-queue  :elements="item" v-on:update="updatePage" v-if="isAdmin || item.User.id === user.id"/>
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
import InformationQueue from './InformationQueue.vue'
import StartedDispatch from './StartedDispatch.vue'
import { mapGetters } from 'vuex'

export default {
  components: { ExitQueue, StartedDispatch, InformationQueue },
  name: '',
  data () {
    return {
      isAdmin: false,
      dialog_3: null,
      userLogged: 10,
      err: null,
      usersObject: []
    }
  },
  props: [
    'updateQueue'
  ],
  computed: {
    ...mapGetters(['isAuthAdmin']),
    ...mapGetters(['user'])
  },
  methods: {
    updatePage (payload) {
      this.usersObject = this.usersObject.filter(item => item.id !== payload.id)
      this.$emit('update', { total: this.usersObject.length })
      this.$emit('upcard')
      this.sendMessage(payload)
    },
    async sendMessage (payload) {
      try {
        const fil = this.usersObject[0]
        const msg = 'Você já é o próximo a ser atendido, dirija-se a sala de espera!'
        if (fil) {
          await api.send_message_post({
            uid: fil.User.id,
            msg: msg
          }).data
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted () {
    if (this.isAuthAdmin === 2) {
      this.isAdmin = true
    }
    try {
      this.usersObject = (await api.list_queue_get()).data.users
      this.$emit('update', { total: this.usersObject.length })
      this.err = null
    } catch (error) {
    }
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

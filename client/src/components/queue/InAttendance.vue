<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card color="cyan darken-1" :elevation="hover ? 16 : 2">
            <v-row>
              <v-col cols="12" sm="8">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">
                      <v-btn
                        v-model="btnConclued"
                        fab color="success lighten-2"
                        v-if="isAdmin"
                        @click="conclued(scheId)"
                        aria-label="Concluir!"
                        title="Concluir!"
                      >
                        <v-icon color="white">mdi-check-outline</v-icon>
                      </v-btn>
                      <v-btn
                        v-else
                        v-model="btnConclued"
                        fab color="cyan lighten-3"
                      >
                        <v-icon color="white">mdi-check-outline</v-icon>
                      </v-btn>
                    </div>
                    <v-list-item-title class="headline mb-1 white--text">
                      {{ `${post} ${name}` }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="white--text">Em Atendimento...</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="4">
                <v-avatar size="100" class="ml-n10 mt-6" tile><v-img src="../../../public/talking.png"></v-img></v-avatar>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from '../../service/api'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isAdmin: false,
      userObject: [],
      post: '',
      name: '',
      scheId: '',
      btnConclued: ''
    }
  },
  props: [
    'upcard'
  ],
  computed: {
    ...mapGetters(['isAuthAdmin'])
  },
  async mounted () {
    if (this.isAuthAdmin === 2) {
      this.isAdmin = true
    }
    this.userObject = (await api.in_attendance_get()).data.users
    this.name = this.userObject.User.name
    this.post = this.userObject.User.post
    this.scheId = this.userObject.id
  },
  methods: {
    async conclued (id) {
      await api.update_status_queue_post({ id: id, status: 'Concluido' })
      this.post = 'Sala'
      this.name = 'vazia!'
    }
  },
  watch: {
    upcard: {
      immediate: true,
      async handler () {
        if (this.upcard) {
          this.userObject = (await api.in_attendance_get()).data.users
          this.name = this.userObject.User.name
          this.post = this.userObject.User.post
          this.scheId = this.userObject.id
        }
      }
    }
  }
}
</script>

<style>
</style>

<template>
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
                <v-card class="ma-2 blue lighten-4" width="250">
                    <v-toolbar color="primary" dark collapse height="40">
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
                        <v-btn
                            class="ma-1"
                            color="success"
                            dark
                            rounded
                            v-if="isAdmin"
                            @click="updateStatus(item.id, 1)"
                        ><v-icon>mdi-exit-run</v-icon></v-btn>
                        <v-btn
                            class="ma-1"
                            color="grey"
                            dark
                            rounded
                            v-if="isAdmin || userLogged == item.id"
                        ><v-icon>mdi-information</v-icon></v-btn>
                        <v-btn
                            class="ma-1"
                            color="red"
                            dark
                            rounded
                            v-if="isAdmin || userLogged == item.id"
                            @click="updateStatus(item.id, 2)"
                        ><v-icon>mdi-run-fast</v-icon></v-btn>
                        </v-card-actions>
                </v-card>
            </v-slide-item>
        </v-slide-group>
            <div class="danger-alert" v-html="err"></div>
    </v-card>
</template>

<script>
import api from '../../service/api'

export default {
  name: '',
  data () {
    return {
      isAdmin: true,
      userLogged: 10,
      err: '',
      usersObject: []
    }
  },
  props: [
    'updateQueue'
  ],
  methods: {
    async exitQueue (id) {
      try {
        const payload = {
          status: 'saiu da fila',
          uid: id
        }
        const result = (await api.update_status_queue_post(payload)).data
        console.log(result)
        this.usersObject = this.usersObject.filter(item => item.id !== id)
        this.$emit('update', { total: this.usersObject.length })
      } catch (error) {
        console.log(error)
      }
    },
    async updateStatus (uid, option) {
      var result
      try {
        if (option === 1) {
          result = (await api.update_status_queue_post({ status: 'Em atendimento', uid: uid })).data
        } else if (option === 2) {
          result = (await api.update_status_queue_post({ status: 'Saiu da Fila', uid: uid })).data
        }
        this.usersObject = this.usersObject.filter(item => item.id !== uid)
        this.$emit('update', { total: this.usersObject.length })
        console.log(result)
      } catch (error) {
        console.log(error)
      }
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

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
                v-for="(user, index) in users"
                :key="index"
            >
                <v-card class="ma-2 grey lighten-2" width="250">
                    <v-toolbar color="primary" dark collapse height="40">
                        <v-card-title>{{ `${++index}º` }}</v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field
                            :value="`${user.post} ${user.name}`"
                            label="Nome:"
                            readonly
                        ></v-text-field>

                        <v-text-field
                            v-model="user.session"
                            label="Sessão:"
                            readonly
                        ></v-text-field>
                    </v-card-text>
                    <v-divider></v-divider>
                   <v-card-actions class="justify-center" v-if="isAdmin">
                        <v-btn
                            class="ma-1"
                            color="success"
                            dark
                            rounded
                        ><v-icon>mdi-run-fast</v-icon></v-btn>
                        <v-btn
                            class="ma-1"
                            color="grey"
                            dark
                            rounded
                        ><v-icon>mdi-information</v-icon></v-btn>
                        <v-btn
                            class="ma-1"
                            color="red"
                            dark
                            rounded
                        ><v-icon>mdi-delete</v-icon></v-btn>
                        </v-card-actions>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-card>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      isAdmin: true,
      userLogged: 10,
      users: [
        { id: 1, post: 'Cap', name: 'J. Santos', phone: '41 999995555', session: 'Ordenança' },
        { id: 2, post: 'Cap', name: 'J. Santos', phone: '41 999995555', session: 'Ordenança' },
        { id: 10, post: 'Cap', name: 'J. Santos', phone: '41 999995555', session: 'Ordenança' },
        { id: 4, post: 'Cap', name: 'J. Santos', phone: '41 999995555', session: 'Ordenança' },
        { id: 5, post: 'Cap', name: 'J. Santos', phone: '41 999995555', session: 'Ordenança' },
        { id: 6, post: 'Cap', name: 'J. Santos', phone: '41 999995555', session: 'Ordenança' },
        { id: 7, post: 'Cap', name: 'J. Santos', phone: '41 999995555', session: 'Ordenança' },
        { id: 8, post: 'Cap', name: 'J. Santos', phone: '41 999995555', session: 'Ordenança' }
      ]
    }
  },
  methods: {
    tt (id) {
      alert('Hello Jay ' + id)
    }
  }
}
</script>

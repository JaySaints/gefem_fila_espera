<template>
    <v-card>
        <v-slide-group
            class="pa-2"
            active-class="success"
            :show-arrows="true"
        >
            <v-slide-item
                v-for="(user, index) in users"
                :key="index"
            >
                <v-card class="ma-2" width="250">
                    <v-toolbar color="primary" dark>
                        <v-btn
                            icon
                            dark
                            small
                            v-if="userLogged == user.id || isAdmin"
                            @click="tt(user.id)"
                        >
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            fab
                            small
                            dark
                            v-text="`${index + 1}°`"
                            color="primary darken-1"
                        ></v-btn>
                        <!-- <v-card-title>{{ `${index + 1}°` }}</v-card-title> -->
                        <v-spacer></v-spacer>
                        <!-- <v-btn
                            color="success"
                            small
                            fab
                            dark
                            icon
                            v-if="isAdmin"
                        >
                            <v-icon>mdi-run-fast</v-icon>
                        </v-btn>
                        <v-btn
                            small
                            dark
                            fab
                            icon
                            v-if="isAdmin"
                        >
                            <v-icon>mdi-send</v-icon>
                        </v-btn> -->
                        <v-btn
                            color="error"
                            small
                            dark
                            fab
                            icon
                            v-if="userLogged == user.id || isAdmin"
                        >
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field
                            :value="`${user.post} ${user.name}`"
                            label="Nome:"
                            readonly
                        ></v-text-field>

                        <v-text-field
                            v-model="user.phone"
                            label="Tel:"
                            readonly
                        ></v-text-field>

                        <v-text-field
                            v-model="user.session"
                            label="Sessão:"
                            readonly
                        ></v-text-field>
                    </v-card-text>
                   <v-card-actions class="justify-center" v-if="isAdmin">
                        <v-btn
                            color="green darken-1"
                            small
                            fab
                            dark
                        >
                            <v-icon>mdi-run-fast</v-icon>
                        </v-btn>
                        <v-btn
                            color="primary lighten-1"
                            x-small
                            dark
                            fab
                        >
                            <v-icon>mdi-send</v-icon>
                        </v-btn>
                        <!-- <v-btn
                            color="error"
                            x-small
                            dark
                            fab
                        >
                            <v-icon>mdi-delete</v-icon>
                        </v-btn> -->
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

<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <!-- <v-card-title class="white--text primary darken-1">
      Fila de Espera
    </v-card-title> -->

    <v-divider></v-divider>

    <v-virtual-scroll
        :items="users"
        height="500"
        item-height="110"
      >
        <template v-slot:default="{ item, index }">
          <v-list-item :key="item">
            <v-list-item-action>
              <v-btn
                fab
                small
                depressed
                dark
                color="grey darken-2"
                v-text="`${++index}º`"
              ></v-btn>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                <strong> <a href="/"> {{ `${item.post} ${item.name}` }} </a></strong>
              </v-list-item-title>
              <!-- <v-list-item-subtitle>
                {{ item.phone }}
              </v-list-item-subtitle> -->
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                class="ma-1"
                color="success"
                outlined
                rounded
              ><v-icon>mdi-run-fast</v-icon></v-btn>
              <v-btn
                class="ma-1"
                color="error"
                outlined
                rounded
              ><v-icon>mdi-delete</v-icon></v-btn>
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
  </v-card>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      possiton: 1,
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
  }
}
</script>

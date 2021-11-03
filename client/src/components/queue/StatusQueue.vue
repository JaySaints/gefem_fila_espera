<template>
    <v-card
        elevation="24"
        max-width="444"
        class="mx-auto"
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h5">
                    <strong>Em atendimento</strong>
                </v-list-item-title>
              <hr>
                <dir class="font-weight-bold mt-4">
                  Militar:  <br>
                  Tel:  <br>
                  Data: 15/05/2021 <br>
                  Inicio despacho: 13:16:23
                </dir>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      users: [
        { id: 1, post: 'Cap', name: 'J. Santos', phone: '41 999995555', session: 'Ordenança' }
      ]
    }
  }
}
</script>

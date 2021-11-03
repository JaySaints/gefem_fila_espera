<template>
  <div>
      <header-bar />
      <v-container fluid>
        <v-row>
          <v-col>
            <carousel />
            <status-queue class="ma-4"/>
          </v-col>
          <v-col>
            <card />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import HeaderBar from '../components/global/HeaderBar.vue'
import Card from '../components/queue/Card.vue'
import Carousel from '../components/queue/Carousel.vue'
import StatusQueue from '../components/queue/StatusQueue.vue'

export default {
  components: { HeaderBar, Carousel, Card, StatusQueue },
  name: '',
  data () {
    return {

    }
  }
}
</script>

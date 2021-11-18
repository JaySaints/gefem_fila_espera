<template>
    <div>
        <header-bar />
        <v-container fluid >
          <v-row>
            <v-col cols="12" sm="4">
                <in-attendance :upcard="upcard"/>
            </v-col>
            <v-col cols="12" sm="4">
                <status-queue :total.sync="total"/>
            </v-col>
            <v-col cols="12" sm="4">
              <date-queue />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <in-hold class="carousel_cards" v-on:upcard="up"  v-on:update="receveTotal" :updateQueue.sync="update"/>
            </v-col>
          </v-row>
          <div class="add_queue">
            <add-queue  v-on:queue="funUpdate()"/>
          </div>
        </v-container>
    </div>
</template>

<script>
import HeaderBar from '../components/global/HeaderBar.vue'
import AddQueue from '../components/queue/AddQueue.vue'
import DateQueue from '../components/queue/DateQueue.vue'
import InAttendance from '../components/queue/InAttendance.vue'
import InHold from '../components/queue/InHold.vue'
import StatusQueue from '../components/queue/StatusQueue.vue'

export default {
  components: { HeaderBar, InHold, AddQueue, StatusQueue, InAttendance, DateQueue },
  name: 'ShowQueue',
  data () {
    return {
      resTotal: 'Fila Vazia!',
      update: false,
      upcard: false
    }
  },
  props: [
  ],
  methods: {
    receveTotal (payload) {
      this.resTotal = payload.total
    },
    funUpdate () {
      this.update = true
      setTimeout(() => {
        this.update = false
      }, 1000)
    },
    up () {
      this.upcard = true
      setTimeout(() => {
        this.upcard = false
      }, 1000)
    }
  },
  computed: {
    total: {
      get () {
        return `${this.resTotal}`
      },
      set () {
        this.total = this.resTotal
      }
    }
  }
}
</script>

<style>
.carousel_cards {
  margin-top: 0%;
}

.add_queue {
    position: fixed;
    padding: 2em;
    left: 95%;
    top: 90%;
    transform: translate(-50%, -50%);
}
</style>

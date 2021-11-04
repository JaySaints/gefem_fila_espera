<template>
    <div>
        <header-bar />
        <v-container fluid >
          <v-row>
            <v-col cols="4">
                <in-attendance />
            </v-col>
            <v-col cols="4">
                <status-queue />
            </v-col>
            <v-col cols="4">
              <date-queue />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <in-hold class="carousel_cards"/>
            </v-col>
          </v-row>
          <div class="add_queue">
            <add-queue />
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

    }
  }
}
</script>

<style>
.carousel_cards {
  margin-top: 2%;
}

.add_queue {
    position: fixed;
    padding: 2em;
    left: 95%;
    top: 90%;
    transform: translate(-50%, -50%);
}
</style>

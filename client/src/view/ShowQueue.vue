<template>
    <div>
        <header-bar>
          <div class="div-input">
            <v-text-field
              v-model="name"
              label="Selecionar Data"
              type="date"
              hide-details="auto"
              style="width: 300px;"
            ></v-text-field>
            </div>
            <div>
            <v-btn fab icon dark>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </div>
        </header-bar>
        <v-container fluid class="carousel_cards">
          <v-row>
            <v-col cols="3" ms="4">
              <in-attendance />
            </v-col>
            <v-col cols="9" ms="8">
              <in-hold />
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
import InAttendance from '../components/queue/InAttendance.vue'
import InHold from '../components/queue/InHold.vue'

export default {
  components: { HeaderBar, InHold, InAttendance, AddQueue },
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
    top: 85%;
    transform: translate(-50%, -50%);
}
</style>

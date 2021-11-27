<template>
    <div>
      <header-bar />
      <v-container fluid >
        <v-row>
          <v-col cols="12">
            <search-reports />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12">
            <list-reports />
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
import HeaderBar from '../components/global/HeaderBar.vue'
import ListReports from '../components/reports/ListReports.vue'
import SearchReports from '../components/reports/SearchReports.vue'

export default {
  name: '',
  data () {
    return {

    }
  },
  components: {
    HeaderBar,
    SearchReports,
    ListReports
  }
}
</script>

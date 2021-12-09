<template>
    <div>
      <header-bar />
      <v-container fluid >
        <v-row>
          <v-col></v-col>
          <v-col cols="12" sm="4">
            <search-reports
              :title_bar="'Relátorio Diário'"
              :field1_label="'Selecione o Dia'"
              v-on:onClickSearch="dailyReport"
            />
          </v-col>
          <v-col cols="12" sm="4">
            <search-reports
              :title_bar="'Relátorio por Periodo'"
              :field1_label="'Data Início'"
              :field2_label="'Data Fim'"
              :field2="true"
              v-on:onClickSearch="periodReport"
            />
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12">
            <list-reports/>
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
      checkbox: false
    }
  },
  components: {
    HeaderBar,
    ListReports,
    SearchReports
  },
  methods: {
    dailyReport (e) {
      alert('Data: ' + e.start)
      // console.log('Data ' + e.start)
    },
    periodReport (e) {
      alert('Data inicio: ' + e.start + ' Data fim: ' + e.end)
      // console.log('Data inicio: ' + e.start + ' Data fim: ' + e.end)
    }
  }
}
</script>

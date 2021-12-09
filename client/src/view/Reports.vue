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
            <list-reports :users="getElements.result"/>
          </v-col>
        </v-row>
        <v-snackbar
          v-model="hasSaved"
          :timeout="2000"
          absolute
          center
        >
          {{ returnMsg }}
        </v-snackbar>
      </v-container>
    </div>
</template>

<script>
import HeaderBar from '../components/global/HeaderBar.vue'
import ListReports from '../components/reports/ListReports.vue'
import SearchReports from '../components/reports/SearchReports.vue'
import api from '../service/api'

export default {
  name: '',
  data () {
    return {
      checkbox: false,
      getElements: [],
      returnMsg: null,
      hasSaved: false
    }
  },
  components: {
    HeaderBar,
    ListReports,
    SearchReports
  },
  methods: {
    async dailyReport (e) {
      this.getElements = (await api.search_reports_post({ dateStart: e.start, dateEnd: '' })).data
      if (this.getElements.result.length === 0) {
        this.returnMsg = this.getElements.msg
        this.hasSaved = true
      }
    },
    async periodReport (e) {
      this.getElements = (await api.search_reports_post({ dateStart: e.start, dateEnd: e.end })).data
      if (this.getElements.result.length === 0) {
        this.returnMsg = this.getElements.msg
        this.hasSaved = true
      }
    }
  }
}
</script>

<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
            <v-btn
                color="blue darken-2"
                fab
                large
                dark
                v-bind="attrs"
                v-on="on"
            ><v-icon>mdi-account-plus</v-icon></v-btn>
        </v-fab-transition>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Cadastrar Militar</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  v-model="posto"
                  :items="postos"
                  label="Posto *"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="nome"
                  label="Nome *"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  v-model="sessao"
                  :items="sessoes"
                  label="Sessão *"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
              <v-radio-group
                v-model="tipo"
                row
                mandatory
                hint="Tipo de usuário."
                persistent-hint
              >
                <v-radio
                  label="Despachante"
                  value="1"
                ></v-radio>
                <v-radio
                  label="Admin"
                  value="2"
                ></v-radio>
              </v-radio-group>
              </v-col>
              <v-col cols="12">
                <v-text-field
                v-model="email"
                  label="Email *"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>* Campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save_user()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      name: '',
      tipo: '',
      posto: '',
      sessao: '',
      email: '',
      postos: ['Coronel', 'Ten-Coronel', 'Major', 'Capitão', 'Tenente', 'Asp', 'Sub-Tenente', 'Sargento', 'Cabo', 'Soldado'],
      sessoes: ['BC/AP', '1º BO', '2º BO', '3º BO', '4º BO', 'NPOR', 'Tesouraria', 'Salc', 'Almox', 'Aprov', 'ordenança', 'N/A']
    }
  },
  methods: {
    save_user () {
      alert(`Posto: ${this.posto} - Nome: ${this.nome} - Sessão: ${this.sessao} - Tipo: ${this.tipo} - Email: ${this.email}`)
      this.dialog = false
      this.posto = ''
      this.nome = ''
      this.sessao = ''
      this.email = ''
    }
  }
}
</script>

<template>
  <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
            <v-container>
                <v-card>
                    <v-card-title>
                        <v-icon style="margin-right: 10px;">mdi-account</v-icon>
                        <span  class="text-h5">Editar Cadastro</span>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                        <v-row>
                        <v-col
                            cols="12"
                            sm="4"
                        >
                            <v-select
                            v-model="post"
                            :items="posts"
                            label="Posto *"
                            required
                            ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="8"
                        >
                            <v-text-field
                            v-model="name"
                            label="Nome *"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                        >
                            <v-select
                            v-model="session"
                            :items="sessions"
                            label="Sessão *"
                            required
                            ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="8"
                        >
                        <v-text-field
                            v-model="email"
                            label="Email *"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="2"
                        >
                            <v-text-field
                            v-model="ddd"
                            label="DDD *"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                        >
                            <v-text-field
                            v-model="phone"
                            label="Telefone *"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-radio-group
                            v-model="type"
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
                        <v-col cols="6" ms="6">
                            <v-btn
                                color="warning"
                            >Resetar senha</v-btn>
                        </v-col>
                        </v-row>
                    </v-container>
                    <small>* Campos obrigatórios</small>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions class="justify-center">
                        <v-btn
                            color="green darken-2"
                            middle
                            fab
                            dark
                            :to="{ name: 'Users'}"
                        >
                            <v-icon>mdi-arrow-u-left-top-bold</v-icon>
                        </v-btn>
                        <v-btn
                            color="primary darken-2"
                            middle
                            fab
                            @click="save"
                        >
                            <v-icon>mdi-content-save</v-icon>
                        </v-btn>
                        <v-btn
                            color="red darken-2"
                            middle
                            fab
                            dark
                        >
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      name: '',
      type: '',
      post: '',
      session: '',
      phone: '',
      email: '',
      ddd: '',
      posts: ['Coronel', 'Ten-Coronel', 'Major', 'Capitão', 'Tenente', 'Asp', 'Sub-Tenente', 'Sargento', 'Cabo', 'Soldado'],
      sessions: ['BC/AP', '1º BO', '2º BO', '3º BO', '4º BO', 'NPOR', 'Tesouraria', 'Salc', 'Almox', 'Aprov', 'ordenança', 'N/A']
    }
  }
}
</script>

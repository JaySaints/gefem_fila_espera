<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
            <v-container>
                <v-card>
                    <v-card-title>
                        <v-icon style="margin-right: 10px;">mdi-account</v-icon>
                        <span  class="text-h5">Perfil do Militar</span>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary darken-1"
                            middle
                            fab
                            @click="isEditing = !isEditing"
                        >
                            <v-icon v-if="isEditing">
                                mdi-close
                            </v-icon>
                            <v-icon v-else>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                        <v-row>
                        <v-col
                            cols="12"
                            sm="3"
                        >
                            <v-select
                            v-model="post"
                            :items="posts"
                            label="Posto *"
                            required
                            :disabled="!isEditing"
                            ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="5"
                        >
                            <v-text-field
                            v-model="name"
                            label="Nome *"
                            required
                            :disabled="!isEditing"
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
                            :disabled="!isEditing"
                            ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="2"
                        >
                           <v-text-field
                            v-model="ddd"
                            label="DDD *"
                            required
                            :disabled="!isEditing"
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
                            :disabled="!isEditing"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                        <v-text-field
                            v-model="email"
                            label="Email *"
                            required
                            :disabled="!isEditing"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" ms="6">
                            <v-text-field
                            v-model="password"
                            label="Senha"
                            type="password"
                            required
                            :disabled="!isEditing"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" ms="6">
                            <v-text-field
                            v-model="confPassword"
                            label="Confirmar senha"
                            type="password"
                            required
                            :disabled="!isEditing"
                            ></v-text-field>
                        </v-col>
                        </v-row>
                    </v-container>
                    <small>* Campos obrigatórios</small>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions class="justify-center">
                        <v-btn
                            color="primary darken-1"
                            middle
                            fab
                            :disabled="!isEditing"
                            @click="save"
                        >
                            <v-icon>mdi-content-save</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
  name: 'UserProfile',
  data () {
    return {
      isEditing: false,
      name: '',
      post: '',
      ddd: '',
      session: '',
      phone: '',
      email: '',
      password: '',
      confPassword: '',
      posts: ['Coronel', 'Ten-Coronel', 'Major', 'Capitão', 'Tenente', 'Asp', 'Sub-Tenente', 'Sargento', 'Cabo', 'Soldado'],
      sessions: ['BC/AP', '1º BO', '2º BO', '3º BO', '4º BO', 'NPOR', 'Tesouraria', 'Salc', 'Almox', 'Aprov', 'Ordenança', 'N/A']
    }
  },
  methods: {
    save () {
      this.isEditing = false
      alert(`Posto: ${this.post}\nNome: ${this.name}\nSessão: ${this.session}\n
      Telefone: (${this.codArea}) ${this.phone}\nEmail: ${this.email}\nSenha: ${this.password} - Conf. Senha ${this.confPassword}`)
    }
  }
}
</script>

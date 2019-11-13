<template>
  <q-page padding>
    <div>
      <div class="text-h5">Realizar reserva</div>
      <br>
      <div class="q-pa-md row q-gutter-md">
        <div class="col">
          <q-card>
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">Espaços</div>
            </q-card-section>
            <q-card-section>
              <q-input
                v-model="searchSpace"
                label="Procurar espaços..."
              />
              <br>
              <q-list separator>
                <q-item
                  v-for="space in spaces"
                  :key="space.id"
                  clickable
                  v-ripple
                  @click="selectSpace(space)"
                >
                  <q-item-section>
                    {{space.nome}}
                  </q-item-section>
                  <q-item-section
                    v-if="selectedSpaceId == space.id"
                    avatar
                  >
                    <q-icon
                      color="green"
                      name="check_circle"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>

        <div class="col">
          <q-card>
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">Responsável</div>
            </q-card-section>
            <q-card-section>
              <q-input
                v-model="seila"
                label="Procurar resposável..."
              />
              <br>
              <q-list separator>
                <q-item
                  v-for="user in searchUser"
                  :key="user.idUsuario"
                  clickable
                  v-ripple
                  @click="selectUser(user)"
                >
                  <q-item-section>
                    {{user.nome}}
                  </q-item-section>
                  <q-item-section
                    v-if="user.idUsuario == selectedUserId"
                    avatar
                  >
                    <q-icon
                      color="green"
                      name="check_circle"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="q-pa-md q-gutter-md row items-start">
        <div class="col">
          <q-input
            v-model="reserve.data"
            mask="##-##-####"
            stack-label
            label="Data - Início"
          />
        </div>
        <div class="col">
          <q-select
            class="component"
            v-model="timeInit"
            :options="time1"
            label="Hora - Início"
          />
        </div>
        <div class="col">
          <q-input
            v-model="reserve.dataReservaFim"
            mask="##/##/####"
            stack-label
            label="Data - Término"
          />
        </div>
        <div class="col">
          <q-select
            class="component"
            v-model="timeEnd"
            :options="time2"
            label="Hora - Fim"
          />
        </div>
      </div>
      <div class="q-pa-md row">
        <div class="col-md-12">
          <q-input
            v-model="reserve.justificativa"
            filled
            type="textarea"
            label="Justificativa"
          />
        </div>
      </div>
      <div class="q-pa-md q-gutter-md row justify-end">
        <q-btn
          label="Consultar espaço"
          color="primary"
        />
        <q-btn
          label="Retornar"
          color="red"
        />
        <q-btn
          @click="save()"
          label="Criar reserva"
          color="green"
        />
      </div>
    </div>
  </q-page>
</template>

<style>
.home {
  width: 60%;
}
.component {
  width: 190px;
}
</style>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  created () {
    this.getUsers()
    if (this.$route.params.id) {
      this.reserve = this.reserves.find(r => r.id === parseInt(this.$route.params.id))
    }
  },
  computed: {
    ...mapState({
      reserves: state => state.reserves.list,
      spaces: state => state.spaces.list,
      searchUser: state => state.users.list
    })
  },
  data: () => ({
    reserve: {
      aprovada: false,
      cancelada: false,
      data: '',
      diaSemana: [0, 0, 0, 0, 0, 0, 1],
      espaco: {},
      horarios: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      justificativa: '',
      usuario: {}
    },
    justification: '',
    timeInit: 0,
    timeEnd: 0,
    selectedSpaceId: 0,
    selectedSpace: {},
    selectedUserId: 0,
    selectedUser: {},
    searchSpace: '',
    seila: '', // Rever com o grupo
    time1: ['07:00', '07:50', '08:55', '09:45', '10:50', '11:40', '13:00', '13:50', '14:55', '15:45', '16:50', '17:40'],
    time2: ['07:50', '08:40', '09:45', '10:35', '11:40', '12:30', '13:50', '14:40', '15:45', '16:35', '17:40', '18:30']

  }),
  methods: {
    ...mapActions(['createReserve', 'getUsers']
    ),
    async save () {
      this.selectHorarios()
      let space = { ...this.selectedSpace }
      let user = { ...this.selectedUser }
      this.reserve.espaco = space
      space.id = space.id + 0
      user.perfis = user.perfis.map((it) => {
        switch (it) {
          case 'ADMIN':
            return 1
          case 'FUNCIONARIO':
            return 2
          default:
            return 3
        }
      })
      console.log('valor do perfil do usuario: ' + user.perfis)
      this.reserve.usuario = user
      await this.createReserve(this.reserve)
      // this.reserve = {}
    },
    selectSpace (space) {
      this.selectedSpaceId = space.id
      this.selectedSpace = space
    },
    selectUser (user) {
      this.selectedUserId = user.idUsuario
      this.selectedUser = user
    },
    selectHorarios () {
      this.reserve.horarios[this.mapp(this.timeInit)] = 1
      this.reserve.horarios[this.mapp(this.timeEnd)] = 1
      // this.fill()
    },
    fill () {
      for (let i = 0; i < this.reserve.horarios.length; i++) {
        if (this.reserve.horarios[i] === 1 && this.reserve.horarios[i + 1] === 0) {
          this.reserve.horarios[i + 1] = 1
        }
      }
      console.log(this.reserve.horarios)
    },
    mapp (horario) {
      for (let i = 0; i < 12; i++) {
        if (horario === this.time1[i] || horario === this.time2[i]) {
          return i
        }
      }
    }
  }
}
</script>

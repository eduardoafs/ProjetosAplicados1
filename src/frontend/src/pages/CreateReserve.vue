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
                  :key="space.idEspaco"
                  clickable
                  v-ripple
                  @click="selectedSpaceId = space.idEspaco"
                >
                  <q-item-section>
                    {{space.espacoNome}}
                  </q-item-section>
                  <q-item-section
                    v-if="selectedSpaceId == space.idEspaco"
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
              <div class="text-h6">Resposável</div>
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
                  @click="userSelected = user.idUsuario"
                >
                  <q-item-section>
                    {{user.nome}}
                  </q-item-section>
                  <q-item-section
                    v-if="user.idUsuario == userSelected"
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
            v-model="reserve.dataReservaInicio"
            mask="##/##/####"
            stack-label
            label="Data - Início"
          />
        </div>
        <div class="col">
          <q-select
            class="component"
            v-model="reserve.timeInit"
            :options="time1"
            label="Hora - Início"
          />
        </div>
        <div class="col">
          <q-input
            v-model="reserve.dataEnd"
            mask="##/##/####"
            stack-label
            label="Data - Término"
          />
        </div>
        <div class="col">
          <q-select
            class="component"
            v-model="reserve.timeEnd"
            :options="time2"
            label="Hora - Fim"
          />
        </div>
      </div>
      <div class="q-pa-md row">
        <div class="col-md-12">
          <q-input
            v-model="reserve.justification"
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
  name: 'CreateReserve',
  created () {
    this.getUsers()
  },
  computed: {
    ...mapState({
      spaces: state => state.spaces.list,
      searchUser: state => state.users.list
    })
  },
  data: () => ({
    reserve: {
      dataReservaInicio: '',
      dataReservaFim: '',
      horarios: [],
      espaco: {},
      usuario: {},
      aprovada: false,
      cancelada: false
    },
    userSelected: 0,
    selectedSpaceId: 0,
    searchSpace: '',
    seila: '', // Rever com o grupo
    time1: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    time2: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']

  }),
  methods: {
    ...mapActions(['createReserve', 'getUsers']
    ),
    save () {
      this.createReserve(this.reserve)
      this.reserve = {}
    }

  }
}
</script>

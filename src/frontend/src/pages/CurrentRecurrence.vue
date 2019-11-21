<template>
  <q-page padding>
    <div class="text-h5">Reseva Recorrente</div>
    <br>
    <div class="row q-gutter-md">
      <div class="col">
        <q-card class="my-card">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Criar reseva recorrente</div>
          </q-card-section>
          <div class="q-pa-md q-gutter-md">
            <div class="text-h7">Selecionar data: </div>
            <div class="row justify-around">
              <div class="row">
                <q-input
                  v-model="reserve.dateInit"
                  mask="##/##/####"
                  stack-label
                  label="Data - Início"
                />
              </div>
              <div class="row">
                <q-input
                  v-model="reserve.dataEnd"
                  mask="##/##/####"
                  stack-label
                  label="Data - Término"
                />
              </div>
            </div>
            <br />
            <div class="text-h7">Selecionar horários: </div>
            <div class="row q-pb-lg justify-around">
              <div class="row">
                <q-select
                  class="component"
                  v-model="startTime"
                  :options="time1"
                  label="Hora - Início"
                />
              </div>

              <div class="row">
                <q-select
                  class="component"
                  v-model="endTime"
                  :options="time2"
                  label="Hora - Fim"
                />
              </div>
            </div>
            <div class="text-h7">Infomar responsável: </div>
            <div class="row ">
              <q-radio
                v-model="shape"
                val="solicitante"
                label="é solicitante"
              />
              <q-radio
                v-model="shape"
                val="nomeindique"
                label="Indicar um nome:"
              />
              <q-input
                stack-label
                v-model="nome"
              />
            </div>
            <q-input
              v-model="reserve.justificativa"
              filled
              type="text"
              label="Descrição"
            />
          </div>
        </q-card>
      </div>
      <div class="col">
        <q-card class="my-card">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Lista de Espaços</div>
          </q-card-section>
          <div class="q-pa-md q-gutter-md border">
            <div class="col">
              <q-list>
                <q-item
                  v-for="space in spaces"
                  :key="space.id"
                >
                  <q-item-section side>
                    <q-checkbox
                      v-model="spaceselect"
                      :val="space.id"
                      :label="space.nome"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <br />
    <div class="q-pa-md q-gutter-md row justify-end">
      <q-btn
        label="Retornar"
        color="red"
      />
      <q-btn
        label="Criar reserva"
        color="green"
      />
    </div>
  </q-page>
</template>

<style scoped>
.component {
  width: 190px;
}
</style>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  created () {
    this.getSpaces()
  },
  computed: {
    ...mapState({
      spaces: state => state.spaces.list
    })
  },
  name: 'CurrentRecurrence',
  data: () => ({
    nome: '',
    reserve: {
      dateInit: '',
      dateEnd: '',
      timeInit: '',
      timeEnd: ''
    },
    shape: {
      solicitante: '',
      nomeindique: ''
    },
    startTime: null,
    endTime: null,
    time1: ['07:00', '07:50', '08:55', '09:45', '10:50', '11:40', '13:00', '13:50', '14:55', '15:45', '16:50', '17:40'],
    time2: ['07:50', '08:40', '09:45', '10:35', '11:40', '12:30', '13:50', '14:40', '15:45', '16:35', '17:40', '18:30'],
    building: [{
      name: 'Prédio de Informática'
    }],
    spaceselect: []
  }),
  methods: {
    ...mapActions(['getSpaces']
    ),
    link (space) {
      space.spaceSelect = !space.spaceSelect
    }
  }
}
</script>

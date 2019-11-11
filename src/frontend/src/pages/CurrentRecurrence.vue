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
                  v-model="dateInit"
                  mask="##/##/####"
                  stack-label
                  label="Data - Início"
                />
              </div>
              <div class="row">
                <q-input
                  v-model="dataEnd"
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
            <div class="q-pa-md q-gutter-md row justify-end">
              <q-btn
                label="Limpar Campos"
                color="blue"
              />
            </div>
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
                  :key="space.name"
                >
                  <q-item-section side>
                    <q-checkbox
                      v-model="spaceselect"
                      label=""
                    />
                  </q-item-section>
                  <q-item-section>
                    {{space.name}}
                  </q-item-section>
                </q-item>
              </q-list>
              <div class="q-pa-md q-gutter-md row justify-end">
                <q-btn
                  label="Adicionar"
                  color="green"
                />
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <br />
    <div class="col">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Selecionandos</div>
        </q-card-section>
        <div class="q-pa-md q-gutter-md border">
          <q-list>
            <q-item
              v-for="space in spaces"
              :key="space.name"
            >
              <q-item-section>
                {{space.name}}
              </q-item-section>
            </q-item>
          </q-list>
          <div class="q-pa-md q-gutter-md row justify-end">
            <q-btn
              label="Cancelar"
              color="red"
            />
            <q-btn
              label="Finalizar"
              color="green"
            />
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
.component {
  width: 190px;
}
</style>

<script>
export default {
  name: 'CurrentRecurrence',
  data: () => ({
    reserve: {
      dateInit: '',
      dateEnd: '',
      timeInit: '',
      timeEnd: ''
    },
    shape: {
      solicitamte: '',
      nomeindique: ''
    },
    spaces: [{
      name: 'Laboratório 1'
    }, {
      name: 'Laboratório 2'
    }, {
      name: 'Laboratório 3'
    }, {
      name: 'Laboratório de Redes'
    },
    {
      name: 'Monitoria'
    },
    {
      name: 'Sala de Estudos'
    }],
    startTime: null,
    endTime: null,
    time1: ['07:00', '07:50', '08:40', '08:55', '09:45', '10:35', '10:50', '11:40', '12:30', '13:00', '13:50', '14:55', '15:45', '16:35', '16:50', '17:40'],
    time2: ['07:00', '07:50', '08:40', '08:55', '09:45', '10:35', '10:50', '11:40', '12:30', '13:00', '13:50', '14:55', '15:45', '16:35', '16:50', '17:40'],
    building: [{
      name: 'Prédio de Informática'
    }],
    spaceselect: {

    }
  })
}
</script>

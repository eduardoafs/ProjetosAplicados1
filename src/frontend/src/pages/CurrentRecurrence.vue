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
            <div class="row justify-around">
              <div class="row">
                <q-input
                  v-model="timeInit"
                  mask="##:##"
                  stack-label
                  label="Hora - Início"
                />
                <br />
              </div>

              <div class="row">
                <q-input
                  v-model="timeEnd"
                  mask="##:##"
                  stack-label
                  label="Hora - Término"
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
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

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
    building: [{
      name: 'Prédio de Informática'
    }],
    spaceselect: {

    }
  })
}
</script>

<style scoped>
</style>

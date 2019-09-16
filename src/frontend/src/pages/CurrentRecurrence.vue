<template>
  <q-page padding>
    <div class="text-h5">Reseva Recorrente</div>
    <br>
    <div class="row">
      <div class="col-md-6">
        <div class="row q-gutter-md">
          <div class="col">
            <q-card>
              <q-card-section class="bg-primary text-white">
                <div class="text-h6">Selecionar Data</div>
              </q-card-section>
              <div class="q-pa-md q-gutter-md row items-start">
                <div class="col">
                  <q-input
                    v-model="dateInit"
                    mask="##/##/####"
                    stack-label
                    label="Data - Início"
                  />
                </div>
                <div class="col">
                  <q-input
                    v-model="dataEnd"
                    mask="##/##/####"
                    stack-label
                    label="Data - Término"
                  />
                </div>
                <div class="col">
                  <q-input
                    v-model="timeInit"
                    mask="##:##"
                    stack-label
                    label="Hora - Início"
                  />
                </div>
                <div class="col">
                  <q-input
                    v-model="timeEnd"
                    mask="##:##"
                    stack-label
                    label="Hora - Término"
                  />
                </div>
              </div>
            </q-card>
          </div>
        </div>
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
    }
  })
}
</script>

<style scoped>
</style>

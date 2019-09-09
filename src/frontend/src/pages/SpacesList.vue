<template>
  <q-page>
    <div class="flex flex-center justify-evenly">
      <div class="q-pa-md" style="max-width: 500px">
        <div class="text-center flex-center text-h2">
          <b>Lista de Espaços</b>
          <p />
        </div>
        <q-scroll-area style="height: 650px; max-width: 500px;">
          <div>
            <div>
              <q-expansion-item icon="location_city" :label="space.name" caption="Prédio de Informática" v-for="space in spaces" :key="space.name">
                <q-card>
                  <q-card-section>
                    <div class="q-gutter-sm">
                      <q-btn color="secondary" label="Reservar" />
                      <q-btn color="primary" label="Ver Disponibilidade" @click="$router.push('/viewavailability')" />
                      <q-btn @click="showDetail = true" color="white" text-color="black" label="Detalhes" />
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>
    <q-dialog v-model="showDetail">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="flex">
            <q-date v-model="date" minimal />
            <div class="q-pa-md">
              <p>
                <b>Capacidade:</b> 50 <br>
                <b>Projetores:</b> 0 <br>
                <b>Computadores:</b> 0 <br>
                <b>Disponibilidade:</b> Conferir calendário <br>
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data: () => ({
    showDetail: false,
    date: null,
    spaces: [{
      name: 'Laboratório 1'
    }, {
      name: 'Laboratório 2'
    }, {
      name: 'Laboratório 3'
    }, {
      name: 'Laboratório de Redes'
    }, {
      name: 'Laboratório de Eletrônica'
    }, {
      name: 'Monitoria'
    }, {
      name: 'Sala de Aula Teoríca'
    }, {
      name: 'Sala de Estudos'
    }],
    building: [{
      name: 'Prédio de Informática'
    }]
  })
}
</script>

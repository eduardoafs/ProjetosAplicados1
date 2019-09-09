<template>
  <q-page>
    <div class="flex flex-center justify-evenly">
      <div
        class="q-pa-md"
        style="max-width: 500px"
      >
        <div class="text-center flex-center text-h2"><b>Lista de Espaços</b>
          <p />
        </div>
        <q-toggle
          v-model="expanded"
          label="Expanded"
          class="q-mb-md"
        />
        <q-scroll-area style="height: 650px; max-width: 500px;">
          <div>
            <div>
              <q-expansion-item
                v-model="expanded"
                icon="location_city"
                :label="space.name"
                caption="Prédio de Informática"
                v-for="space in spaces"
                :key="space.name"
              >
                <q-card>
                  <q-card-section>
                    <div class="q-gutter-sm">
                      <q-btn
                        color="secondary"
                        label="Reservar"
                      />
                      <q-btn
                        color="primary"
                        label="Ver Disponibilidade"
                      />
                      <q-btn
                        color="white"
                        text-color="black"
                        label="Detalhes"
                      />
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data: () => ({
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

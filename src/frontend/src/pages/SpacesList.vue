<template>
  <q-page>
    <div class="flex flex-left">

      <div
        class="q-pa-md"
        style="max-width: 500px"
      >
        <div class="text-center text-h3">Lista de Espaços</div>
        <q-toggle
          v-model="expanded"
          label="Expanded"
          class="q-mb-md"
        />
        <q-toggle
          v-model="expanded"
          label="Expanded"
          class="q-mb-md"
        />

        <q-expansion-item
          v-model="expanded"
          icon="perm_identity"
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

<template>
  <q-page padding>
    <div class="text-h5">Cadastrar espaços</div>
    <br>
    <q-card>
      <q-card-section>
        <div class="q-pa-md row q-gutter-md">
          <div class="col">
            <q-input
              v-model="space.nomeSala"
              label="Nome da sala"
            />
            <q-input
              v-model="space.capacidade"
              label="Capacidade"
              type="number"
            />
            <q-input
              v-model="space.local"
              label="Local"
            />
            <q-select
              v-model="optionEscolhida"
              :options="options"
              label="Tipo de local"
            />
            <q-input
              v-model="space.justificativa"
              filled
              type="textarea"
              label="Justificativa"
            />
          </div>
          <div class="col">
            <q-input
              v-model="space.responsavel"
              label="Responsável"
            />
            <q-input
              v-model="space.ramal"
              label="Ramal/número"
              type="number"
            />
            <q-input
              v-model="space.descricao"
              type="textarea"
              label="Descrição"
            />
          </div>
        </div>

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
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      name: 'RegisterSpaces',
      optionEscolhida: '',
      options: [
        'normal', 'especial'
      ],
      space: {
        nomeSala: '',
        capacidade: '',
        local: '',
        responsavel: '',
        ramal: '',
        descricao: '',
        justificativa: ''
      }

    }
  }
}
</script>

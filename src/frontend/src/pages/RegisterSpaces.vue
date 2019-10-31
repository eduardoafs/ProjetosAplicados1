<template>
  <q-page padding>
    <div class="text-h5">Cadastrar espaços</div>
    <br>
    <q-card>
      <q-card-section>
        <div class="q-pa-md row q-gutter-md">
          <div class="col">
            <q-input
              v-model="space.espacoNome"
              label="Nome da sala"
            />
            <q-input
              v-model="space.capacidade"
              label="Capacidade"
              type="number"
            />
            <q-input
              v-model="space.espacoLocalizacao"
              label="Local"
            />
            <q-select
              v-model="space.espacoEspecial"
              :options="options"
              label="Tipo de uso"
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
              v-model="space.espacoResponsavel"
              label="Responsável"
            />
            <q-input
              v-model="space.ramal"
              label="Ramal/número"
              type="number"
            />
            <q-input
              v-model="space.espacoDescricao"
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
            @click="save()"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      name: 'RegisterSpaces',
      optionEscolhida: '',
      options: [
        { label: 'normal', value: false }, { label: 'restrito', value: true }
      ],
      space: {
        espacoNome: '',
        espacoDescricao: '',
        espacoLocalizacao: '',
        espacoEspecial: null,
        espacoResponsavel: ''
      }

    }
  },
  methods: {
    ...mapActions(['createSpace']
    ),
    save () {
      this.space.espacoEspecial = false
      this.createSpace(this.space)
    }
  }
}
</script>

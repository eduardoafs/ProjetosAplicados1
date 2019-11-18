<template>
  <q-page padding>
    <div class="text-h5">Cadastrar espaços</div>
    <br>
    <q-card>
      <q-card-section>
        <div class="q-pa-md row q-gutter-md">
          <div class="col">
            <q-input
              v-model="space.nome"
              label="Nome da sala"
            />
            <q-input
              v-model="space.qtdPessoas"
              label="Capacidade"
              type="number"
            />

            <q-input
              v-model="space.localizacao"
              label="Local"
            />
            <q-select
              v-model="space.especial"
              :options="options"
              label="Tipo de uso"
            />
            <q-input
              v-if="space.especial == true"
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
            <q-select
              v-model="space.computadores"
              :options="options2"
              label="Computadores"
            />
            <q-input
              v-model="space.ramal"
              label="Ramal/número"
              type="number"
            />
            <q-select
              v-model="space.desabilitado"
              :options="options3"
              label="Desabilitado "
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
        { label: 'Normal', value: false }, { label: 'Restrito', value: true }
      ],
      options2: [
        { label: 'Não', value: false }, { label: 'Sim', value: true }
      ],
      options3: [
        { label: 'Não', value: false }, { label: 'Sim', value: true }
      ],
      space: {
        computadores: { label: 'Sim', value: true },
        desabilitado: true,
        descricao: '',
        especial: true,
        justificativa: '',
        localizacao: '',
        nome: '',
        qtdPessoas: 0,
        ramal: 0,
        responsavel: ''

      }

    }
  },
  methods: {
    ...mapActions(['createSpace']
    ),
    async save () {
      this.space.especial = this.options.value
      this.space.computadores = this.options2.value
      this.space.desabilitado = this.options3.value
      await this.createSpace(this.space)
      this.space = {}
      this.$router.push('/spaces-list')
    }
  }
}
</script>

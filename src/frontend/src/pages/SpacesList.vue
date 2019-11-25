<template>
  <q-page padding>
    <div class="flex">
      <div class="text-h5">
        Lista de espaços
      </div>
      <q-space />
      <q-btn
        label="Criar espaço"
        @click="$router.push('/register-spaces')"
        color="blue"
      />
    </div>
    <div class="q-pa-md">
      <form class="row q-gutter-md">
        <div class="col">
          <q-select
            v-model="filters.pessoas"
            :options="['30 Pessoas', '40 Pessoas', '50 Pessoas']"
            label="Pessoas"
          />
        </div>
        <div class="col">
          <q-select
            v-model="filters.computadores"
            :options="['Sim', 'Não']"
            label="Computadores"
          />
        </div>
      </form>
      <br>
      <br>

      <q-expansion-item
        icon="business"
        v-for="space in spaces"
        :key="space.id"
        :label="space.nome"
      >
        <q-card>
          <q-card-section>
            <div class="q-gutter-sm">
              <q-btn
                color="secondary"
                label="Reservar"
                @click="$router.push(`/create-reserve/${Number(space.id)}`)"
                clickable
                v-close-popup
              />
              <q-btn
                color="primary"
                label="Ver Disponibilidade"
                @click="$router.push(`/view-availability/${Number(space.id)}`)"
                clickable
                v-close-popup
              />
              <q-btn
                color="white"
                text-color="black"
                label="Detalhes"
                @click="showDetail = true, atual = space"
                clickable
                v-close-popup
              />
            </div>

          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
    <q-dialog v-model="showDetail">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="flex">
            <q-date
              v-model="date"
              minimal
            />
            <div class="q-pa-md">
              <p>
                <b>Capacidade: </b> {{atual.qtdPessoas}} <br>
                <b>Descrição: </b> {{atual.descricao}} <br>
                <b>Computadores: </b><span v-if="atual.computadores"> Sim </span>
                <span v-esle> Não </span><br />
                <b>Responsável: </b> {{atual.responsavel}} <br>
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
  data: () => ({
    showDetail: false,
    date: null,
    atual: {},
    filters: {
      pessoas: '',
      disponibilidade: '',
      computadores: '',
      setor: ''
    }
  }),
  methods: {
    ...mapActions(['getSpaces'])
  }
}
</script>

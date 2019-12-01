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
          <p>Quantidade de Pessoas</p>
          <select
            class="appearance-select"
            @change="setFilters(filters)"
            v-model="filters.qtdPessoas"
          >
            <option :value="null">Limpar filtro</option>
            <option :value="30">30 Pessoas</option>
            <option :value="40">40 Pessoas</option>
            <option :value="50">50 Pessoas</option>
          </select>
        </div>
        <div class="col">
          <p>Computadores</p>
          <select
            class="appearance-select"
            @change="setFilters(filters)"
            v-model="filters.computadores"
          >
            <option :value="null">Limpar filtro</option>
            <option :value="true">Sim</option>
            <option :value="false">Não</option>
          </select>
        </div>
      </form>
      <br>
      <br>

      <q-expansion-item
        icon="business"
        v-for="space in spacesFilted"
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
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  created () {
    this.getSpaces()
  },
  computed: {
    ...mapState({
      spaces: state => state.spaces.list
    }),
    ...mapGetters(['spacesFilted'])
  },
  data: () => ({
    showDetail: false,
    date: null,
    atual: {},
    filters: {
      qtdPessoas: null,
      computadores: null
    }
  }),
  methods: {
    ...mapActions(['getSpaces', 'setFilters'])
  }
}
</script>
<style scoped>
.appearance-select {
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 85%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}
.select-css::-ms-expand {
  display: none;
}
.select-css:hover {
  border-color: #888;
}
.select-css:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}
.select-css option {
  font-weight: normal;
}
</style>

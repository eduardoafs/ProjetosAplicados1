<template>
  <q-page padding>
    <div class="text-h5">Lista de espaços</div>
    <div class="q-pa-md">
      <form class="row q-gutter-md">
        <div class="col">
          <q-select
            v-model="model"
            :options="['30 Pessoas', '40 Pessoas', '50 Pessoas']"
            label="Pessoas"
          />
          <q-select
            v-model="model"
            :options="['Disponível', 'Ocupado', 'Fechado']"
            label="Disponibilidade"
          />
        </div>
        <div class="col">
          <q-select
            v-model="model"
            :options="['Informatica', 'Graduação']"
            label="Setor"
          />
          <q-select
            v-model="model"
            :options="['Sim', 'Não']"
            label="Computadores"
          />
        </div>
      </form>
      <br>
      <q-list>
        <q-item
          v-for="space in spaces"
          :key="space.id"
        >
          <q-item-section side>
            <q-btn
              color="primary"
              flat
              icon="more_vert"
            >
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item-label header>{{space.espacoDescricao}}</q-item-label>
                  <q-item
                    @click="$router.push('/create-reserve')"
                    clickable
                    v-close-popup
                  >
                    <q-item-section>Reservar</q-item-section>
                  </q-item>
                  <q-item
                    @click="$router.push('/viewavailability')"
                    clickable
                    v-close-popup
                  >
                    <q-item-section>Ver disponibilidade</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item
                    @click="showDetail = true"
                    clickable
                    v-close-popup
                  >
                    <q-item-section>Detalhes</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-item-section>
          <q-item-section>
            {{space.espacoDescricao }}
          </q-item-section>

        </q-item>
      </q-list>
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
    model: '',
    building: [{
      name: 'Prédio de Informática'
    }]
  }),
  methods: {
    ...mapActions(['getSpaces'])
  }
}
</script>

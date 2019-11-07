<template>
  <q-page padding>
    <div class="text-h5">Lista de reservas</div>
    <div class="q-pa-md">
      <form class="row q-gutter-md">
        <div class="col">
          <q-input
            v-model="search"
            label="Busque pelo nome da reserva"
          />
          <br>
          <br>
          <q-list>
            <q-item
              v-for="reserve in reserves"
              :key="reserve.id"
            >
              <q-item-section side>
                <q-btn
                  color="primary"
                  flat
                  icon="more_vert"
                >
                  <q-menu>
                    <q-list style="min-width: 100px">
                      <q-item-label header>{{reserve.responsavel}}</q-item-label>
                      <q-item
                        @click="$router.push('/create-reserve')"
                        clickable
                        v-close-popup
                      >
                        <q-item-section>Editar reserva</q-item-section>
                      </q-item>
                      <q-item
                        @click="confirmaExcluir(reserve)"
                        clickable
                        v-close-popup
                      >
                        <q-item-section>excluir</q-item-section>
                      </q-item>
                      <q-separator />
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item-section>
              <q-item-section>
                {{reserve.espaco.espacoNome}} -
                {{reserve.espaco.espacoResponsavel}} -
                {{reserve.dataReservaInicio}}
              </q-item-section>

            </q-item>
          </q-list>
        </div>
      </form>
    </div>

    <q-dialog v-model="showDetail">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="col">
            <center>
              <h5>Tem certeza que deseja excluir esta reserva?</h5>
            </center>
            <br>
            <q-input
              v-model="justificativa"
              filled
              type="textarea"
              label="Justificativa"
            />
            <div class="q-pa-md q-gutter-md row justify-end">
              <q-btn
                label="cancelar"
                color="red"
                @click="showDetail = false"
              />
              <q-btn
                label="confimar"
                color="green"
                @click="cancelarReserva()"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  created () {
    this.getReservesApproved()
  },
  computed: {
    ...mapState({
      reserves: state => state.reserves.list
    })
  },
  data () {
    return {
      justificativa: '',
      showDetail: false,
      search: '',
      reservaSelect: {}
    }
  },
  methods: {
    ...mapActions(['getReservesApproved', 'cancelReserve']),
    confirmaExcluir (reserva) {
      this.showDetail = true
      this.reservaSelect = reserva
    },
    async cancelarReserva () {
      await this.cancelReserve(this.reservaSelect.idReserva)
      this.showDetail = false
      this.getReservesApproved()
    }
  }

}
</script>

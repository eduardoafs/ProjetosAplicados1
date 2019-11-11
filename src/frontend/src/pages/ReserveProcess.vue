getReservesPendences()
<template>
  <q-page padding>
    <div class="text-h5">Processar Reservas</div>
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
              v-for="reserve in reservesPendences"
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
                        @click="aprovar(reserve)"
                        clickable
                        v-close-popup
                      >
                        <q-item-section>Aprovar Reserva</q-item-section>
                      </q-item>
                      <q-item
                        @click="aprovar(reserve)"
                        clickable
                        v-close-popup
                      >
                        <q-item-section>Negar Reserva</q-item-section>
                      </q-item>
                      <q-item
                        @click="showDetail = true"
                        clickable
                      >
                        <q-item-section>Detalhes da Reserva</q-item-section>
                      </q-item>
                      <q-separator />
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item-section>
              <q-item-section>
                {{reserve.espaco.nome}} -
                {{reserve.responsavel}}
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </form>
    </div>
    <q-dialog v-model="showApproved">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="col">
            <center>
              <h5>Deseja aprovar a reserva?</h5>
            </center>
            <br>
            <div class="q-pa-md q-gutter-md row justify-end">
              <q-btn
                label="cancelar"
                color="red"
                @click="$router.push('/process-reserves')"
                clickable
              />
              <q-btn
                @click="approveReservation()"
                label="confirmar"
                color="green"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="showDenied">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="col">
            <center>
              <h5>Deseja negar a reserva?</h5>
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
                @click="$router.push('/process-reserves')"
                clickable
              />
              <q-btn
                label="confirmar"
                color="green"
                clickable
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="showDetail">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <center>
            <h5>Informações da Reserva</h5>
          </center>
          <div class="flex">
            <q-date
              v-model="date"
              minimal
            />
            <div class="q-pa-md">
              <p>
                <b>Local:</b> <br>
                <b>responsável:</b> <br>
                <b>Horário de Reserva:</b> <br>
                <b>Justificativa para reserva:</b> <br>
              </p>
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
    this.getReservesPendences()
  },
  computed: {
    ...mapState({
      reservesPendences: state => state.reserves.list
    })
  },
  data () {
    return {
      justificativa: '',
      showApproved: false,
      showDenied: false,
      showDetail: false,
      search: '',
      date: '',
      reservaEscolhida: {}
    }
  },
  methods: {
    ...mapActions(['getReservesPendences', 'approveReserve']
    ),
    async approveReservation () {
      // const r = { ...this.reservaEscolhida }
      // r.aprovada = true
      await this.approveReserve(this.reservaEscolhida.id)
      this.showApproved = false
      this.getReservesPendences()
    },
    aprovar (reserve) {
      this.showApproved = true
      this.reservaEscolhida = reserve
    }
  }

}
</script>

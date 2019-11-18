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
          <br />
          <br />
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
                      <q-item-label header>{{
                        reserve.responsavel
                      }}</q-item-label>
                      <q-item
                        @click="$router.push('/create-reserve/' + reserve.id)"
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
                <b>
                  {{ reserve.data | dateFormat }} -
                  {{ getHours(reserve.horarios) }}
                </b>
                {{ reserve.espaco.nome }} -
                {{ reserve.usuario.nome }}
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
            <br />
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
import dayjs from 'dayjs'

export default {
  created () {
    this.getReservesApproved()
  },
  computed: {
    ...mapState({
      reserves: state => state.reserves.list
    })
  },
  filters: {
    dateFormat (d) {
      console.log(d)
      return dayjs(new Date(d)).format('DD/MM/YY')
    }
  },
  data () {
    return {
      justificativa: '',
      showDetail: false,
      search: '',
      reservaSelect: {},
      time1: [
        '07:00',
        '07:50',
        '08:55',
        '09:45',
        '10:50',
        '11:40',
        '13:00',
        '13:50',
        '14:55',
        '15:45',
        '16:50',
        '17:40'
      ],
      time2: [
        '07:50',
        '08:40',
        '09:45',
        '10:35',
        '11:40',
        '12:30',
        '13:50',
        '14:40',
        '15:45',
        '16:35',
        '17:40',
        '18:30'
      ]
    }
  },
  methods: {
    ...mapActions(['getReservesApproved', 'cancelReserve']),
    confirmaExcluir (reserva) {
      this.reservaSelect = { ...reserva }
      this.reservaSelect.justificativa = this.justificativa
      this.showDetail = true
    },
    async cancelarReserva () {
      await this.cancelReserve(this.reservaSelect)
      this.showDetail = false
      this.getReservesApproved()
    },
    getHours (vetor) {
      let timeInit, timeFinal
      let i = 0
      while (vetor[i] !== 1 && i !== vetor.length) {
        i++
      }
      timeInit = this.time1[i]
      while (vetor[i] !== 0 && i !== vetor.length) {
        i++
      }
      timeFinal = this.time2[i - 1]
      return `${timeInit} - ${timeFinal}`
    }
  }
}
</script>

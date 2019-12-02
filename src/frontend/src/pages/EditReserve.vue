<template>
  <q-page padding>
    <div class="text-h5">Edição de reservas</div>
    <div class="q-pa-md">
      <form class="row q-gutter-md">
        <div class="col">
          <q-input
            v-model="search"
            label="Busque pelo nome do espaço"
          />
          <br />
          <br />
          <q-list>
            <q-item
              v-for="reserve in filteredData"
              :key="reserve.id"
            >
              <q-item-section side>
                <div class="row q-gutter-md">
                  <q-btn
                    round
                    color="secondary"
                    icon="edit"
                    @click="$router.push('/create-reserve/' + reserve.id)"
                    clickable
                  />
                  <q-btn
                    round
                    color="red"
                    icon="close"
                    @click="confirmaExcluir(reserve)"
                    clickable
                  />
                  <q-btn
                    round
                    color="primary"
                    icon="search"
                    @click="selectReserve(reserve)"
                    clickable
                  />
                </div>
              </q-item-section>
              <q-item-section>
                <b>
                  {{ reserve.dataInicio | dateFormat }} -
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

    <q-dialog v-model="showDenied">
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
                @click="showDenied = false"
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
    <q-dialog v-model="showDetail">
      <q-card style="width: 800px; max-width: 80vw;">
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
                <b>Local: </b>{{reservaSelect.espaco.nome}}<br>
                <b>Responsável: </b>{{reservaSelect.usuario.nome}} <br>
                <b>Horário de Reserva: </b>{{getHours(reservaSelect.horarios)}}<br>
                <b>Justificativa para reserva: </b>{{reservaSelect.justificativa}}<br>
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
    this.getReservesApproved()
  },
  computed: {
    ...mapState({
      reserves: state => state.reserves.list
    }),
    filteredData () {
      return this.reserves.filter(reserve => reserve.espaco.nome.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  data () {
    return {
      justificativa: '',
      showDenied: false,
      showDetail: false,
      search: '',
      reservaSelect: {
        espaco: {
          nome: ''
        },
        usuario: {
          nome: ''
        },
        horarios: [],
        justificativa: ''
      },
      date: '',
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
      this.showDenied = true
    },
    async cancelarReserva () {
      await this.cancelReserve(this.reservaSelect)
      this.showDenied = false
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
    },
    selectReserve (reserve) {
      this.reservaSelect = reserve
      this.date = this.dataAtualFormatada(new Date(reserve.dataInicio))
      this.showDetail = true
    },
    dataAtualFormatada (data) {
      let dia = data.getDate().toString()
      let diaF = (dia.length === 1) ? '0' + dia : dia
      let mes = (data.getMonth() + 1).toString()
      let mesF = (mes.length === 1) ? '0' + mes : mes
      let anoF = data.getFullYear()
      return anoF + '/' + mesF + '/' + diaF
    }
  }
}
</script>

<template>
  <q-page padding>
    <div class="text-h5">Ver disponibilidade - {{selectedSpace.nome}}</div>
    <br>
    <center>
      <div class="disp-form">
        <input
          v-model="dateFilter"
          type="date"
        >
        <q-btn
          @click="filter(dateFilter)"
          color="green"
        >Buscar</q-btn>
      </div>
    </center>

    <div class="q-pa-md table-result">
      <q-list bordered>
        <q-item
          v-for="(h, index) in horarios"
          :key="index"
          class="q-my-sm"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-avatar
              :color="h == 1 ? 'red' : 'green'"
              text-color="white"
            >
              {{ index+1 }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ time1[index] + ' - ' + time2[index]}}</q-item-label>
            <q-item-label
              caption
              lines="1"
            >{{ h == 1 ? 'Ocupado' : 'Disponível' }}</q-item-label>
          </q-item-section>

          <q-item-section side>

          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <center>
      <div class="disp-form-two">
        <q-btn
          @click="$router.push('/create-reserve')"
          color="secondary"
          label="Criar Reservar"
        />
      </div>
    </center>

  </q-page>
</template>

<script>

import { mapActions, mapState } from 'vuex'

import {
  ReserveService
} from '../services/api.service'

export default {
  created () {
    this.getSpaces()
    this.idSpace = this.$route.params.id
    this.selectedSpace = this.spaces.find(({ id }) => parseInt(this.idSpace) === id)
    console.log(this.selectedSpace)
  },
  computed: {
    ...mapState({
      spaces: state => state.spaces.list
    })
  },
  data () {
    return {
      idSpace: 0,
      selectedSpace: {},
      pagination: {
        rowsPerPage: 12
        // rowsNumber: xx if getting data from a server
      },
      dateFilter: new Date(),
      horarios: [

      ],
      time1: ['07:00', '07:50', '08:55', '09:45', '10:50', '11:40', '13:00', '13:50', '14:55', '15:45', '16:50', '17:40'],
      time2: ['07:50', '08:40', '09:45', '10:35', '11:40', '12:30', '13:50', '14:40', '15:45', '16:35', '17:40', '18:30']
    }
  },
  methods: {
    ...mapActions(['reservesByDate', 'getSpaces']),
    async filter (date) {
      date = date.replace('/', '-').replace('/', '-')
      console.log('data antes: ' + date)
      date = this.dataAtualFormatada(date)
      console.log('data depois: ' + date)
      let payload = {
        idSpace: 0,
        date: ''
      }
      payload.idSpace = this.idSpace
      payload.date = date
      let { data } = await ReserveService.reservesByDate(payload)
      this.horarios = data[0].horarios
      console.log('reservas = ', data[0].horarios)
    },
    dataAtualFormatada (data) {
      let retornaData = data.split('-')
      return retornaData[2] + '-' + retornaData[1] + '-' + retornaData[0]
    }
  }
}
</script>

<style scoped>
.disp-form {
  width: 80%;
  color: #1a2633;
  border-radius: 10px;
  font-size: 16px;
  background: #fff;
  border: 2px solid #42505f;
  padding: 10px 20px;
  align-content: center;
}
.home {
  padding: 10px 20px;
}
.disp-form-two {
  padding: 10px 20px;
  width: 50%;
  font-size: 16px;
  background: #fff;
  border: 1px solid #fff;
  padding: 10px 20px;
}

.table-result {
  width: 100%;
}
</style>

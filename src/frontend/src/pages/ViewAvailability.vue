<template>
  <q-page padding>
    <div class="text-h5">Ver disponibilidade</div>
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
      <q-table
        title="Horários"
        :data="data"
        :columns="columns"
        row-key="name"
        :pagination.sync="pagination"
      />
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

export default {
  created () {
    this.getSpaces()
    this.idSpace = this.$route.params.id
    console.log(this.$route.params.id)
  },
  computed: {
    ...mapState({
      spaces: state => state.spaces.list
    })
  },
  data () {
    return {
      idSpace: 0,
      pagination: {
        rowsPerPage: 12
        // rowsNumber: xx if getting data from a server
      },
      dateFilter: new Date(),
      columns: [
        {
          name: 'horario',
          required: true,
          label: 'Horário',
          align: 'center',
          field: row => row.horario,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'segunda', align: 'center', label: 'Segunda', field: 'segunda' },
        { name: 'terca', align: 'center', label: 'Terça', field: 'terca' },
        { name: 'quarta', align: 'center', label: 'Quarta', field: 'quarta' },
        { name: 'quinta', align: 'center', label: 'Quinta', field: 'quinta' },
        { name: 'sexta', align: 'center', label: 'Sexta', field: 'sexta' },
        { name: 'sabado', align: 'center', label: 'Sabádo', field: 'sabado' },
        { name: 'domingo', align: 'center', label: 'Domingo', field: 'domingo' }
      ],
      data: [
        {
          horario: '1',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        }, {
          horario: '2',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        }, {
          horario: '3',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        }, {
          horario: '4',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        }, {
          horario: '5',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        }, {
          horario: '6',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        }, {
          horario: '7',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        }, {
          horario: '8',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        }, {
          horario: '9',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        }, {
          horario: '10',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        }, {
          horario: '11',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        }, {
          horario: '12',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        }
      ]
    }
  },
  methods: {
    ...mapActions(['reservesByDate', 'getSpaces']),
    filter (date) {
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
      let reservas = this.reservesByDate(payload)
      console.log('reservas = ' + reservas)
    },
    dataAtualFormatada (data) {
      let retornaData = data.split('-')
      return retornaData[2] + '-' + retornaData[1] + '-' + retornaData[0]
    },
    SearchAvailability () {
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

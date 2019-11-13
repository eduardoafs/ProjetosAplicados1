<template>
  <q-page padding>
    <div class="text-h5">Ver disponibilidade</div>
    <br>
    <center>
      <div class="disp-form">
        <cc-form @filter="filter"> </cc-form>
      </div>
    </center>

    <div class="q-pa-md table-result">
      <q-table
        title="Horários"
        :data="data"
        :columns="columns"
        row-key="name"
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

import CcForm from '../components/FormDisp.vue'
import { mapActions } from 'vuex'

export default {
  components: { CcForm },
  data () {
    return {
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
          horario: '07:00 - 07:50',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        },
        {
          horario: '07:50 - 08:40',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        },
        {
          horario: '08:40 - 09:30',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        },
        {
          horario: '09:50 - 10:40',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        },
        {
          horario: '10:40 - 11:30',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        },
        {
          horario: '11:30 - 12:20',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        },
        {
          horario: '13:00 - 13:50',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        },
        {
          horario: '13:50 - 14:40',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        },
        {
          horario: '14:55 - 15:45',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        },
        {
          horario: '15:45 - 16:35',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: '',
          domingo: ''
        },
        {
          horario: '16:50 - 17:40',
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
    ...mapActions(['reservesByDate']),
    filter (date) {
      date = date.replace('/', '-').replace('/', '-')
      console.log('data antes: ' + date)
      date = this.dataFormatada(date)
      console.log('data depois: ' + date)
      let reservas = this.reservesByDate(date)
      console.log('reservas = ' + reservas)
    },
    dataFormatada (dataRecebida) {
      var data = new Date(dataRecebida),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'), // +1 pois no getMonth Janeiro começa com zero.
        ano = data.getFullYear()
      return dia + '-' + mes + '-' + ano
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

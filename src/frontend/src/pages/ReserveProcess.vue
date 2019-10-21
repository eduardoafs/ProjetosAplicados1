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
                        @click="showApproved = true"
                        clickable
                        v-close-popup
                      >
                        <q-item-section>Aprovar Reserva</q-item-section>
                      </q-item>
                      <q-item
                        @click="showDenied = true"
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
                {{reserve.idReserva}}
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
                <b>responsável:</b>  <br>
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
    this.getReserves()
  },
  computed: {
    ...mapState({
      reserves: state => state.reserves.list
    })
  },
  data () {
    return {
      justificativa: '',
      showApproved: false,
      showDenied: false,
      showDetail: false,
      search: '',
      reserves: [
        {
          id: 1,
          name: 'lab1'
        },
        {
          id: 2,
          name: 'lab2'
        },
        {
          id: 3,
          name: 'informatica'
        },
        {
          id: 4,
          name: 'monitoria'
        }
      ]
    }
  },
  methods: {
    ...mapActions(['getReserves'])
  }

}
</script>

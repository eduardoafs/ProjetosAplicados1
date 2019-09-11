<template>
  <q-page padding>
    <div>
      <div class="text-h5">Criar reserva</div>
      <br>
      <div class="q-pa-md row q-gutter-md">
        <div class="col">
          <q-card>
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">Espaços</div>
            </q-card-section>
            <q-card-section>
              <q-input v-model="searchSpace" label="Procurar espaços..." />
              <br>
              <q-list separator>
                <q-item v-for="i in 3" :key="i" clickable v-ripple>
                  <q-item-section>
                    Lab {{i}}
                  </q-item-section>
                  <q-item-section v-if="i == 2" avatar>
                    <q-icon color="green" name="check_circle" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>

        <div class="col">
          <q-card>
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">Resposável</div>
            </q-card-section>
            <q-card-section>
              <q-input v-model="searchUser" label="Procurar resposável..." />
              <br>
              <q-list separator>
                <q-item v-for="u in 3" :key="u" clickable v-ripple>
                  <q-item-section>
                    Usuário {{u}}
                  </q-item-section>
                  <q-item-section v-if="u == 2" avatar>
                    <q-icon color="green" name="check_circle" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="q-pa-md q-gutter-md row items-start">
        <div class="col">
          <q-input v-model="dateInit" mask="##/##/####" stack-label label="Data - Início" />
        </div>
        <div class="col">
          <q-input v-model="timeInit" mask="##:##" stack-label label="Hora - Início" />
        </div>
        <div class="col">
          <q-input v-model="dataEnd" mask="##/##/####" stack-label label="Data - Término" />
        </div>
        <div class="col">
          <q-input v-model="timeEnd" mask="##:##" stack-label label="Hora - Término" />
        </div>
      </div>
      <div class="q-pa-md row">
        <div class="col-md-12">
          <q-input v-model="justification" filled type="textarea" label="Justificativa" />
        </div>
      </div>
      <div class="q-pa-md q-gutter-md row justify-end">
        <q-btn label="Consultar espaço" color="primary" />
        <q-btn label="Retornar" color="red" />
        <q-btn label="Criar reserva" color="green" />
      </div>
    </div>
  </q-page>
</template>

<style>
.home {
  width: 60%;
}
</style>

<script>
export default {
  name: 'CreateReserve',
  data: () => ({
    reserve: {
      dateInit: '',
      dateEnd: '',
      timeInit: '',
      timeEnd: ''
    },
    searchSpace: '',
    searchUser: '',
    justification: ''
  })
}
</script>

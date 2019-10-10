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
        </div>
        <div class="col">
        </div>
      </form>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>

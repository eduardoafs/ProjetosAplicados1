
<template>
  <form @submit.prevent="submit">
    <div class="q-pa-md" style="max-width: 300px">
      <q-input filled v-model="date" mask="date" :rules="['date']">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <q-btn color="secondary" label="Confirmar" />
  </form>
</template>

<script>
export default {
  data () {
    return {
      date: '2019/02/01'
    }
  },
  methods: {
    submit () {

    }
  }
}
</script>

<style scoped>
.my-input {
  width: 100%;
  margin-bottom: 20px;
}
</style>

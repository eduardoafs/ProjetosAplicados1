
<template>
  <form @submit.prevent="submit">

    <input
      id="date"
      class="my-input"
      type="date"
      v-model="form.date"
    >

    <q-btn
      color="secondary"
      label="Confirmar"
    />

  </form>
</template>

<script>
export default {

  data () {
    return {
      form: {
        date: ''
      }
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

<template>
  <q-page class="flex flex-center">
    <div class="home text-center">
      <h3>Reserva de espaços</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Amet vero voluptate asperiores fuga dicta rerum, consequuntur
        incidunt consequatur odio odit nihil dolorem temporibus corrupti qui quae
        quibusdam maxime reprehenderit ullam.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Amet vero voluptate asperiores fuga dicta rerum, consequuntur
        incidunt consequatur odio odit nihil dolorem temporibus corrupti qui quae
        quibusdam maxime reprehenderit ullvam.
      </p>
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
  name: 'PageIndex',
  created () {
    this.$router.push('/edit-reserves')
  }
}
</script>

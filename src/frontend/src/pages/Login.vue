<template>
  <q-layout class="login">
    <q-page class="login flex flex-center full-heigth">
      <q-page-container>
        <div>
          <q-card>
            <q-card-section>
              <div class="text-h6">Realizar Login</div>
              <form @submit.prevent="login">
                <q-input v-model="username" label="Usuário">
                  <template v-slot:prepend>
                    <q-icon name="account_circle" />
                  </template>
                </q-input>
                <q-input v-model="password" type="password" label="Senha">
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                </q-input>
                <div class="q-gutter-sm">
                  <q-checkbox v-model="remeber" label="Lembrar-se" />
                </div>
                <q-btn @click="$router.push('/')" rounded icon="check_circle" color="primary" label="Entrar" class="full-width" />
                <p></p>
              </form>
            </q-card-section>
          </q-card>
        </div>
      </q-page-container>
    </q-page>
  </q-layout>
</template>

<style>
</style>

<script>
export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: '',
    remeber: false
  }),
  methods: {
    login () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.login {
  background: rgb(34, 193, 195);
  background: linear-gradient(
    210deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(192, 253, 45, 1) 100%
  );
}
</style>

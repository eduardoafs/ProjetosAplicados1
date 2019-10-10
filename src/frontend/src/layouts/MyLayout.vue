<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          GES
        </q-toolbar-title>

        <q-btn
          @click="$router.push('/login')"
          label="Sair"
          flat
          dense
          icon="exit_to_app"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item
          v-for="item in menus"
          :key="item.label"
          @click="goTo(item.path)"
          clickable
          tag="a"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      menus: [
        {
          label: 'Home',
          icon: 'home',
          path: '/'
        },
        {
          label: 'Espaços',
          icon: 'check_box_outline_blank',
          path: '/spaceslist'
        },
        {
          label: 'Reserva',
          icon: 'calendar_today',
          path: '/create-reserve'
        },
        {
          label: 'Reserva especial',
          icon: 'perm_contact_calendar'
        },
        {
          label: 'Cadastrar Espaço',
          icon: 'meeting_room',
          path: '/register-spaces'
        }
      ]
    }
  },
  methods: {
    goTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
</style>

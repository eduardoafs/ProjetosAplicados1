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
        <!--<q-expansion-item
          expand-separator
          icon="calendar_today"
          label="Reserva"
        >-->
        <q-item
          v-for="item in reserves"
          :key="item.label"
          @click="goTo(item.path)"
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.label}}</q-item-label>
          </q-item-section>
        </q-item>
        <!-- </q-expansion-item> -->
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    this.getReserves()
    this.getUser()
    this.getSpaces()
  },
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
<<<<<<< HEAD
=======
          label: 'Realizar Reserva',
          icon: 'event_available',
          path: '/create-reserve'
        },
        {
>>>>>>> f61c032d174998c396b512e88a5f43a8cbfdebd9
          label: 'Espaços',
          icon: 'business',
          path: '/spaces-list'
        },
        {
          label: 'Ver disponibilidade',
          icon: 'search',
          path: '/view-availability'
        }
      ],
      reserves: [
        {
          label: 'Reservas',
          icon: 'format_list_bulleted',
          path: '/edit-reserves'
        },
        {
          label: 'Realizar Reserva',
          icon: 'event',
          path: '/create-reserve'
        },
        {
          label: 'Reserva Recorrente',
          icon: 'date_range',
          path: '/current-recurrence'
        },
        {
          label: 'Processar Reservas',
          icon: 'edit',
          path: '/process-reserves'
<<<<<<< HEAD
=======
        },
        {
          label: 'Editar Reservas',
          icon: 'edit',
          path: '/edit-reserves'
>>>>>>> f61c032d174998c396b512e88a5f43a8cbfdebd9
        }
      ]
    }
  },
  methods: {
    ...mapActions(['getReserves', 'getUsers', 'getSpaces']
    ),
    goTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
</style>

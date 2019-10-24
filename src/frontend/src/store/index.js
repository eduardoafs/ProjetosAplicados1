import Vue from 'vue'
import Vuex from 'vuex'

import spaces from './spaces.module'
import reserves from './reserves.module'
import users from './users.module'
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      spaces,
      reserves,
      users
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}

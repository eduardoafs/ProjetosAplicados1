import {
  UsersService
} from '../services/api.service'

export default {
  state: {
    list: []
  },
  mutations: {
    setUsers (state, list) {
      state.list = list
    }
  },
  actions: {
    async getUsers ({
      commit
    }) {
      console.log('GETUSERS')
      const result = await UsersService.query()
      commit('setUsers', result.data)
    }
  }
}

import {
  SpaceService
} from '../services/api.service'

export default {
  state: {
    list: []
  },
  mutations: {
    setSpaces (state, list) {
      state.list = list
    }
  },
  actions: {
    async getSpaces ({
      commit
    }) {
      console.log('GETSPACES')
      const result = await SpaceService.query()
      commit('setSpaces', result.data)
    },
    async createSpace ({
      commit
    }, space) {
      try {
        console.log('CREATESPACE')
        const result = await SpaceService.create(space)
        return result
      } catch (error) {
        console.log('Error ao criar reserva: ' + error)
      }
    }
  }
}

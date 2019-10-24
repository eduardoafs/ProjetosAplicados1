import {
  ReserveService
} from '../services/api.service'

export default {
  state: {
    list: []
  },
  mutations: {
    setReserves (state, list) {
      state.list = list
    }
  },
  actions: {
    async getReserves ({
      commit
    }) {
      console.log('GETRESERVES')
      const result = await ReserveService.query()
      commit('setReserves', result.data)
    },
    async createReserve ({
      commit
    }, reserve) {
      try {
        const result = await ReserveService.create(reserve)
        return result
      } catch (error) {
        console.log(error)
      }
    }
  }
}

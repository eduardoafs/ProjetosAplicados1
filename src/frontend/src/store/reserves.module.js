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
    },
    async getReservesPendences ({
      commit
    }) {
      console.log('GETRESERVESPENDENCES')
      const result = await ReserveService.getReservesPendences()
      commit('setReserves', result.data)
    },
    async getReservesApproved ({
      commit
    }) {
      console.log('GETRESERVESAPPROVED')
      const result = await ReserveService.getReservesApproved()
      commit('setReserves', result.data)
    },
    async approveReserve ({
      commit
    }, id) {
      console.log('APPROVERESERVE')
      const result = await ReserveService.approveReserve({
        id
      })
      return result
    },
    async cancelReserve ({
      commit
    }, id) {
      console.log('CANCELRESERVA')
      const result = await ReserveService.cancelReserve({
        id
      })
      return result
    }
  }
}

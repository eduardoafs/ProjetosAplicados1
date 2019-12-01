import {
  ReserveService
} from '../services/api.service'

export default {
  state: {
    list: [],
    filters: {
      nome: null
    }
  },
  mutations: {
    setReserves (state, list) {
      state.list = list
    },
    setFilters (state, filters) {
      state.filters = filters
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
        console.log('Error ao criar reserva: ' + error)
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
    }, reserve) {
      console.log('CANCELRESERVA')
      const result = await ReserveService.cancelReserve(
        reserve
      )
      return result
    },
    async reservesByDate ({
      commit
    }, payload) {
      console.log('RESERVASBYDATE')
      const result = await ReserveService.reservesByDate(
        payload
      )
      return result.data
    },
    setFilters ({
      commit
    }, filters) {
      commit('setFilters', {
        ...filters
      })
    }
  }
}

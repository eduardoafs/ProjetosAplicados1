import {
  SpaceService
} from '../services/api.service'

export default {
  state: {
    list: [],
    filters: {
      qtdPessoas: null,
      computadores: null
    }
  },
  mutations: {
    setSpaces (state, list) {
      state.list = list
    },
    setFilters (state, filters) {
      state.filters = filters
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
        console.log('Error ao criar espaco: ' + error)
      }
    },
    setFilters ({
      commit
    }, filters) {
      commit('setFilters', {
        ...filters
      })
    }
  },
  getters: {
    spacesFilted: state => {
      return state.list.filter(space => {
        for (var key in state.filters) {
          // if (state.filters[key] === null) return true
          if (state.filters[key] !== null &&
            (Number.isInteger(space[key]) ? !(space[key] >= state.filters[key]) : !(space[key] === state.filters[key]))) {
            return false
          }
        }
        return true
      })
    }
  }
}

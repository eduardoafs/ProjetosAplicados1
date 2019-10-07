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
    }
  }
}

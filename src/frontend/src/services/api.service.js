import Vue from 'vue'

const ApiService = {
  query (resource, params) {
    console.log(Vue.$axios)
    return Vue.$axios.get(resource, params).catch(error => {
      throw new Error(`[GESAPI] ApiService erro ${error}`)
    })
  },

  get (resource, id) {
    return Vue.$axios.get(`/${resource}/${id}`).catch(error => {
      throw new Error(`[GESAPI] ApiService erro ${error}`)
    })
  },

  post (resource, params) {
    return Vue.$axios.post(resource, params)
  },

  update (resource, id, params) {
    return Vue.$axios.put(`/${resource}/${id}`, params)
  },

  delete (resource, id) {
    return Vue.$axios.delete(`/${resource}/${id}`).catch(error => {
      throw new Error(`[GESAPI] ApiService erro ${error}`)
    })
  }

}

export default ApiService

export const SpaceService = {
  query (params) {
    return ApiService.query('espacos', {
      params
    })
  },
  get (id) {
    return ApiService.get('espacos', id)
  },
  create (params) {
    return ApiService.post('espacos', params)
  },
  update (id, params) {
    return ApiService.update('espacos', id, params)
  },
  delete (id) {
    return ApiService.delete('espacos', id)
  }
}

export const ReserveService = {
  query (params) {
    return ApiService.query('reserva', {
      params
    })
  },
  get (id) {
    return ApiService.get('reserva', id)
  },
  create (params) {
    return ApiService.post('reserva', params)
  },
  update (id, params) {
    return ApiService.update('reserva', id, params)
  },
  delete (id) {
    return ApiService.delete('reserva', id)
  }
}

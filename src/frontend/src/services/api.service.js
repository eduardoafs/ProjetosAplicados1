import Vue from 'vue'

const ApiService = {
  query (resource, params) {
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
    return Vue.$axios.put(`/${resource}`, params)
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
    return ApiService.query('reservas', {
      params
    })
  },
  get (id) {
    return ApiService.get('reservas', id)
  },
  create (params) {
    console.log('reserva = ' + params)
    return ApiService.post('reservas', params)
  },
  update (id, params) {
    return ApiService.update('reservas/update', id, params)
  },
  delete (id) {
    return ApiService.delete('reservas', id)
  },
  getReservesPendences () {
    return ApiService.query('reservas/pendentes')
  },
  getReservesApproved () {
    return ApiService.query('reservas/aprovadas')
  },
  approveReserve (params) {
    return ApiService.update('reservas/aprovar/?id=' +
      params.id, params)
  },
  cancelReserve (params) {
    return ApiService.update('reservas/cancelar/?id=' +
      params.id + '&justificativa=' + params.justificativa, params)
  },
  reservesByDate (params) {
    return ApiService.query('reservas/date/?date=' + params.date, params)
  }
}

export const UsersService = {
  query (params) {
    return ApiService.query('usuarios', {
      params
    })
  },
  get (id) {
    return ApiService.get('usuarios', id)
  },
  create (params) {
    return ApiService.post('usuarios', params)
  },
  update (id, params) {
    return ApiService.update('usuarios', id, params)
  },
  delete (id) {
    return ApiService.delete('usuarios', id)
  }
}

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
    return Vue.$axios.put(`/${resource}/${id}`, params)
  },

  delete (resource, id) {
    return Vue.$axios.delete(`/${resource}/${id}`).catch(error => {
      throw new Error(`[GESAPI] ApiService erro ${error}`)
    })
  }

}

export default ApiService

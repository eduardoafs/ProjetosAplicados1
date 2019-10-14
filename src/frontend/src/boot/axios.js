import axios from 'axios'

const config = {
  baseURL: process.env.baseURL || 'http://ges-pa-i.herokuapp.com/'
}

const _axios = axios.create(config)

export default async ({
  Vue
}) => {
  Vue.$axios = _axios
}

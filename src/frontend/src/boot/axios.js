import axios from 'axios'

const config = {
  // baseURL: process.env.baseURL || 'https://ges-pai.herokuapp.com/'
  baseURL: process.env.baseURL || 'http://localhost:8090/'
}

const _axios = axios.create(config)

export default async ({
  Vue
}) => {
  Vue.$axios = _axios
}

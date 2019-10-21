import axios from 'axios'

const config = {
  baseURL: process.env.baseURL || 'http://localhost:8080/'
}

const _axios = axios.create(config)

export default async ({
  Vue
}) => {
  Vue.$axios = _axios
}

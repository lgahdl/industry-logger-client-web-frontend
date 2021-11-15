import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_ROOT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

httpClient.interceptors.request.use(async request => {
  const req = request
  return req
})

export default httpClient
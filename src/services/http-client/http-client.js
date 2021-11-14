import axios from 'axios'
import Vue from 'vue'

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_ROOT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

httpClient.interceptors.request.use(async request => {
  const req = request
  const accessToken = Vue.$cookies.get('accessToken')
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`
  }
  return req
})

export default httpClient
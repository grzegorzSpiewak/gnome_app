import axios from 'axios'

const baseURL = 'http://master.datasource.jazzy-hr.jzapp.io/api/v1/'

const api = axios.create({
  baseURL,
  timeout: 2000,
})

export const getGnomes = (params = {}) => api.get('/gnomes', { params })
export const patchGnome = (id, payload = {}) => api.patch(`/gnomes/${id}`, payload)

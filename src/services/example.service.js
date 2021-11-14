import httpClient from './http-client/telos.http-client'

const baseUrl = 'user'

export default class UserService {
  static async findMe() {
    const { data } = await httpClient.get([baseUrl, 'me'].join('/'))
    return data
  }

  static async create(user) {
    const { data } = await httpClient.post(baseUrl, user)
    return data
  }

  static async update(id, user) {
    const { data } = await httpClient.patch([baseUrl, id].join('/'), user)
    return data
  }

  static async softDelete(id) {
    const { data } = await httpClient.delete([baseUrl, id].join('/'))
    return data
  }
}
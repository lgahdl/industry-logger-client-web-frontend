import httpClient from './http-client/http-client'

const baseUrl = 'device-info'
export default class DeviceInfoService {
  static async findByMacAddress(macAddress, initialDate, finalDate) {
    const { data } = await httpClient.get([baseUrl, macAddress].join('/'), { params: { initialDate, finalDate } })
    return data
  }
}
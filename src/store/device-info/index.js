import DeviceInfoService from '@/services/device-info.service'

export default {
  namespaced: true,
  state: {
    deviceInfo: null,
  },
  getters: {
    deviceInfo(state) {
      return state.deviceInfo
    },
  },
  mutations: {
    SET_DEVICE_INFO(state, deviceInfo) {
      state.deviceInfo = deviceInfo
    },
  },
  actions: {
    async findByMacAddress(ctx, { macAddress, initialDate, finalDate }) {
      const { commit } = ctx
      const deviceInfo = await DeviceInfoService.findByMacAddress(macAddress, initialDate, finalDate)
      commit('SET_DEVICE_INFO', deviceInfo)
      return deviceInfo
    },
  },
}
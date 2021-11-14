import SdgIndicatorAdapter from '@/adapters/sdg-indicator.adapter'
import SdgIndicatorService from '@/services/sdg-indicator.service'

export default {
  namespaced: true,
  state: {
    sdgIndicators: [],
    pagination: {
      total: 0,
      page: 1,
      limit: 3,
      search: '',
    },
  },
  getters: {
    sdgIndicators(state) {
      return state.sdgIndicators
    },
    pagination(state) {
      return state.pagination
    },
  },
  mutations: {
    SET_SDG_INDICATORS(state, sdgIndicators) {
      state.sdgIndicators = sdgIndicators
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = { ...state.pagination, ...pagination }
    },
  },
  actions: {
    async findAll(ctx, pagination) {
      const { commit } = ctx
      const { page, limit, search } = pagination
      const response = await SdgIndicatorService.findAll(page, limit, search)
      const sdgIndicators = response.data.map(s => SdgIndicatorAdapter.toDisplay(s))
      commit('SET_PAGINATION', response.pagination)
      commit('SET_SDG_INDICATORS', sdgIndicators)
      return sdgIndicators
    },
  },
}
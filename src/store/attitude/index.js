import AttitudeAdapter from '@/adapters/attitude.adapter'
import AttitudeService from '@/services/attitude.service'

export default {
  namespaced: true,
  state: {
    attitudes: [],
    pagination: {
      total: 0,
      page: 1,
      limit: 20,
      search: '',
    },
  },
  getters: {
    attitudes(state) {
      return state.attitudes
    },
    pagination(state) {
      return state.pagination
    },
  },
  mutations: {
    SET_ATTITUDES(state, attitudes) {
      state.attitudes = attitudes
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = { ...state.pagination, ...pagination }
    },
  },
  actions: {
    async findAll(ctx, pagination) {
      const { commit } = ctx
      const { page, limit, search } = pagination
      const response = await AttitudeService.findAll(page, limit, search)
      const attitudes = response.data.map(s => AttitudeAdapter.toDisplay(s))
      commit('SET_PAGINATION', response.pagination)
      commit('SET_ATTITUDES', attitudes)
      return attitudes
    },
  },
}
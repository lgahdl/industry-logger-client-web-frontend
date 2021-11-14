import TechniqueAdapter from '@/adapters/technique.adapter'
import TechniqueService from '@/services/technique.service'

export default {
  namespaced: true,
  state: {
    techniques: [],
    pagination: {
      total: 0,
      page: 1,
      limit: 3,
      search: '',
    },
  },
  getters: {
    techniques(state) {
      return state.techniques
    },
    pagination(state) {
      return state.pagination
    },
  },
  mutations: {
    SET_TECHNIQUES(state, techniques) {
      state.techniques = techniques
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = { ...state.pagination, ...pagination }
    },
  },
  actions: {
    async findAll(ctx, pagination) {
      const { commit } = ctx
      const { page, limit, search } = pagination
      const response = await TechniqueService.findAll(page, limit, search)
      const techniques = response.data.map(s => TechniqueAdapter.toDisplay(s))
      commit('SET_PAGINATION', response.pagination)
      commit('SET_TECHNIQUES', techniques)
      return techniques
    },
  },
}
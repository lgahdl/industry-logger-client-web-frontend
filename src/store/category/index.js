import CategoryAdapter from '@/adapters/category.adapter'
import CategoryService from '@/services/category.service'

export default {
  namespaced: true,
  state: {
    categories: [],
    pagination: {
      total: 0,
      page: 1,
      limit: 20,
      search: '',
    },
  },
  getters: {
    categories(state) {
      return state.categories
    },
    pagination(state) {
      return state.pagination
    },
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = pagination
    },
  },
  actions: {
    async findAll(ctx, pagination) {
      const { commit } = ctx
      const { page, limit, search } = pagination
      const response = await CategoryService.findAll(page, limit, search)
      const categories = response.data.map(s => CategoryAdapter.toDisplay(s))
      commit('SET_PAGINATION', response.pagination)
      commit('SET_CATEGORIES', categories)
      return categories
    },
  },
}
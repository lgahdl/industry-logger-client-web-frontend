import SkillAdapter from '@/adapters/skill.adapter'
import SkillService from '@/services/skill.service'

export default {
  namespaced: true,
  state: {
    skills: [],
    pagination: {
      total: 0,
      page: 1,
      limit: 3,
      search: '',
    },
  },
  getters: {
    skills(state) {
      return state.skills
    },
    pagination(state) {
      return state.pagination
    },
  },
  mutations: {
    SET_SKILLS(state, skills) {
      state.skills = skills
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = { ...state.pagination, ...pagination }
    },
  },
  actions: {
    async findAll(ctx, pagination) {
      const { commit } = ctx
      const { page, limit, search } = pagination
      const response = await SkillService.findAll(page, limit, search)
      const skills = response.data.map(s => SkillAdapter.toDisplay(s))
      commit('SET_PAGINATION', response.pagination)
      commit('SET_SKILLS', skills)
      return skills
    },
  },
}
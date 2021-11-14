import LevelAdapter from '@/adapters/level.adapter'
import LevelService from '@/services/level.service'
import i18n from '@/libs/i18n'

export default {
  namespaced: true,
  state: {
    levels: [],
    selectedLevel: {
      languages: {
        [i18n.locale]: {
          title: '',
        },
      },
      contents: [],
    },
    pagination: {
      total: 0,
      page: 1,
      limit: 20,
      search: '',
    },
  },
  getters: {
    levels(state) {
      return state.levels
    },
    selectedLevel(state) {
      return state.selectedLevel
    },
    pagination(state) {
      return state.pagination
    },
    slugs(state) {
      return state.levels.map(({ slug }) => slug)
    },
  },
  mutations: {
    SET_LEVELS(state, levels) {
      state.levels = levels
    },
    SET_SELECTED_LEVEL(state, level) {
      state.selectedLevel = level
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = pagination
    },
    SAVE_LEVEL(state, level) {
      state.levels.push(level)
    },
    UPDATE_LEVEL(state, edited) {
      const index = state.levels.findIndex(level => level.id === edited.id)
      if (index > -1) {
        Object.assign(state.levels[index], edited)
      }
    },
    DELETE_LEVEL(state, id) {
      const index = state.levels.findIndex(level => level.id === id)
      if (index > -1) {
        state.levels.splice(index, 1)
      }
    },
  },
  actions: {
    async findBySeriesId(ctx, { seriesId, pagination }) {
      const { commit } = ctx
      const { page, limit, search } = pagination
      const response = await LevelService.findBySeriesId(seriesId, page, limit, search)
      const levels = response.data.map(s => LevelAdapter.convertToDisplayFormat(s))
      commit('SET_PAGINATION', response.pagination)
      commit('SET_LEVELS', levels)
      return levels
    },
    async findById(ctx, id) {
      const { commit } = ctx
      const level = await LevelService.findById(id)
      const readyToDisplayLevel = LevelAdapter.convertToDisplayFormat(level)
      commit('SET_SELECTED_LEVEL', readyToDisplayLevel)
      commit('UPDATE_LEVEL', readyToDisplayLevel)
      return readyToDisplayLevel
    },
    async create(ctx, level) {
      const { commit } = ctx
      const response = await LevelService.create(level)
      const savedLevel = LevelAdapter.convertToDisplayFormat(response)
      commit('SAVE_LEVEL', savedLevel)
      return savedLevel
    },
    async update(ctx, { id, level }) {
      const { commit } = ctx
      const response = await LevelService.update(id, level)
      const editedLevel = LevelAdapter.convertToDisplayFormat(response)
      commit('UPDATE_LEVEL', editedLevel)
      return editedLevel
    },
    async softDelete(ctx, id) {
      const { commit } = ctx
      await LevelService.softDelete(id)
      commit('DELETE_LEVEL', id)
    },
  },
}
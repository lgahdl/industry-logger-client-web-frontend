import ContentAdapter from '@/adapters/content.adapter'
import ContentService from '@/services/content.service'

export default {
  namespaced: true,
  state: {
    contents: [],
    pagination: {
      search: '',
      page: 1,
      limit: 30,
    },
  },
  getters: {
    contents(state) {
      return state.contents
    },
    pagination(state) {
      return state.pagination
    },
    slugs(state) {
      return state.contents.map(({ slug }) => slug)
    },
  },
  mutations: {
    SET_CONTENTS(state, contents) {
      state.contents = contents
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = pagination
    },
    SAVE_CONTENT(state, content) {
      state.contents.push(content)
    },
    UPDATE_CONTENT(state, content) {
      const index = state.contents.findIndex(ctt => ctt.id === content.id)
      Object.assign(state.contents[index], content)
    },
    DELETE_CONTENT(state, id) {
      const index = state.contents.findIndex(ctt => ctt.id === id)
      state.contents.splice(index, 1)
    },
  },
  actions: {
    async findByLevelId(ctx, levelId) {
      const { commit } = ctx
      const contents = await ContentService.findByLevelId(levelId)
      commit('SET_CONTENTS', contents.map(content => ContentAdapter.convertToDisplayFormat(content)))
      return contents
    },
    async create(ctx, content) {
      const { commit } = ctx
      const saved = await ContentService.create(content)
      commit('SAVE_CONTENT', saved)
      return saved
    },
    async update(ctx, { id, content }) {
      const { commit } = ctx
      const updated = await ContentService.update(id, content)
      commit('UPDATE_CONTENT', updated)
      return updated
    },
    async softDelete(ctx, id) {
      const { commit } = ctx
      await ContentService.softDelete(id)
      commit('DELETE_CONTENT', id)
    },
  },
}
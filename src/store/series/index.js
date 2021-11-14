import SeriesAdapter from '@/adapters/series.adapter'
import SeriesService from '@/services/series.service'

export default {
  namespaced: true,
  state: {
    series: [],
    selectedSeries: {
      languages: {
        'pt-br': {
          title: '',
        },
      },
    },
    seriesSecondInstance: [],
    pagination: {
      total: 0,
      page: 1,
      limit: 10,
      search: '',
    },
  },
  getters: {
    series(state) {
      return state.series
    },
    pagination(state) {
      return state.pagination
    },
    selectedSeries(state) {
      return state.selectedSeries
    },
    seriesSecondInstance(state) {
      return state.seriesSecondInstance
    },
  },
  mutations: {
    SET_SERIES(state, series) {
      state.series = series
    },
    SET_SERIES_SECOND_INSTANCE(state, series) {
      state.seriesSecondInstance = series
    },
    SET_SELECTED_SERIES(state, selectedSeries) {
      state.selectedSeries = selectedSeries
    },
    SAVE_SERIES(state, createdSeries) {
      state.pagination.total += 1
      if (state.series.length < state.pagination.limit) {
        state.series.push(createdSeries)
      }
    },
    UPDATE_SERIES(state, updatedSeries) {
      const index = state.series.findIndex(singleSeries => singleSeries.id === updatedSeries.id)
      if (index !== -1) {
        Object.assign(state.series[index], updatedSeries)
      }
    },
    DELETE_SERIES(state, id) {
      const index = state.series.findIndex(singleSeries => singleSeries.id === id)
      state.series.splice(index, 1)
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = { ...state.pagination, ...pagination }
    },
  },
  actions: {
    async findAll(ctx, {
      page, limit, search, instance,
    }) {
      const { commit } = ctx
      const response = await SeriesService.findAll(page, limit, search)
      const series = response.data.map(s => SeriesAdapter.convertToDisplayFormat(s))
      if (!instance || instance <= 1) {
        commit('SET_PAGINATION', response.pagination)
        commit('SET_SERIES', series)
      } else if (instance === 2) {
        commit('SET_SERIES_SECOND_INSTANCE', series)
      }
      return series
    },
    async create(ctx, series) {
      const { commit } = ctx
      const savedSeries = await SeriesService.create(SeriesAdapter.convertToApiFormat(series))
      const savedSeriesReadyToDisplay = SeriesAdapter.convertToDisplayFormat(savedSeries)
      commit('SAVE_SERIES', savedSeriesReadyToDisplay)
      return savedSeriesReadyToDisplay
    },
    async update(ctx, { id, series }) {
      const { commit } = ctx
      const savedSeries = await SeriesService.update(id, SeriesAdapter.convertToApiFormat(series))
      const savedSeriesReadyToDisplay = SeriesAdapter.convertToDisplayFormat(savedSeries)
      commit('UPDATE_SERIES', savedSeriesReadyToDisplay)
      return savedSeriesReadyToDisplay
    },
    async softDelete(ctx, id) {
      const { commit } = ctx
      await SeriesService.softDelete(id)
      commit('DELETE_SERIES', id)
      return true
    },
    async findById(ctx, id) {
      const { commit } = ctx
      const series = await SeriesService.findOne(id)
      const seriesReadyToDisplay = SeriesAdapter.convertToDisplayFormat(series)
      commit('UPDATE_SERIES', seriesReadyToDisplay)
      commit('SET_SELECTED_SERIES', seriesReadyToDisplay)
      return series
    },
  },
}
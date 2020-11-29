import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters: {},
    energy: null,
    loading: false,
    temperatureSmall: null
  },
  mutations: {
    SET_FILTERS (state, data) {
      state.filters = data
    },
    SET_ENERGY (state, data) {
      state.energy = data
    },
    SET_LOADING (state, data) {
      state.loading = data
    },
    SET_TEMPERATURE_SMALL (state, data) {
      state.temperatureSmall = data
    }
  },
  actions: {
  },
  modules: {
  }
})

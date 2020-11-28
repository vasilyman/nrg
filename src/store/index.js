import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters: {},
    energy: null
  },
  mutations: {
    SET_FILTERS (state, data) {
      state.filters = data
    },
    SET_ENERGY (state, data) {
      state.energy = data
    }
  },
  actions: {
  },
  modules: {
  }
})

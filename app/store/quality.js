
export const state = () => ({
  qualities: []
})

export const getters = {
  qualities: (state) => state.qualities
}

export const mutations = {
  setQualities(state, { qualities }) {
    state.qualities = qualities
  }
}

export const actions = {
  async fetchQualities({ commit }) {
    const response = await this.$axios.$get('/api/v1/qualities')
    const qualities = response.data
    commit('setQualities', { qualities })
  }
}

export const state = () => ({
  qualities: [],
  quality: []
})

export const getters = {
  qualities: (state) => state.qualities,
  quality: (state) => state.quality
}

export const mutations = {
  setQualities(state, { qualities }) {
    state.qualities = qualities
  },
  setQuality(state, { quality }) {
    state.quality = quality
  }
}

export const actions = {
  async fetchQualities({ commit }) {
    const response = await this.$axios.$get('/api/v1/qualities')
    const qualities = response.data
    commit('setQualities', { qualities })
  },
  async fetchQuality({ commit }, { qualityId }) {
    const response = await this.$axios.$get(`/api/v1/qualities/${qualityId}`)
    const quality = response.data
    commit('setQuality', { quality })
  }
}
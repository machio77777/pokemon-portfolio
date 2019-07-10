
export const state = () => ({
  qualities: [],
  quality: [],
  pokemons: []
})

export const getters = {
  qualities: (state) => state.qualities,
  quality: (state) => state.quality,
  pokemons: (state) => state.pokemons
}

export const mutations = {
  setQualities(state, { qualities }) {
    state.qualities = qualities
  },
  setQuality(state, { quality }) {
    state.quality = quality
  },
  setPokemons(state, { pokemons }) {
    state.pokemons = pokemons
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
  },
  async fetchPokemons({ commit }, { qualityId }) {
    const response = await this.$axios.$get(`/api/v1/qualities/${qualityId}/pokemons`)
    const pokemons = response.data
    commit('setPokemons', { pokemons })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
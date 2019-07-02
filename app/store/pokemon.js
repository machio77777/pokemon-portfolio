
export const state = () => ({
  pokemons: [],
  loading: true
})

export const getters = {
  pokemons: (state) => state.pokemons,
  loading: (state) => state.loading
}

export const mutations = {
  setPokemons(state, { pokemons }) {
    state.pokemons = pokemons
  },
  setLoading(state, { loading }) {
    state.loading = loading
  }
}

export const actions = {
  async fetchPokemons({ commit }, { parameters }) {
    commit('setLoading', { loading : true })
    let url = '/api/v1/pokemons'
    if (parameters !== null && parameters !== undefined) {
      url = url + '?' + parameters
    }
    const response = await this.$axios.$get(url)
    const pokemons = response.data
    commit('setPokemons', { pokemons })
    commit('setLoading', { loading : false })
  }
}
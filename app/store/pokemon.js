
export const state = () => ({
  pokemons: []
})

export const getters = {
  pokemons: (state) => state.pokemons
}

export const mutations = {
  setPokemons(state, { pokemons }) {
    state.pokemons = pokemons
  }
}

export const actions = {
  async fetchPokemons({ commit }, { parameters }) {
    let url = '/api/v1/pokemons'
    if (parameters !== null && parameters !== undefined) {
      url = url + '?' + parameters
    }
    const response = await this.$axios.$get(url)
    const pokemons = response.data
    commit('setPokemons', { pokemons })
  }
}
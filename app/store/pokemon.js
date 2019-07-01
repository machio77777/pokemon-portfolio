
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
  async fetchPokemons({ commit }, { generation}) {
    let url = '/api/v1/pokemons'
    if (generation !== null && generation !== undefined) {
      url = url + '?generation=' + generation
    }
    const response = await this.$axios.$get(url)
    const pokemons = response.data
    commit('setPokemons', { pokemons })
  }
}
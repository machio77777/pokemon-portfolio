
export const state = () => ({
  pokemons: [],
  pokemon: []
})

export const getters = {
  pokemons: (state) => state.pokemons,
  pokemon: (state) => state.pokemon
}

export const mutations = {
  setPokemons(state, { pokemons }) {
    state.pokemons = pokemons
  },
  setPokemon(state, { pokemon }) {
    state.pokemon = pokemon
  }
}

export const actions = {
  async fetchPokemons({ commit }, { parameters }) {
    commit('setLoading', { loading : true }, { root : true })
    let url = '/api/v1/pokemons'
    if (parameters !== null && parameters !== undefined) {
      url = url + '?' + parameters
    }
    const response = await this.$axios.$get(url)
    const pokemons = response.data
    commit('setPokemons', { pokemons })
    commit('setLoading', { loading : false }, { root : true })
  },
  async fetchPokemon({ commit }, { zukanNo, subNo }) {
    const response = await this.$axios.$get(`/api/v1/pokemons/${zukanNo}/${subNo}`)
    const pokemon = response.data
    commit('setPokemon', { pokemon })
  }
}
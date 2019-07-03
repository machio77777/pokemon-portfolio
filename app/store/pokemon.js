
export const state = () => ({
  pokemons: [],
  pokemon: [],
  loading: true
})

export const getters = {
  pokemons: (state) => state.pokemons,
  pokemon: (state) => state.pokemon,
  loading: (state) => state.loading
}

export const mutations = {
  setPokemons(state, { pokemons }) {
    state.pokemons = pokemons
  },
  setPokemon(state, { pokemon }) {
    state.pokemon = pokemon
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
  },
  async fetchPokemon({ commit }, { zukanNo, subNo }) {
    const response = await this.$axios.$get(`/api/v1/pokemons/${zukanNo}/${subNo}`)
    const pokemon = response.data
    commit('setPokemon', { pokemon })
  }
}
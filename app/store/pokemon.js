import axiosRetry from "axios-retry";

export const state = () => ({
  pokemons: [],
  pokemon: [],
  skills: []
})

export const getters = {
  pokemons: (state) => state.pokemons,
  pokemon: (state) => state.pokemon,
  skills: (state) => state.skills
}

export const mutations = {
  setPokemons(state, { pokemons }) {
    state.pokemons = pokemons
  },
  setPokemon(state, { pokemon }) {
    state.pokemon = pokemon
  },
  setSkills(state, { skills }) {
    state.skills = skills
  }
}

export const actions = {
  async fetchPokemons({ commit }, { parameters }) {
    // TODO ローデイング処理は別途要考察
    commit('setLoading', { loading : true }, { root : true })
    let url = '/api/v1/pokemons'
    if (parameters !== null && parameters !== undefined) {
      url = url + '?' + parameters
    }
    const response = await this.$axios.$get(url)
    const pokemons = response.data
    commit('setPokemons', { pokemons })
    // TODO ローデイング処理は別途要考察
    commit('setLoading', { loading : false }, { root : true })
  },
  async fetchPokemon({ commit }, { zukanNo, subNo }) {
    const response = await this.$axios.$get(`/api/v1/pokemons/${zukanNo}/${subNo}`)
    const pokemon = response.data
    commit('setPokemon', { pokemon })
  },
  async fetchSkills({ commit }, { zukanNo, subNo, query }) {
    if (query !== null) {
      commit('setLoading', { loading : true }, { root : true })
    }
    let url = `/api/v1/pokemons/${zukanNo}/${subNo}/skills`
    if (query !== null && query !== 'all') {
      url = url + `?${query}`
    }
    const response = await this.$axios.$get(url)
    const skills = response.data
    commit('setSkills', { skills })
    if (query !== null) {
      commit('setLoading', { loading : false }, { root : true })
    }
  }
}
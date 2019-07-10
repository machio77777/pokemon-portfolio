
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
    const response = await this.$axios.$get(`/api/v1/ranking/${parameters}`)
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

export const state = () => ({
    characters: []
  })
  
  export const getters = {
    characters: (state) => state.characters
  }
  
  export const mutations = {
    setCharacters(state, { characters }) {
      state.characters = characters
    }
  }
  
  export const actions = {
    async fetchCharacters({ commit }) {
      const response = await this.$axios.$get(`/api/v1/character`)
      const characters = response.data
      commit('setCharacters', { characters })
    }
  }
  
  export default {
    state,
    getters,
    mutations,
    actions
  }

export const state = () => ({
  skills: [],
  skill: [],
  pokemons: []
})

export const getters = {
  skills: (state) => state.skills,
  skill: (state) => state.skill,
  pokemons: (state) => state.pokemons
}

export const mutations = {
  setSkills(state, { skills }) {
    state.skills = skills
  },
  setSkill(state, { skill }) {
    state.skill = skill
  },
  setPokemons(state, { pokemons }) {
    state.pokemons = pokemons
  }
}

export const actions = {
  async fetchSkills({ commit }, { query }) {
    let url = '/api/v1/skills'
    if (query !== null) {
      url = url + `?${query}` 
    }
    const response = await this.$axios.$get(url)
    const skills = response.data
    commit('setSkills', { skills })
  },
  async fetchSkill({ commit }, { skillId }) {
    const response = await this.$axios.$get(`/api/v1/skills/${skillId}`)
    const skill = response.data
    commit('setSkill', { skill })
  },
  async fetchPokemons({ commit }, { skillId }) {
    const response = await this.$axios.$get(`/api/v1/skills/${skillId}/pokemons`)
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
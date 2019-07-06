
export const state = () => ({
  skills: [],
  skill: []
})

export const getters = {
  skills: (state) => state.skills,
  skill: (state) => state.skill
}

export const mutations = {
  setSkills(state, { skills }) {
    state.skills = skills
  },
  setSkill(state, { skill }) {
    state.skill = skill
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
  }
}
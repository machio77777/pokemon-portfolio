
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
  async fetchSkills({ commit }) {
    const response = await this.$axios.$get('/api/v1/skills')
    const skills = response.data
    commit('setSkills', { skills })
  },
  async fetchSkill({ commit }, { skillId }) {
    const response = await this.$axios.$get(`/api/v1/skills/${skillId}`)
    const skill = response.data
    commit('setSkill', { skill })
  }
}
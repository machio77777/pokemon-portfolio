
export const state = () => ({
  skills: []
})

export const getters = {
  skills: (state) => state.skills
}

export const mutations = {
  setSkills(state, { skills }) {
    state.skills = skills
  }
}

export const actions = {
  async fetchSkills({ commit }) {
    const response = await this.$axios.$get('/api/v1/skills')
    const skills = response.data
    commit('setSkills', { skills })
  }
}
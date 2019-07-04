
export const state = () => ({
  loading: true
})

export const getters = {
  loading: (state) => state.loading
}

export const mutations = {
  setLoading(state, { loading }) {
    state.loading = loading
  }
}

export const actions = {
  async init({ commit }) {
    commit('setLoading', { loading : false })
  }
}
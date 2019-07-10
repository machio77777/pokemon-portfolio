
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
  async fetchPokemons({ commit }, { zukanNo, subNo }) {
    //const response = await this.$axios.$get(`/api/v1//pokemons/${zukanNo}/${subNo}/soldiers`)
    //const pokemons = response.data
    const pokemons = [
      {zukanNo : 1, subNo : 1, name : 'フシギダネ', soldierId : 1, personality: 'いじっぱり', title : 'AS特化型'},
      {zukanNo : 2, subNo : 1, name : 'フシギソウ', soldierId : 2, personality: 'しんちょう', title : 'AS特化型'},
      {zukanNo : 3, subNo : 1, name : 'フシギバナ', soldierId : 3, personality: 'おだやか', title : 'AS特化型'},
      {zukanNo : 4, subNo : 1, name : 'ヒトカゲ',   soldierId : 4, personality: 'ずぶとい', title : 'AS特化型'},
      {zukanNo : 5, subNo : 1, name : 'リザード',   soldierId : 5, personality: 'ひかえめ', title : 'AS特化型'},
      {zukanNo : 6, subNo : 1, name : 'リザードン', soldierId : 6, personality: 'おくびょう', title : 'AS特化型'},
      {zukanNo : 7, subNo : 1, name : 'ゼニガメ',   soldierId : 7, personality: 'いじっぱり', title : 'AS特化型'},
      {zukanNo : 8, subNo : 1, name : 'カメール',   soldierId : 8, personality: 'ようき', title : 'AS特化型'},
      {zukanNo : 2, subNo : 1, name : 'カメックス', soldierId : 9, personality: 'なまいき', title : 'AS特化型'},
    ]
    commit('setPokemons', { pokemons })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
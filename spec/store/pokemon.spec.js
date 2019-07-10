import Vuex from 'vuex'
import pokemon, { state } from '../../app/store/pokemon'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/pokemon.js', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(pokemon))
  })

  describe('mutations', () => {
    test('setPokemons test', () => {
      expect(store.getters['pokemons']).toStrictEqual([])
      const pokemons = [{zukanNo:1, name:'フシギダネ'}]
      store.commit('setPokemons', { pokemons })
      expect(store.getters['pokemons']).toStrictEqual([{zukanNo:1, name:'フシギダネ'}])
    }),
    test('setPokemon test', () => {
      expect(store.getters['pokemon']).toStrictEqual([])
      const pokemon = {zukanNo:1, name:'フシギダネ'}
      store.commit('setPokemon', { pokemon })
      expect(store.getters['pokemon']).toStrictEqual({zukanNo:1, name:'フシギダネ'})
    }),
    test('setSkills test', () => {
      expect(store.getters['pokemon']).toStrictEqual([])
      const skills = {skillId:1, name:'アームハンマー'}
      store.commit('setSkills', { skills })
      expect(store.getters['skills']).toStrictEqual({skillId:1, name:'アームハンマー'})
    })
  })

})
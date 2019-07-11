<template>
  <div class="main-container">
    <div>
      <table>
        <tr>
          <th>prefix</th>
          <td><input id="prefix" type="text" value="" /></td>
        </tr>
        <tr>
          <th>図鑑No</th>
          <td>
            <select name="" id="">
              <option v-for="pokemon in pokemons" :key="pokemon.zukanNo + pokemon.subNo">
                {{pokemon.zukanNo}}
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <th>明細No</th>
          <td></td>
        </tr>
        <tr>
          <th>名前</th>
          <td></td>
        </tr>
        <tr>
          <th>性格</th>
          <td>
            <select name="" id="">
              <option v-for="character in characters" :key="character.charId">
                {{character.name}}
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <th>特性</th>
          <td></td>
        </tr>
        <tr>
          <th>技1</th>
          <td></td>
        </tr>
        <tr>
          <th>技2</th>
          <td></td>
        </tr>
        <tr>
          <th>技3</th>
          <td></td>
        </tr>
        <tr>
          <th>技4</th>
          <td></td>
        </tr>
        <tr>
          <th>努力値-HP</th>
          <td></td>
        </tr>
        <tr>
          <th>努力値-AT</th>
          <td></td>
        </tr>
        <tr>
          <th>努力値-DF</th>
          <td></td>
        </tr>
        <tr>
          <th>努力値-SA</th>
          <td></td>
        </tr>
        <tr>
          <th>努力値-SD</th>
          <td></td>
        </tr>
        <tr>
          <th>努力値-SP</th>
          <td></td>
        </tr>
        <tr>
          <th>実数値-HP</th>
          <td></td>
        </tr>
        <tr>
          <th>実数値-AT</th>
          <td></td>
        </tr>
        <tr>
          <th>実数値-DF</th>
          <td></td>
        </tr>
        <tr>
          <th>実数値-SA</th>
          <td></td>
        </tr>
        <tr>
          <th>実数値-SD</th>
          <td></td>
        </tr>
        <tr>
          <th>実数値-SP</th>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ store }) {
    await store.dispatch('pokemon/fetchPokemons', { parameters : null })
    await store.dispatch('fetchCharacters')
  },
  computed: {
    ...mapGetters({ 
      'pokemons' : 'pokemon/pokemons', 
      'characters' : 'characters' 
    })
  },
}
</script>

<style scoped>
</style>

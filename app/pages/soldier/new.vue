<template>
  <div class="main-container">
    <h2>育成済みポケモン登録</h2>
    <div id="pokemon">
      <div class="item">
        <h3>基本情報</h3>
        <ul>
          <li>名前</li>
          <li>
            <select id="zukanNo" style="width:230px;">
              <option v-for="pokemon in pokemons" :key="pokemon.zukanNo + pokemon.subNo" :value="pokemon.zukanNo+'-'+pokemon.subNo+'-'+pokemon.name">
                {{pokemon.zukanNo}} : {{pokemon.name}}
              </option>
            </select>
          </li>
          <li>特性</li>
          <li>
            <select id="quality" style="width:120px;">
              <option :value="pokemon.qualityId1+'-'+pokemon.quality1">{{pokemon.quality1}}</option>
              <option v-if="pokemon.quality2 !== null" :value="pokemon.qualityId2+'-'+pokemon.quality2">{{pokemon.quality2}}</option>
              <option v-if="pokemon.dreamQuality !== null" :value="pokemon.dreamQualityId+'-'+pokemon.dreamQuality">{{pokemon.dreamQuality}}</option>
            </select>
          </li>
          <li>性格</li>
          <li>
            <select name="" id="">
              <option v-for="character in characters" :key="character.charId">
                {{character.name}}
              </option>
            </select>
          </li>
        </ul>
      </div>
      <div class="item">
        <h3>覚えさせる技</h3>
        <ul>
          <li>技1</li>
          <li>
            <select id="skill1">
              <option v-for="skill in skills" :key="skill.skillId" :value="skill.skillId">
                {{skill.skillName}}
              </option>
            </select>
          </li>
          <li>技2</li>
          <li>
            <select id="skill2">
              <option v-for="skill in skills" :key="skill.skillId" :value="skill.skillId">
                {{skill.skillName}}
              </option>
            </select>
          </li>
          <li>技3</li>
          <li>
            <select id="skill3">
              <option v-for="skill in skills" :key="skill.skillId" :value="skill.skillId">
                {{skill.skillName}}
              </option>
            </select>
          </li>
          <li>技4</li>
          <li>
            <select id="skill4">
              <option v-for="skill in skills" :key="skill.skillId" :value="skill.skillId">
                {{skill.skillName}}
              </option>
            </select>
          </li>
        </ul>
      </div>
      <div class="item">
        <h3>努力値</h3>
        <ul>
          <li>HP</li>
          <li>
            <select id="dhp" style="width:50px;">
              <option value="">-</option>
            </select>
          </li>
          <li>AT</li>
          <li>
            <select id="dat" style="width:50px;">
              <option value="">-</option>
            </select>
          </li>
          <li>DF</li>
          <li>
            <select id="ddf" style="width:50px;">
              <option value="">-</option>
            </select>
          </li>
          <li>SA</li>
          <li>
            <select id="dsa" style="width:50px;">
              <option value="">-</option>
            </select>
          </li>
          <li>SD</li>
          <li>
            <select id="dsd" style="width:50px;">
              <option value="">-</option>
            </select>
          </li>
          <li>SP</li>
          <li>
            <select id="dsp" style="width:50px;">
              <option value="">-</option>
            </select>
          </li>
        </ul>
      </div>
      <div class="item">
        <h3>実数値</h3>
        <ul>
          <li>HP</li>
          <li>
            <input type="text" id="rhp" class="real-val" value="" readonly />
          </li>
          <li>AT</li>
          <li>
            <input type="text" id="rat" class="real-val" value="" readonly />
          </li>
          <li>DF</li>
          <li>
            <input type="text" id="rdf" class="real-val" value="" readonly />
          </li>
          <li>SA</li>
          <li>
            <input type="text" id="rsa" class="real-val" value="" readonly />
          </li>
          <li>SD</li>
          <li>
            <input type="text" id="rsd" class="real-val" value="" readonly />
          </li>
          <li>SP</li>
          <li>
            <input type="text" id="rsp" class="real-val" value="" readonly />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ store }) {
    //await store.dispatch('pokemon/fetchPokemons', { parameters : null })
    //await store.dispatch('pokemon/fetchPokemon', { zukanNo : 1, subNo : 1 })
    //await store.dispatch('pokemon/fetchSkills', { zukanNo : 1, subNo : 1, query : null})
    //await store.dispatch('fetchCharacters')
  },
  computed: {
    ...mapGetters({ 
      'pokemons' : 'pokemon/pokemons',
      'pokemon' : 'pokemon/pokemon', 
      'skills' : 'pokemon/skills',
      'characters' : 'characters'
    })
  },
}
</script>

<style scoped>
.main-container {
  padding: 30px 50px;
}
#pokemon {
  width: 900px;
  margin: 25px auto;
}
.item {
  margin: 20px 0;
}
.item h3 {
  margin-bottom: 20px;
}
li {
  margin-right: 5px;
  display: inline-block;
}
.real-val {
  width: 60px;
}
.real-val:read-only {
  background-color: #f5f5f5;
}
</style>

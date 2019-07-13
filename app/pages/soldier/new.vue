<template>
  <div class="main-container">
    <div id="pokemon">
      <div class="item">
        <p><input type="text" placeholder="ポケモンの名前を入力してください" :value=searchVal style="width:200px;" /></p>
        <p><button type="button" @click="search()">検索</button></p>
      </div>
      <div v-show="loading" class="loader"></div>
      <div v-show="!loading" class="item">
        <ul style="margin-bottom: 20px;">
          <li class="column">名前</li>
          <li>
            <select id="zukanNo" :disabled="disabled" style="margin-right: 40px;">
              <option v-for="pokemon in pokemons" :key="pokemon.zukanNo + pokemon.subNo" :value="pokemon.zukanNo+'-'+pokemon.subNo+'-'+pokemon.name">
                {{pokemon.zukanNo}} : {{pokemon.name}}
              </option>
            </select>
          </li>
          <li class="column">特性</li>
          <li>
            <select id="quality" :disabled="disabled">
              <option :value="pokemon.qualityId1+'-'+pokemon.quality1">{{pokemon.quality1}}</option>
              <option v-if="pokemon.quality2 !== null" :value="pokemon.qualityId2+'-'+pokemon.quality2">{{pokemon.quality2}}</option>
              <option v-if="pokemon.dreamQuality !== null" :value="pokemon.dreamQualityId+'-'+pokemon.dreamQuality">{{pokemon.dreamQuality}}</option>
            </select>
          </li>
        </ul>
        <ul>
          <li class="column">技1</li>
          <li>
            <select id="skill1" :disabled="disabled" style="margin-right: 40px;">
              <option v-for="skill in skills" :key="skill.skillId" :value="skill.skillId">
                {{skill.skillName}}
              </option>
            </select>
          </li>
          <li class="column">技2</li>
          <li style="margin-right: 20px;">
            <select id="skill2" :disabled="disabled">
              <option v-for="skill in skills" :key="skill.skillId" :value="skill.skillId">
                {{skill.skillName}}
              </option>
            </select>
          </li>
        </ul>
        <ul style="margin-bottom: 10px;">
          <li class="column">技3</li>
          <li style="margin-right: 20px;">
            <select id="skill3" :disabled="disabled" style="margin-right: 40px;">
              <option v-for="skill in skills" :key="skill.skillId" :value="skill.skillId">
                {{skill.skillName}}
              </option>
            </select>
          </li>
          <li class="column">技4</li>
          <li>
            <select id="skill4" :disabled="disabled">
              <option v-for="skill in skills" :key="skill.skillId" :value="skill.skillId">
                {{skill.skillName}}
              </option>
            </select>
          </li>
        </ul>
      </div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ store }) {
  },
  data() {
    return {
      loading   : false,
      searchVal : '',
      disabled : true
    }
  },
  computed: {
    ...mapGetters({ 
      'pokemons' : 'pokemon/pokemons',
      'pokemon' : 'pokemon/pokemon', 
      'skills' : 'pokemon/skills',
      'characters' : 'characters'
    })
  },
  methods: {
    async search() {
      alert('hello world')
    }
  }
}
</script>

<style scoped>
#pokemon {
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: solid 1px;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.item {
  margin: 10px 0;
  padding: 20px;
  border-bottom: solid 1px #c0c0c0;
}
.item p {
  margin: 10px 0;
}
li {
  display: table-cell;
  padding: 5px 0;
}
.column {
  width: 50px;
}
</style>

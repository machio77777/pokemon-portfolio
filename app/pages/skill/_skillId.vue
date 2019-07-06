<template>
  <div class="main-container">
    <div id="skill">
      <div class="item">
        <div>技名</div>
        <div>{{ skill.skillName }}</div>
        <div>タイプ</div>
        <div>{{ skill.typeName }}</div>
        <div>分類</div>
        <div>{{ skill.classification }}</div>
      </div>
      <div class="item">
        <div>威力</div>
        <div>{{ skill.power }}</div>
        <div>Z技</div>
        <div>{{ skill.zpower }}</div>
        <div>PP</div>
        <div>{{ skill.pp }}</div>
        <div>命中率</div>
        <div>{{ skill.accuracy }}</div>
        <div>対象</div>
        <div>{{ skill.target }}</div>
        <div>直接攻撃</div>
        <div>{{ skill.directAttack }}</div>
        <div>守る</div>
        <div>{{ skill.mamoru }}</div>
      </div>
      <div class="item">
        <div>効果</div>
      </div>
      <div class="item">
        <div>{{ skill.effect }}</div>
      </div>
    </div>
    <p style="text-align: center;">覚えるポケモン一覧</p>
    <div id="pokemons">
      <div class="element-link" v-for="pokemon in pokemons" :key="pokemon.zukanNo + pokemon.subNo">
        <nuxt-link :to="{ name: 'pokemon-zukanNo-subNo', params: { zukanNo: pokemon.zukanNo, subNo: pokemon.subNo }}">{{ pokemon.name }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, params }) {
    await store.dispatch('skill/fetchSkill', { skillId : params.skillId })
    await store.dispatch('skill/fetchPokemons', { skillId : params.skillId })
  },
  computed: {
    ...mapGetters({ 'skill' : 'skill/skill', 'pokemons' : 'skill/pokemons' })
  },
}
</script>

<style scoped>
#skill {
  width: 960px;
  margin: 0 auto 20px;
  padding-bottom: 20px;
  border-bottom: solid 1px #dcdcdc;
}
#skill .item {
  display: flex;
  margin: 10px 0;
}
#skill .item div {
  margin: 0 5px;
}
#pokemons {
  display: flex;
  flex-wrap: wrap;
  width: 960px;
  margin: 0 auto;
  padding: 20px;
}
.element-link {
  width: 170px;
  margin: 5px 10px;
  padding: 3px 0;
  text-align: center;
  font-size: 14px;
  border: solid 1px #c0c0c0;
  border-radius: 3px;
  background-color: #f0f8ff;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
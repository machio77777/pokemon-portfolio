<template>
  <div class="main-container">
    <div id="quality">
      <div class="item">
        <div>特性名</div>
        <div>{{ quality.qualityName }}</div>
      </div>
      <div class="item">
        <div>効果</div>
      </div>
      <div class="item">
        <div>{{ quality.effect }}</div>
      </div>
    </div>
    <p style="text-align: center;">特性を持つポケモン一覧</p>
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
    await store.dispatch('quality/fetchQuality', { qualityId : params.qualityId })
    await store.dispatch('quality/fetchPokemons', { qualityId : params.qualityId })
  },
  computed: {
    ...mapGetters({ 'quality' : 'quality/quality', 'pokemons' : 'quality/pokemons' })
  },
}
</script>

<style scoped>
#quality {
  width: 960px;
  margin: 0 auto 20px;
  padding-bottom: 20px;
  border-bottom: solid 1px #dcdcdc;
}
#quality .item {
  display: flex;
  margin: 10px 0;
}
#quality .item div {
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
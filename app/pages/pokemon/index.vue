<template>
  <div class="main-container">
    <div id="region-list">
      <div class="region"><nuxt-link to="/pokemon?generation=1">カントー</nuxt-link></div>
      <div class="region"><nuxt-link to="/pokemon?generation=2">ジョウト</nuxt-link></div>
      <div class="region"><nuxt-link to="/pokemon?generation=3">ホウエン</nuxt-link></div>
      <div class="region"><nuxt-link to="/pokemon?generation=4">シンオウ</nuxt-link></div>
      <div class="region"><nuxt-link to="/pokemon?generation=5">イッシュ</nuxt-link></div>
      <div class="region"><nuxt-link to="/pokemon?generation=6">カロス</nuxt-link></div>
      <div class="region"><nuxt-link to="/pokemon?generation=7">アローラ</nuxt-link></div>
      <div class="region"><nuxt-link to="/pokemon?mega=1">メガシンカ</nuxt-link></div>
    </div>
    <div id="pokemons">
      <div class="element-link" v-for="pokemon in pokemons" :key="pokemon.zukanNo + pokemon.subNo">
        <nuxt-link to="/">{{ pokemon.zukanNo }} : {{ pokemon.name }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, query }) {
    await store.dispatch('pokemon/fetchPokemons', { generation: query.generation, megaFlg: null })
  },
  computed: {
    ...mapGetters("pokemon", ['pokemons'])
  },
}
</script>

<style scoped>
#region-list {
  display: flex;
  width: 1000px;
  margin: 0 auto;
}
.region {
  width: 95px;
  margin: 10px;
  padding: 5px;
  text-align: center;
  border: solid 1px #c0c0c0;
  background-color: #000000;
  border-radius: 3px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.region a {
  color: #ffffff;
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
  background-color: #f8f8ff;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
</style>

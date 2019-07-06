<template>
  <div class="main-container">
    <div id="region-list">
      <label><div class="region" @click="init('generation=1')"><img src="~/assets/img/monster-ball.png" alt="" /> カントー</div></label>
      <label><div class="region" @click="init('generation=2')"><img src="~/assets/img/monster-ball.png" alt="" /> ジョウト</div></label>
      <label><div class="region" @click="init('generation=3')"><img src="~/assets/img/monster-ball.png" alt="" /> ホウエン</div></label>
      <label><div class="region" @click="init('generation=4')"><img src="~/assets/img/monster-ball.png" alt="" /> シンオウ</div></label>
      <label><div class="region" @click="init('generation=5')"><img src="~/assets/img/monster-ball.png" alt="" /> イッシュ</div></label>
      <label><div class="region" @click="init('generation=6')"><img src="~/assets/img/monster-ball.png" alt="" /> カロス</div></label>
      <label><div class="region" @click="init('generation=7')"><img src="~/assets/img/monster-ball.png" alt="" /> アローラ</div></label>
      <label><div class="region" @click="init('megaFlg=1')"><img src="~/assets/img/monster-ball.png" alt="" /> メガシンカ</div></label>
    </div>
    <div v-show="loading" class="loader"></div>
    <div v-show="!loading" id="pokemons">
      <div class="element-link" v-for="pokemon in pokemons" :key="pokemon.zukanNo + pokemon.subNo">
        <nuxt-link :to="{ name: 'pokemon-zukanNo-subNo', params: { zukanNo: pokemon.zukanNo, subNo: pokemon.subNo }}">{{ pokemon.zukanNo }} : {{ pokemon.name }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ store }) {
    await store.dispatch('pokemon/fetchPokemons', { parameters : 'generation=1' })
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({'pokemons' : 'pokemon/pokemons'})
  },
  methods: {
    async init(queryString) {
      this.loading = true
      await this.fetchPokemons({ parameters : queryString })
      this.loading = false
    },
    ...mapActions('pokemon', ['fetchPokemons'])
  }
}
</script>

<style scoped>
.loader {
  margin-top: 30vh;
}
#region-list {
  display: flex;
  width: 1000px;
  margin: 0 auto;
}
.region {
  width: 97px;
  margin: 10px;
  padding: 5px 3px;
  text-align: center;
  vertical-align: middle;
  border: solid 1px #c0c0c0;
  font-size: 13px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 3px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.region:hover {
  background-color: #fa8072;
}
.region img {
  width: 20%;
  vertical-align: middle;
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

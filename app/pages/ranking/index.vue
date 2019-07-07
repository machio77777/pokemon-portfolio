<template>
  <div class="main-container">
    <div id="ranking-list">
      <label><div class="ranking" @click="init('hp')"><img src="~/assets/img/monster-ball.png" alt="" /> HP</div></label>
      <label><div class="ranking" @click="init('at')"><img src="~/assets/img/monster-ball.png" alt="" /> AT</div></label>
      <label><div class="ranking" @click="init('df')"><img src="~/assets/img/monster-ball.png" alt="" /> DF</div></label>
      <label><div class="ranking" @click="init('sa')"><img src="~/assets/img/monster-ball.png" alt="" /> SA</div></label>
      <label><div class="ranking" @click="init('sd')"><img src="~/assets/img/monster-ball.png" alt="" /> SD</div></label>
      <label><div class="ranking" @click="init('sp')"><img src="~/assets/img/monster-ball.png" alt="" /> SP</div></label>
    </div>
    <div v-show="loading" class="loader"></div>
    <div v-show="!loading" id="pokemons">
      <div class="element-link" v-for="pokemon in pokemons" :key="pokemon.zukanNo + pokemon.subNo">
        <div>
          <nuxt-link :to="{ name: 'pokemon-zukanNo-subNo', params: { zukanNo: pokemon.zukanNo, subNo: pokemon.subNo }}">
            <div class="name">{{ pokemon.name }}</div>
          </nuxt-link>
          <div class="value">{{ pokemon.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ store }) {
    await store.dispatch('ranking/fetchPokemons', { parameters : 'hp' })
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({'pokemons' : 'ranking/pokemons'})
  },
  methods: {
    async init(parameters) {
      this.loading = true
      await this.fetchPokemons({ parameters : parameters })
      this.loading = false
    },
    ...mapActions('ranking', ['fetchPokemons'])
  }
}
</script>

<style scoped>
.loader {
  margin-top: 30vh;
}
#ranking-list {
  display: flex;
  width: 590px;
  margin: 0 auto;
}
.ranking {
  width: 70px;
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
.ranking:hover {
  background-color: #fa8072;
}
.ranking img {
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
}
.name {
  margin-bottom: 5px;
  color: #6495ed;
  border: solid 1px #c0c0c0;
  border-radius: 3px;
  background-color: #f0f8ff;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.value {
  border: solid 1px #c0c0c0;
  border-radius: 3px;
  background-color: #fffacd;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
</style>


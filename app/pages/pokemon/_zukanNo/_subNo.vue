<template>
  <div class="main-container">
    <div id="pokemon">
      <div>図鑑No {{ pokemon.zukanNo }} 名前 {{ pokemon.name }}</div>
      <div>属性1 {{ pokemon.type1 }} 属性2 {{ pokemon.type2 }}</div>
      <div>特性1 {{ pokemon.quality1 }} 特性2 {{ pokemon.quality2 }} 夢特性 {{ pokemon.dreamQuality }}</div>
    </div>
    <div>
      HP {{ pokemon.hp }} 
      AT {{ pokemon.at }} 
      DF {{ pokemon.df }} 
      SA {{ pokemon.sa }} 
      SD {{ pokemon.sd }} 
      SP {{ pokemon.sp }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, params }) {
    const zukanNo = params.zukanNo
    const subNo = params.subNo
    await store.dispatch('pokemon/fetchPokemon', { zukanNo : zukanNo, subNo : subNo })
  },
  computed: {
    ...mapGetters("pokemon", ['pokemon'])
  },
}
</script>

<style scoped>

</style>

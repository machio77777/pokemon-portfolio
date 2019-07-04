<template>
  <div class="main-container">
    <div id="pokemon">
      <div class="item">
        <table>
          <tr><th>なまえ</th><td>{{ pokemon.name }}</td></tr>
          <tr><th>ぜんこくNo</th><td>{{ pokemon.zukanNo }}</td></tr>
          <tr>
            <th>タイプ</th>
            <td>
              <div :class="['type', pokemon.typeId1]">{{ pokemon.type1 }}</div>
              <div v-if="pokemon.type2 !== null" :class="['type', pokemon.typeId2]">{{ pokemon.type2 }}</div>
            </td>
          </tr>
          <tr>
            <th>特性</th>
            <td>
              <div>{{ pokemon.quality1 }}</div>
              <div v-if="pokemon.quality2 !== null">{{ pokemon.quality2 }}</div>
              <div v-if="pokemon.dreamQuality !== null">{{ pokemon.dreamQuality }}(夢特性)</div>
            </td>
          </tr>
          <tr><th>HP</th><td><div class="status-bar" :style="{ width: (pokemon.hp * 1.6) + 'px' }">{{ pokemon.hp }}</div></td></tr>
          <tr><th>AT</th><td><div class="status-bar" :style="{ width: (pokemon.at * 1.6) + 'px' }">{{ pokemon.at }}</div></td></tr>
          <tr><th>DF</th><td><div class="status-bar" :style="{ width: (pokemon.df * 1.6) + 'px' }">{{ pokemon.df }}</div></td></tr>
          <tr><th>SA</th><td><div class="status-bar" :style="{ width: (pokemon.sa * 1.6) + 'px' }">{{ pokemon.sa }}</div></td></tr>
          <tr><th>SD</th><td><div class="status-bar" :style="{ width: (pokemon.sd * 1.6) + 'px' }">{{ pokemon.sd }}</div></td></tr>
          <tr><th>SP</th><td><div class="status-bar" :style="{ width: (pokemon.sp * 1.6) + 'px' }">{{ pokemon.sp }}</div></td></tr>
        </table>
      </div>
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
    ...mapGetters({'pokemon' : 'pokemon/pokemon'})
  },
}
</script>

<style scoped>
.main-container {
  padding: 30px;
}
#pokemon {
  display: flex;
  padding: 20px 0px 30px 20px;
  border: solid 1px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
#pokemon th {
  padding: 8px;
  text-align: left;
}
#pokemon td {
  padding-left: 30px;
}
.type {
  width: 90px;
  margin: 10px 0;
  padding: 2px 0;
  text-align: center;
  border: solid 1px #c0c0c0;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.type-1 {
  background-color: #f8f8ff;
}
.type-2 {
  color: #ffffff;
  background-color: #ff6347;
}
.type-3 {
  color: #ffffff;
  background-color: #00bfff;
}
.type-4 {
  background-color: #ffff00;
}
.type-5 {
  color: #ffffff;
  background-color: #3cb371;
}
.type-6 {
  color: #00ffff;
  background-color: #3cb371;
}
.type-7 {
  color: #ffffff;
  background-color: #8b0000;;
}
.type-8 {
  color: #ffffff;
  background-color: #9400d3;
}
.type-9 {
  color: #ffffff;
  background-color: #deb887;
}
.type-10 {
  color: #ffffff;
  background-color: #87cefa;
}
.type-11 {
  color: #ffffff;
  background-color: #ffb6c1;
}
.type-12 {
  color: #ffffff;
  background-color: #8fbc8f;
}
.type-13 {
  color: #ffffff;
  background-color: #d2b48c;
}
.type-14 {
  color: #ffffff;
  background-color: #483d8b;
}
.type-15 {
  color: #ffffff;
  background-color:#191970;
}
.type-16 {
  color: #ffffff;
  background-color: #000000;
}
.type-17 {
  color: #ffffff;
  background-color: #a9a9a9;
}
.type-18 {
  color: #ffffff;
  background-color: #ff69b4;
}
.status-bar {
  padding: 3px 15px 3px 10px;
  text-align: left;
  color: #ffffff;
  border-radius: 4px;
  background-color: #87cefa;
}
</style>

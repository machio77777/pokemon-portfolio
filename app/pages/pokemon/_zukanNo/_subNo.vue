<template>
  <div class="main-container">
    <div id="pokemon">
      <div id="back-link"><nuxt-link to="/pokemon">一覧へ戻る</nuxt-link></div>
      <div id="basic">
        <div class="item">
          <table>
            <tr>
              <th style="padding: 0;"><img src="~/assets/img/monster-ball.png"/></th>
              <td style="padding: 0;">
                <p>{{ pokemon.name }}</p>
                <p>ぜんこくNo. {{ pokemon.zukanNo }}</p>
              </td>
            </tr>
            <tr>
              <th>タイプ1</th>
              <td><div :class="['s-type', 'type-' + pokemon.typeId1]">{{ pokemon.typeName1 }}</div></td>
            </tr>
            <tr v-if="pokemon.type2 !== null">
              <th>タイプ2</th>
              <td><div :class="['s-type', 'type-' + pokemon.typeId2]">{{ pokemon.typeName2 }}</div></td>
            </tr>
            <tr>
              <th>特性1</th>
              <td>
                <div><nuxt-link :to="{ name: 'quality-qualityId', params: { qualityId: pokemon.qualityId1 }}">{{ pokemon.quality1 }}</nuxt-link></div>
              </td>
            </tr>
            <tr v-if="pokemon.quality2 !== null">
              <th>特性2</th>
              <td><div><nuxt-link :to="{ name: 'quality-qualityId', params: { qualityId: pokemon.qualityId2 }}">{{ pokemon.quality2 }}</nuxt-link></div></td>
            </tr>
            <tr v-if="pokemon.dreamQuality !== null">
              <th>夢特性</th>
              <td><div><nuxt-link :to="{ name: 'quality-qualityId', params: { qualityId: pokemon.dreamQualityId }}">{{ pokemon.dreamQuality }}</nuxt-link></div></td>
            </tr>
          </table>
        </div>
        <div class="item status">
          <table>
            <tr><th>HP</th><td><div class="status-bar" :style="{ width: (pokemon.hp * 1.8) + 'px' }">{{ pokemon.hp }}</div></td></tr>
            <tr><th>AT</th><td><div class="status-bar" :style="{ width: (pokemon.at * 1.8) + 'px' }">{{ pokemon.at }}</div></td></tr>
            <tr><th>DF</th><td><div class="status-bar" :style="{ width: (pokemon.df * 1.8) + 'px' }">{{ pokemon.df }}</div></td></tr>
            <tr><th>SA</th><td><div class="status-bar" :style="{ width: (pokemon.sa * 1.8) + 'px' }">{{ pokemon.sa }}</div></td></tr>
            <tr><th>SD</th><td><div class="status-bar" :style="{ width: (pokemon.sd * 1.8) + 'px' }">{{ pokemon.sd }}</div></td></tr>
            <tr><th>SP</th><td><div class="status-bar" :style="{ width: (pokemon.sp * 1.8) + 'px' }">{{ pokemon.sp }}</div></td></tr>
          </table>
        </div>
      </div>
      <div id="skills">
        <div id="type-list">
          <div class="list">
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=1')"> ノーマル</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=2')"> ほのお</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=3')"> みず</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=4')"> でんき</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=5')"> くさ</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=6')"> こおり</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=7')"> かくとう</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=8')"> どく</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=9')"> じめん</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=10')"> ひこう</div></label>
          </div>
          <div class="list">
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=11')"> エスパー</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=12')"> むし</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=13')"> いわ</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=14')"> ゴースト</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=15')"> ドラゴン</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=16')"> あく</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=17')"> はがね</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'typeId=18')"> フェアリー</div></label>
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, null)"> クリア</div></label>
          </div>
        </div>
        <div v-show="loading" class="loader"></div>
        <div v-show="!loading" class="skill_element" style="display: flex;" v-for="skill in skills" :key="skill.skillId">
          <div :class="['s-type', 'type-' + skill.typeId]">{{ skill.typeName }}</div>
          <div class="name"><nuxt-link :to="{ name: 'skill-skillId', params: { skillId: skill.skillId }}"><span>{{ skill.skillName }}</span></nuxt-link></div>
          <div class="power">{{ skill.power }}</div>
          <div class="effect">{{ skill.effect }}</div>
        </div>
        <div v-show="(skills.length === 0) && !loading">
          <p style="text-align: center;">データがありません</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ store, params }) {
    await store.dispatch('pokemon/fetchPokemon', { zukanNo : params.zukanNo, subNo : params.subNo })
    await store.dispatch('pokemon/fetchSkills', { zukanNo : params.zukanNo, subNo : params.subNo, query : null })
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({ 'pokemon' : 'pokemon/pokemon', 'skills' : 'pokemon/skills' })
  },
  methods: {
    async search(zukanNo, subNo, typeId) {
      this.loading = true
      await this.fetchSkills({ zukanNo : zukanNo, subNo : subNo, query: typeId })
      this.loading = false
    },
    ...mapActions('pokemon', ['fetchSkills'])
  }
}
</script>

<style scoped>
.main-container {
  padding: 30px;
}
#back-link {
  padding: 0 0 10px 10px;
}
#pokemon {
  width: 820px;
  padding-left: 20px;
}
#pokemon th {
  padding: 2px 8px;
  text-align: left;
}
#pokemon th img {
  width: 50px;
}
#pokemon td {
  padding-left: 5px;
}
#basic {
  display: flex;
  padding-top: 20px;
  border-top: solid 1px #dcdcdc;
}
#skills {
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 20px;
  border-top: solid 1px #dcdcdc;
}
.item {
  margin-right: 60px;
}
.status td {
  padding: 4px;
}
.type {
  width: 75px;
  margin: 10px 0;
  padding: 1px 0;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  background-color: #000000;
  border: solid 1px #c0c0c0;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.type:hover {
  background-color: #fa8072;
}
.status-bar {
  padding: 3px 15px 3px 10px;
  text-align: left;
  color: #ffffff;
  font-size: 12px;
  border-radius: 2px;
  background-color: #87cefa;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
#type-list {
  margin-bottom: 20px;
}
.list {
  display: flex;
  width: 1000px;
  margin: 0 auto;
}
.list div {
  margin: 5px;
}
.skill_element {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: solid 1px #dcdcdc;
}
.s-type {
  width: 90px;
  margin-right: 30px;
  text-align: center;
  padding: 1px 0;
  font-size: 14px;
  border: solid 1px #c0c0c0;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.name {
  margin-right: 20px;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.power {
  width: 50px;
  margin-right: 20px;
  text-align: center;
}
.effect {
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

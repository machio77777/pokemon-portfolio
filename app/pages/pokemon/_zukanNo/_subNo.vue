<template>
  <div class="main-container">
    <div id="pokemon">
      <div id="basic">
        <div class="item">
          <table>
            <tr>
              <th style="padding: 0;"><img src="~/assets/img/zukan/001.png"/></th>
              <td style="padding: 0;">
                <p>{{ pokemon.name }}</p>
                <p>ぜんこくNo. {{ pokemon.zukanNo }}</p>
              </td>
            </tr>
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
            <label><div class="type type-1" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=1')"> ノーマル</div></label>
            <label><div class="type type-2" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=2')"> ほのお</div></label>
            <label><div class="type type-3" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=3')"> みず</div></label>
            <label><div class="type type-4" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=4')"> でんき</div></label>
            <label><div class="type type-5" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=5')"> くさ</div></label>
            <label><div class="type type-6" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=6')"> こおり</div></label>
            <label><div class="type type-7" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=7')"> かくとう</div></label>
            <label><div class="type type-8" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=8')"> どく</div></label>
            <label><div class="type type-9" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=9')"> じめん</div></label>
          </div>
          <div class="list">
            <label><div class="type type-10" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=10')"> ひこう</div></label>
            <label><div class="type type-11" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=11')"> エスパー</div></label>
            <label><div class="type type-12" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=12')"> むし</div></label>
            <label><div class="type type-13" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=13')"> いわ</div></label>
            <label><div class="type type-14" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=14')"> ゴースト</div></label>
            <label><div class="type type-15" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=15')"> ドラゴン</div></label>
            <label><div class="type type-16" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=16')"> あく</div></label>
            <label><div class="type type-17" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=17')"> はがね</div></label>
            <label><div class="type type-18" @click="search(pokemon.zukanNo, pokemon.subNo, 'type=18')"> フェアリー</div></label>
          </div>
          <div class="list">
            <label><div class="type" @click="search(pokemon.zukanNo, pokemon.subNo, 'all')"> クリア</div></label>
          </div>
        </div>
        <div v-show="loading" class="loader"></div>
        <div v-show="!loading" class="skill_element" style="display: flex;" v-for="skill in skills" :key="skill.skillId">
          <div :class="['s-type', skill.typeId]">{{ skill.typeName }}</div>
          <div class="name"><nuxt-link :to="{ name: 'skill-skillId', params: { skillId: skill.skillId }}"><span>{{ skill.skillName }}</span></nuxt-link></div>
          <div class="power">{{ skill.power }}</div>
          <div class="effect">{{ skill.effect }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ store, params }) {
    const zukanNo = params.zukanNo
    const subNo = params.subNo
    await store.dispatch('pokemon/fetchPokemon', { zukanNo : zukanNo, subNo : subNo })
    await store.dispatch('pokemon/fetchSkills', { zukanNo : zukanNo, subNo : subNo, query : null })
  },
  computed: {
    ...mapGetters({
      'pokemon' : 'pokemon/pokemon', 
      'skills' : 'pokemon/skills',
      'loading' :  'loading'
    })
  },
  methods: {
    async search(zukanNo, subNo, type) {
      await this.fetchSkills({ zukanNo : zukanNo, subNo : subNo, query: type })
    },
    ...mapActions('pokemon', ['fetchSkills'])
  }
}
</script>

<style scoped>
.main-container {
  padding: 30px;
}
#pokemon {
  padding-left: 20px;
}
#pokemon th {
  padding: 2px 8px;
  text-align: left;
}
#pokemon th img {
  width: 80px;
}
#pokemon td {
  padding-left: 5px;
}
#basic {
  display: flex;
  border-top: solid 1px;
}
#skills {
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 20px;
  border-top: solid 1px;
  border-bottom: solid 1px;
}
.item {
  margin-right: 60px;
}
.status {
  padding-top: 15px;
}
.status td {
  padding: 4px;
}
.type {
  width: 90px;
  margin: 10px 0;
  padding: 1px 0;
  font-size: 14px;
  text-align: center;
  border: solid 1px #c0c0c0;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.status-bar {
  padding: 3px 15px 3px 10px;
  text-align: left;
  color: #ffffff;
  font-size: 12px;
  border-radius: 4px;
  background-color: #87cefa;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
#type-list {
  margin-bottom: 40px;
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
  padding-bottom: 10px;
}
.s-type {
  width: 90px;
  margin-right: 30px;
  text-align: center;
  padding: 1px 0;
  font-size: 14px;
  border: solid 1px #c0c0c0;
  border-radius: 4px;
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

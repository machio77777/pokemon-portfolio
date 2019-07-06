<template>
  <div class="main-container">
    <div id="skills">
      <div id="type-list">
        <div class="list">
          <label><div class="type" @click="search('type=1')"> ノーマル</div></label>
          <label><div class="type" @click="search('type=2')"> ほのお</div></label>
          <label><div class="type" @click="search('type=3')"> みず</div></label>
          <label><div class="type" @click="search('type=4')"> でんき</div></label>
          <label><div class="type" @click="search('type=5')"> くさ</div></label>
          <label><div class="type" @click="search('type=6')"> こおり</div></label>
          <label><div class="type" @click="search('type=7')"> かくとう</div></label>
          <label><div class="type" @click="search('type=8')"> どく</div></label>
          <label><div class="type" @click="search('type=9')"> じめん</div></label>
          <label><div class="type" @click="search('type=10')"> ひこう</div></label>
        </div>
        <div class="list">
          <label><div class="type" @click="search('type=11')"> エスパー</div></label>
          <label><div class="type" @click="search('type=12')"> むし</div></label>
          <label><div class="type" @click="search('type=13')"> いわ</div></label>
          <label><div class="type" @click="search('type=14')"> ゴースト</div></label>
          <label><div class="type" @click="search('type=15')"> ドラゴン</div></label>
          <label><div class="type" @click="search('type=16')"> あく</div></label>
          <label><div class="type" @click="search('type=17')"> はがね</div></label>
          <label><div class="type" @click="search('type=18')"> フェアリー</div></label>
          <label><div class="type" @click="search(null)"> クリア</div></label>
        </div>
      </div>
      <div v-show="loading" class="loader"></div>
      <div v-show="!loading">
        <div class="skill_element" style="display: flex;">
          <div class="id">ID</div>
          <div class="name" style="text-align: center;">名称</div>
          <div style="text-align: center; width: 100px;">タイプ</div>
          <div class="power">威力</div>
          <div class="effect" style="text-align: center;">効果</div>
        </div>
        <div class="skill_element" style="display: flex;" v-for="skill in skills" :key="skill.skillId">
          <div class="id">{{ skill.skillId }}</div>
          <div class="name"><nuxt-link :to="{ name: 'skill-skillId', params: { skillId: skill.skillId }}">{{ skill.skillName }}</nuxt-link></div>
          <div :class="['s-type', skill.typeId]">{{ skill.typeName }}</div>
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
  async asyncData({ store }) {
    await store.dispatch('skill/fetchSkills', { query : null })
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters("skill", ['skills'])
  },
  methods: {
    async search(type) {
      this.loading = true
      await this.fetchSkills({ query : type })
      this.loading = false
    },
    ...mapActions('skill', ['fetchSkills'])
  }
}
</script>

<style scoped>
.loader {
  margin-top: 30vh;
}
#skills {
  width: 960px;
  margin: 0 auto;
  padding: 0 20px;
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
  margin: 4px;
}
.skill_element {
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  border-bottom: solid 1px #dcdcdc;
}
.id {
  width: 40px;
  text-align: center;
}
.name {
  width: 220px;
  padding: 0 10px;
}
.type {
  width: 80px;
  padding: 3px;
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
.s-type {
  width: 90px;
  text-align: center;
  font-size: 12px;
  border: solid 1px #c0c0c0;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.power {
  width: 50px;
  padding-left: 30px;
}
.effect {
  width: 550px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

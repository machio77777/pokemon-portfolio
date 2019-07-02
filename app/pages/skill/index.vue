<template>
  <div class="main-container">
    <div id="skills">
      <div class="skill_element" style="display: flex;">
        <div class="id">ID</div>
        <div class="name" style="text-align: center;">名称</div>
        <div class="effect" style="text-align: center;">効果</div>
      </div>
      <div class="skill_element" style="display: flex;" v-for="skill in skills" :key="skill.skillId">
        <div class="id">{{ skill.skillId }}</div>
        <div class="name">{{ skill.skillName }}</div>
        <div class="effect">{{ skill.effect }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ store }) {
    await store.dispatch('skill/fetchSkills')
  },
  computed: {
    ...mapGetters("skill", ['skills'])
  }
}
</script>

<style scoped>
#skills {
  width: 960px;
  margin: 0 auto;
  padding: 20px;
}
.skill_element {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: solid 1px;
  font-size: 14px;
}
.id {
  width: 40px;
  text-align: center;
  border-right: solid 1px;
}
.name {
  width: 220px;
  padding: 0 10px;
}
.effect {
  padding-left: 10px;
  width: 700px;
  border-left: solid 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

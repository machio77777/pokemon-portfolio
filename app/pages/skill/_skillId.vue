<template>
  <div class="main-container">
    <div>{{ skill.skillId }}</div>
    <div>{{ skill.skillName }}</div>
    <div>{{ skill.typeName }}</div>
    <div>{{ skill.power }}</div>
    <div>{{ skill.zpower }}</div>
    <div>{{ skill.pp }}</div>
    <div>{{ skill.classification }}</div>
    <div>{{ skill.accuracy }}</div>
    <div>{{ skill.target }}</div>
    <div>{{ skill.effect }}</div>
    <div>{{ skill.directAttack }}</div>
    <div>{{ skill.mamoru }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, params }) {
    const skillId = params.skillId
    await store.dispatch('skill/fetchSkill', { skillId : skillId })
  },
  computed: {
    ...mapGetters("skill", ['skill'])
  },
}
</script>

<style scoped>

</style>
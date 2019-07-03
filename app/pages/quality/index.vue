<template>
  <div class="main-container">
    <div id="qualities">
      <div class="quality_element" style="display: flex;">
        <div class="id">ID</div>
        <div class="name" style="text-align: center;">名称</div>
        <div class="effect" style="text-align: center;">効果</div>
      </div>
      <div class="quality_element" style="display: flex;" v-for="quality in qualities" :key="quality.qualityId">
        <div class="id">{{ quality.qualityId }}</div>
        <div class="name"><nuxt-link :to="{ name: 'quality-qualityId', params: { qualityId: quality.qualityId }}">{{ quality.qualityName }}</nuxt-link></div>
        <div class="effect">{{ quality.effect }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store }) {
    await store.dispatch('quality/fetchQualities')
  },
  computed: {
    ...mapGetters("quality", ['qualities'])
  }
}
</script>

<style scoped>
#qualities {
  width: 960px;
  margin: 0 auto;
  padding: 20px;
}
.quality_element {
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
  width: 150px;
  padding: 0 10px;
}
.effect {
  padding-left: 10px;
  width: 770px;
  border-left: solid 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

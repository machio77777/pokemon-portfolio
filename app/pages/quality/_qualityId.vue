<template>
  <div class="main-container">
    <div>{{ quality.qualityId }}</div>
    <div>{{ quality.qualityName }}</div>
    <div>{{ quality.effect }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, params }) {
    const qualityId = params.qualityId
    await store.dispatch('quality/fetchQuality', { qualityId : qualityId })
  },
  computed: {
    ...mapGetters("quality", ['quality'])
  },
}
</script>

<style scoped>

</style>
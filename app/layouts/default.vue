<template>
  <div id="wrapper">
    <TheHeader />
    <div id="contents">
      <TheSidebar />
      <nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheSidebar from '~/components/TheSidebar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheSidebar,
    TheFooter
  }
}
</script>

<style scoped>
#wrapper {
  margin: 0px auto;
  max-width: 1300px;
}
#contents {
  display: flex;
  min-height: 88vh;
}
</style>

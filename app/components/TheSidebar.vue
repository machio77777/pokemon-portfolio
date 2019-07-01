<template>
  <div id="sidebar-container">
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/pokemon?generation=1">ポケモン図鑑一覧</nuxt-link></li>
      <li><nuxt-link to="/quality">特性一覧</nuxt-link></li>
      <li><nuxt-link to="/skill">技一覧</nuxt-link></li>
      <li><nuxt-link to="/soldier">育成済み一覧</nuxt-link></li>
    </ul>
  </div>
</template>

<style scoped>
#sidebar-container {
  padding: 30px 0 0 20px;
  width: 15%;
  background-color: #000000;
  border-right: solid 1px #d3d3d3;
}
#sidebar-container a {
  color: #ffffff;
}
</style>

<template>
  <div id="sidebar-container">
    <ul>
      <li><nuxt-link to="/pokemon"><img src="~/assets/img/monster-ball.png" alt=""> ポケモン図鑑一覧</nuxt-link></li>
      <li><nuxt-link to="/quality"><img src="~/assets/img/poke-tre.png" alt=""> 特性一覧</nuxt-link></li>
      <li><nuxt-link to="/skill"><img src="~/assets/img/skill-case.png" alt=""> 技一覧</nuxt-link></li>
      <li><nuxt-link to="/soldier"><img src="~/assets/img/learning-machine.png" alt=""> 育成済み一覧</nuxt-link></li>
      <li><nuxt-link to="/">種族値ランキング</nuxt-link></li>
    </ul>
  </div>
</template>

<style scoped>
#sidebar-container {
  padding: 30px 0 0 20px;
  width: 20%;
  background-color: #000000;
  border-right: solid 1px #d3d3d3;
}
#sidebar-container a {
  color: #ffffff;
}
#sidebar-container img {
  width: 25px;
  vertical-align: middle;
}
</style>

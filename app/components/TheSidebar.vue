<template>
  <div id="sidebar-container">
    <ul>
      <li>
        <nuxt-link to="/pokemon"><img src="~/assets/img/monster-ball.png" alt=""> ポケモン図鑑一覧</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/quality"><img src="~/assets/img/poke-tre.png" alt=""> 特性一覧</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/skill"><img src="~/assets/img/skill-case.png" alt=""> 技一覧</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/ranking"><img src="~/assets/img/pip.png" alt=""> 種族値ランキング</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/"><img src="~/assets/img/learning-machine.png" alt=""> レーティング</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#sidebar-container {
  width: 20%;
  padding: 30px 0 0 20px;
  background-color: #000000;
}
#sidebar-container a {
  color: #ffffff;
}
#sidebar-container img {
  width: 25px;
  vertical-align: middle;
}
</style>

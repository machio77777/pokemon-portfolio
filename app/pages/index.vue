<template>
  <div class="main-container">
    <img src="~/assets/img/home.gif" alt="">
    <p class="head-line">レーティング対戦向け</p>
    <div class="site-contents">
      <div class="site-sub-content">
        <img src="~/assets/img/monster-ball.png" alt="">
        <nuxt-link to="/pokemon">ポケモン図鑑一覧</nuxt-link>
      </div>
      <div class="site-sub-content">
        <img src="~/assets/img/poke-tre.png" alt="">
        <nuxt-link to="/quality">特性一覧</nuxt-link>
      </div>
      <div class="site-sub-content">
        <img src="~/assets/img/skill-case.png" alt="">
        <nuxt-link to="/skill">技一覧</nuxt-link>
      </div>
    </div>
    <div class="site-contents">
      <div class="site-sub-content">
        <img src="~/assets/img/learning-machine.png" alt="">
        <nuxt-link to="/">育成済み一覧</nuxt-link>
      </div>
    </div>
    <p class="head-line">外部リンク先</p>
    <div class="site-contents">
      <div class="site-sub-content">
        <img src="~/assets/img/egg.png" alt="">
        <a href="https://www.pokemon.co.jp/" target="_blank">ポケモン公式サイト</a>
      </div>
      <div class="site-sub-content">
        <img src="~/assets/img/voice-checker.png" alt="">
        <a href="https://yakkun.com/" target="_blank">ポケモン徹底攻略</a>
      </div>
      <div class="site-sub-content">
        <img src="~/assets/img/gb.png" alt="">
        <a href="http://hikochans.com/" target="_blank">ひこちゃんず !</a>
      </div>
    </div>
    <div class="site-contents">
      <div class="site-sub-content">
        <img src="~/assets/img/battle-recoder.png" style="width: 12%;" alt="">
        <a href="https://github.com/machio77777/pokemon-api" target="_blank">Pokémon API</a>
      </div>
      <div class="site-sub-content">
        <img src="~/assets/img/albam.png" style="width: 12%;" alt="">
        <a href="https://github.com/machio77777/pokemon-portfolio" target="_blank">Pokémon SPA</a>
      </div>
      <div class="site-sub-content">
        <img src="~/assets/img/swagger.svg" style="width: 9%;" alt="">
        <a href="https://machio77777.github.io/pokemon-swagger/" target="_blank">swagger定義</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.main-container {
  text-align: center;
}
#title {
  font-size: 24px;
}
img {
  width: 50%;
}
.head-line {
  margin: 15px 0;
  font-size: 16px;
}
.site-contents {
  display: flex;
  margin: 0px auto;
  width: 800px;
  font-weight: bold;
}
.site-sub-content {
  width: 200px;
  margin: 10px;
  padding: 10px 20px;
  background-color: #000000;
  border: solid 1px #a9a9a9;
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.4); 
}
.site-sub-content a {
  vertical-align: middle;
  color: #ffffff;
}
.site-sub-content img {
  width: 13%;
  vertical-align: middle;
}
</style>

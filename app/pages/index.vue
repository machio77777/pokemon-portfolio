<template>
  <div class="main-container">
    <div id="index">
      <img src="~/assets/img/home.gif" alt="">
      <p class="head-line">レーティング対戦向け</p>
      <div class="site-contents">
        <nuxt-link to="/pokemon"><div class="site-sub-content"><img src="~/assets/img/monster-ball.png" alt=""> ポケモン図鑑一覧</div></nuxt-link>
        <nuxt-link to="/quality"><div class="site-sub-content"><img src="~/assets/img/poke-tre.png" alt=""> 特性一覧</div></nuxt-link>
        <nuxt-link to="/skill"><div class="site-sub-content"><img src="~/assets/img/skill-case.png" alt=""> 技一覧</div></nuxt-link>
      </div>
      <div class="site-contents">
        <nuxt-link to="/ranking"><div class="site-sub-content"><img src="~/assets/img/pip.png" alt=""> 種族値ランキング</div></nuxt-link>
        <nuxt-link to="/"><div class="site-sub-content"><img src="~/assets/img/learning-machine.png" alt=""> 作成中</div></nuxt-link>
        <nuxt-link to="/"><div class="site-sub-content"><img src="~/assets/img/learning-machine.png" alt=""> 作成中</div></nuxt-link>
      </div>
      <p class="head-line">外部リンク先</p>
      <div class="site-contents">
        <a href="https://www.pokemon.co.jp/" target="_blank">
          <div class="site-sub-content">
            <img src="~/assets/img/egg.png" alt="">ポケモン公式サイト
          </div>
        </a>
        <a href="https://yakkun.com/" target="_blank">
          <div class="site-sub-content">
            <img src="~/assets/img/voice-checker.png" alt="">ポケモン徹底攻略
          </div>
        </a>
        <a href="http://hikochans.com/" target="_blank">
          <div class="site-sub-content">
            <img src="~/assets/img/gb.png" alt="">ひこちゃんず !
          </div>
        </a>
      </div>
      <div class="site-contents">
        <a href="https://wiki.xn--rckteqa2e.com/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8" target="_blank">
          <div class="site-sub-content">
            <img src="~/assets/img/plus.png" style="width: 12%;" alt="">Pokémon Wiki
          </div>
        </a>
        <a href="https://pente.koro-pokemon.com/" target="_blank">
          <div class="site-sub-content">
            <img src="~/assets/img/defender.png" style="width: 12%;" alt="">ポケモン王国
          </div>
        </a>
        <a href="https://pokemon-trainer.net/sm/dmcs/" target="_blank">
          <div class="site-sub-content">
            <img src="~/assets/img/special.png" style="width: 12%;" alt="">ダメージ計算
          </div>
        </a>
      </div>
      <div class="site-contents">
        <a href="https://github.com/machio77777/pokemon-api" target="_blank">
          <div class="site-sub-content">
            <img src="~/assets/img/battle-recoder.png" style="width: 12%;" alt="">Pokémon API
          </div>
        </a>
        <a href="https://github.com/machio77777/pokemon-portfolio" target="_blank">
          <div class="site-sub-content">
            <img src="~/assets/img/albam.png" style="width: 12%;" alt="">Pokémon SPA
          </div>
        </a>
        <a href="https://machio77777.github.io/pokemon-swagger/" target="_blank">
          <div class="site-sub-content">
            <img src="~/assets/img/swagger.svg" style="width: 9%;" alt="">swagger定義
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
}
</script>

<style scoped>
.main-container {
  text-align: center;
}
#index {
  width: 900px;
  margin: 0 auto;
  padding: 30px 0;
  border: solid 1px #c0c0c0;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
#title {
  font-size: 24px;
}
img {
  width: 50%;
}
.head-line {
  width: 800px;
  margin: 35px auto 15px;
  padding: 5px 10px;
  color: #ffffff;
  font-size: 16px;
  background-color: #87ceeb;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.4); 
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
a .site-sub-content {
  vertical-align: middle;
  color: #ffffff;
}
a .site-sub-content:hover {
  background-color: #fa8072;
}
.site-sub-content img {
  width: 13%;
  vertical-align: middle;
}
</style>

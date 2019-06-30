<template>
  <div id="header-container">
    <ul id="header">
      <li><nuxt-link to="/">Pokémon Portfolio</nuxt-link></li>
    </ul>
  </div>
</template>

<style>
#header-container {
  padding: 20px 0;
  background-color: #000000;
}
#header li {
  display: inline-block;
  margin: 0 20px;
  font-weight: bold;
}
#header a {
  color: #ffffff;
  text-decoration: none;
}
</style>

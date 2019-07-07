<template>
  <div class="main-container">
    <div id="btn-area">
      <div id="insertPokemon" @click="insertPokemon()">新規登録</div>
    </div>
    <div v-show="loading" class="loader"></div>
    <div v-show="!loading" id="pokemons">
      <table>
        <tr style="border-bottom: solid 1px;">
          <th id="col-del" class="col"></th>
          <th id="col-id" class="col">ID</th>
          <th id="col-title" class="col">タイトル</th>
          <th id="col-name" class="col">名称</th>
          <th id="col-personality" class="col">性格</th>
        </tr>
        <tr v-for="pokemon in pokemons" :key="pokemon.soldierId">
          <td class="del-btn"><div @click="deletePokemon(pokemon.soldierId)">削除</div></td>
          <td class="id">
            <nuxt-link :to="{ name: 'soldier', params: { soldierId: pokemon.soldierId }}">
              {{ pokemon.soldierId }}
            </nuxt-link>
          </td>
          <td class="title">{{ pokemon.title }}</td>
          <td class="name">{{ pokemon.name }}</td>
          <td class="personality">{{ pokemon.personality }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ store, params }) {
    await store.dispatch('soldier/fetchPokemons', { zukanNo : params.zukanNo, subNo : params.subNo})
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({'pokemons' : 'soldier/pokemons'})
  },
  methods: {
    async insertPokemon() {
      this.loading = true
      alert('新規登録が成功しました!')
      this.loading = false
    },
    async deletePokemon(soldierId) {
      this.loading = true
      alert(soldierId)
      this.loading = false
    }
    //...mapActions('soldier', ['deletePokemon'])
  }
}
</script>

<style scoped>
#btn-area {
  margin-bottom: 20px;
  padding: 0px 30px;
}
#insertPokemon {
  width: 120px;
  padding: 3px 0px;
  text-align: center;
  color: #696969;
  border: solid 1px #000000;
  background-color: #f5f5f5;
  border-radius: 3px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
#insertPokemon:hover {
  color: #ffffff;
  background-color: #fa8072;
}
#pokemons {
  display: flex;
  flex-wrap: wrap;
  width: 960px;
  margin: 0 auto;
  padding: 0px 20px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
#pokemons th {
  color: #ffffff;
  background-color: #6495ed;
  border-right: solid 1px #dcdcdc;
  border-bottom: solid 1px #dcdcdc;
}
#pokemons td {
  padding: 10px 0px;
  border-right: solid 1px #dcdcdc;
  border-bottom: solid 1px #dcdcdc;
}
.col {
  margin: 0px;
  padding: 5px;
  text-align: center;
}
#col-del {
  width: 90px;
}
#col-id {
  width: 50px;
}
#col-name {
  width: 150px;
}
#col-personality {
  width: 150px;
}
#col-title {
  width: 250px;
}
.del-btn {
  padding: 5px;
}
.del-btn div {
  width: 50px;
  margin: 0 auto;
  padding: 3px 0px;
  text-align: center;
  color: #ffffff;
  background-color: #808080;
  border-radius: 3px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
}
.del-btn div:hover {
  background-color: #fa8072;
}
.id {
  text-align: center;
}
.title {
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.name {
  padding-left: 10px;
  text-align: center;
}
.personality {
  text-align: center;
}
</style>

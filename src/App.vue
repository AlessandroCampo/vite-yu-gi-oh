

<template>
  <AppHeader />
  <main>
    <CardContainer />
  </main>
</template>

<script>

import axios from 'axios'
import { store } from '../src/store'
import AppHeader from './components/AppHeader.vue'
import CardContainer from './components/main/CardContainer.vue'

export default {
  components: { AppHeader, CardContainer },
  data() {
    return {

    }
  },
  created() {
    this.getCards()
  },
  methods: {
    getCards() {
      console.log("ciao")
      axios.get(store.apiURL).then((res) => {
        store.cardList = res.data.data.slice(0, 20)
        console.log(store.cardList)
      })
    }
  }
}
</script>

<style scoped lang="scss">
main {
  background-color: #d48f38;
  height: 90%;
  border: 2px solid red;
}
</style>

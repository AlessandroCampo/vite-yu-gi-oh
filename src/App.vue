

<template>
  <AppHeader />
  <main>
    <FilterSelect />
    <CardContainer />
  </main>
</template>

<script>

import axios from 'axios'
import { store } from '../src/store'
import AppHeader from './components/AppHeader.vue'
import CardContainer from './components/main/CardContainer.vue'
import FilterSelect from './components/main/FilterSelect.vue'

export default {
  components: { AppHeader, CardContainer, FilterSelect },
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
        store.cardList = res.data.data.splice(0, 100)
        console.log(store.cardList)
        store.loading = false
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

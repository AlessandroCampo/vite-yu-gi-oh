

<template>
  <AppHeader />
  <main>
    <FilterSelect @selectChange="refreshList()" />
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
    store.getCards()
  },
  methods: {
    refreshList() {
      store.selectedList = []
      store.loadedImgs = 0
      // store.getCards()
      store.loading = true
      store.cardList.forEach((card) => {
        if (card.archetype === store.selectedArchetype) {
          store.selectedList.push(card)
        }
      })
      if (store.cardList.length === 0) {
        store.loading = false
      }
      store.selectedList.sort(store.sortCards)
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

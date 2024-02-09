

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
        store.cardList = res.data.data
        store.cardList.forEach((card) => {
          if (card.archetype == store.selectedType) {
            store.selectedList.push(card)
          }
        })
        console.log(store.selectedList)
        store.selectedList.sort(this.sortCards)
        store.loading = false
      })
    },
    sortCards(a, b) {
      const order = { "Link Monster": 1, "Xyz Monster": 2, "Synchro Monster": 3, "Fusion Monster": 4, "Effect Monster": 5, "Normal Monster": 6, "Spell Card": 7, "Trap Card": 8 };
      return order[a.type] - order[b.type];
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

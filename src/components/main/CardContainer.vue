
<template>
    <div class="card-container">
        <div class="loader" v-show="store.loading">
            <img src="../../assets/img/loader.gif" alt="">
        </div>
        <SingleCard v-for="(card, index) in filteredList" :key="index" :card="card" />

    </div>
</template>
<script>

import { store } from '../../store'
import SingleCard from './t3/SingleCard.vue'

export default {
    components: { SingleCard },
    name: 'CardContainer',
    data() {
        return {
            store
        }
    },
    computed: {
        filteredList() {
            return store.selectedList.filter(card => {
                return card.name.toLowerCase().includes(store.searchText.toLowerCase()) && (!store.selectedType || card.type.includes(store.selectedType)) && card.archetype.includes(store.selectedArchetype)
            })
        }
    }
}


</script>
<style lang="scss" scoped>
.card-container {
    .loader {
        background-color: rgba($color: #121212, $alpha: 0.6);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        border: 2px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('../../assets/img/background.jpg');
        background-size: cover;
        background-position: center;
    }

    position: relative;
    padding: 30px;
    width: 70%;
    height: 95%;
    background-color: white;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    overflow-y: auto;
}
</style>

<template>
    <p> Found {{ foundCards }} cards</p>
    <div class="card-container">
        <SingleCard v-for="(card, index) in store.cardList" :key="index" :card="card" />
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
            store,
            foundCards: 50
        }
    }
}


</script>
<style lang="scss" scoped>
.card-container {
    padding: 30px;
    width: 70%;
    height: 95%;
    background-color: white;
    margin: 10px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    overflow-y: auto;
}
</style>
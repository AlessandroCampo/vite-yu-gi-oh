
<template>
    <div class="input-group">
        <input type="text" v-model="store.searchText">
        <p>Found {{ store.selectedList.length }} cards</p>
        <select name="" id="archetype" v-model="store.selectedArchetype" @change="refreshList">
            <option :value="archetype.archetype_name" v-for="(archetype, index) in store.archetypeList">
                {{ archetype.archetype_name }}
            </option>
        </select>
        <select name="" id="type" v-model="store.selectedType">
            <option value="Monster"> Monster </option>
            <option value="Spell"> Spell </option>
            <option value="Trap"> Trap </option>
            <option value=""> All </option>
        </select>
    </div>
</template>
<script>

import { store } from '../../store'
export default {
    name: "FilterSelect",
    data() {
        return {
            store
        }
    },
    methods: {
        refreshList() {
            store.selectedList = []
            store.getCards()
            // store.cardList.forEach((card) => {
            //     if (card.archetype === store.selectedArchetype) {
            //         store.selectedList.push(card)
            //     }
            // })
            // store.selectedList.sort(store.sortCards)
        }
    }
}


</script>
<style lang="scss" scoped>
.input-group {
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 70%;
    margin: 0 auto;
    background-color: #121212;
    color: white;
    margin-top: 5px;
    padding-block: 10px;

    input,
    select {
        width: 20%;
        font-size: 32px;
    }


}
</style>
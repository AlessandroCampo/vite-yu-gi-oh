
<template>
    <div class="input-group">
        <input type="text" v-model="store.searchText">
        <p>Found {{ store.cardList.length }} cards</p>
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

    input {
        width: 20%;
        font-size: 32px;
    }
}
</style>

<template>
    <header>
        <img src="../assets/img/yugi_logo.png" alt="logo">
        <h1>Yu-Gi-Oh! Api</h1>
    </header>
</template>
<script>


export default {
    name: 'AppHeader',
    data() {
        return {

        }
    },
    mounted() {
    }
}


</script>
<style lang="scss" scoped>
header {
    display: flex;
    justify-content: start;
    gap: 15px;
    padding: 30px;
    height: 10%;
    border: 2px solid black;
    align-items: center;

    h1 {
        font-size: 62px;
    }

    img {
        width: 350px;
    }
}
</style>
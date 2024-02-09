
<template>
    <div class="card">
        <img :src="card.card_images[0].image_url" alt="">
        <div class="card-info">
            <p>{{ card.name }}</p>
            <p>{{ card.type }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ["card"],
    name: 'singleCard',
    data() {
        return {}
    }
}


</script>
<style lang="scss" scoped>
.card {
    width: calc((100% - 5 * 30px) / 6);
    height: calc(50% - 10px);
    background-color: #d48f38;
    padding-bottom: 10px;

    img {
        width: 100%;

    }

    .card-info {
        text-align: center;

        font-size: 20px;

        p:first-child {
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            margin-block: 10px;
        }
    }
}
</style>
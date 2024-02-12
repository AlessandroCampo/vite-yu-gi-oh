
<template>
    <div class="card">
        <figure>
            <img :src="card.card_images[0].image_url" alt="" @load="setLoaded()">
        </figure>

        <div class="card-info">
            <p>{{ card.name }}</p>
            <p>{{ card.type }}</p>
        </div>
    </div>
</template>
<script>
import { store } from '../../../store'
export default {
    props: ["card"],
    name: 'singleCard',
    data() {
        return {}
    },
    methods: {
        async setLoaded() {
            store.loadedImgs++
            console.log(store.loading)
            if (store.loadedImgs === store.selectedList.length - 1) {
                store.loading = false
            }
        }
    }
}


</script>
<style lang="scss" scoped>
.card {
    width: calc((100% - 5 * 30px) / 6);
    height: calc(50% - 10px);
    background-color: #d48f38;
    padding-bottom: 10px;

    &:hover>figure {
        scale: 1.2;
        filter: brightness(1.25);
    }

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
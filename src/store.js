import { reactive } from "vue"
import axios from 'axios'


export const store = reactive({
    loading: true,
    searchText: "",
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cardList: [],
    selectedArchetype: "Gladiator Beast",
    archetypeList: [],
    selectedList: [],
    selectedType: "",
    loadedImgs: 0,
    getCards() {
        axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php").then((res) => {
            store.archetypeList = res.data
        })
        axios.get(store.apiURL).then((res) => {
            store.cardList = res.data.data
            store.cardList.forEach((card) => {
                if (card.archetype == store.selectedArchetype) {
                    store.selectedList.push(card)
                }
            })
            store.selectedList.sort(this.sortCards)
            console.log(store.selectedList)
            store.loading = false
        })

    },
    sortCards(a, b) {
        const order = { "Link Monster": 1, "XYZ Monster": 2, "Synchro Monster": 3, "Fusion Monster": 4, "Tuner Monster": 5, "Effect Monster": 6, "Normal Monster": 7, "Spell Card": 8, "Trap Card": 9 };
        return order[a.type] - order[b.type];
    }
})
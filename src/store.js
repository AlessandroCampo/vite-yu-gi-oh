import { reactive } from "vue"
import axios from 'axios'


export const store = reactive({
    loading: true,
    searchText: "",
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cardList: [],
    selectedArchetype: "Gladiator Beast",
    selectedList: [],
    selectedType: "",
    getCards() {
        console.log("ciao")
        axios.get(store.apiURL).then((res) => {
            store.cardList = res.data.data
            store.cardList.forEach((card) => {
                if (card.archetype == store.selectedArchetype) {
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
})
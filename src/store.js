import { reactive } from "vue"


export const store = reactive({
    loading: true,
    searchText: "",
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cardList: [],
    selectedType: "Gladiator Beast",
    selectedList: []
})
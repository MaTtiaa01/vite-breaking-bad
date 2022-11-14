import { reactive } from "vue";

export const store = reactive({
    charData: null,
    name: null,
    url: "https://www.breakingbadapi.com/api/characters",
    category: null,
    status: null,
    prova: [1, 2, 3]
})
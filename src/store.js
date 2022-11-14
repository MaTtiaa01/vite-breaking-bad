import { reactive } from "Vue";

export const store = reactive({
    charData: null,
    name: null,
    url: "https://www.breakingbadapi.com/api/characters",
    category: null,
    status: null,
})
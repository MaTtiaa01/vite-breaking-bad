import { reactive } from "vue";

export const store = reactive({
    charData: null,
    name: null,
    url: "",
    category: null,
    status: null,
    loaded: false,
})


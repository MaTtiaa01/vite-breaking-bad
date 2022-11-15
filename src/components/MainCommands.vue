<script>
import { store } from "../store.js";
export default {
    name: "MainCommands",
    data() {
        return {
            store,
            categorySelector: "",
            url: ""

        }
    },
    methods: {
        changeCategory() {

            if (this.categorySelector === "breakingBad") {
                this.url = "https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul"
            } else {
                this.url = "https://www.breakingbadapi.com/api/characters"
            }
            this.store.url = this.url
            this.store.loaded = true
        }
    },
    mounted() {
        this.changeCategory()
    }
}
</script>

<template>
    <div class="main_commands">
        <form>

            <select v-model="categorySelector" @change="changeCategory($event)">
                <option value="breakingBad">Breaking-Bad</option>
                <option value="betterCallSaul">Better Call Saul</option>
            </select>

        </form>
    </div>
</template>


<style lang="scss" scoped>
form {
    padding: 1rem 0.5rem;

    select {
        padding: 0.25rem 1rem;
        border-radius: 5px;
    }
}
</style>
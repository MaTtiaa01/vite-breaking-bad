<script>
import MainCommands from "./MainCommands.vue";
import axios from "axios";
import MainBox from "./MainBox.vue";
import { store } from "../store";
export default {
    name: "AppMain",
    components: {
        MainBox,
        MainCommands,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        callApi(url) {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.store.charData = response.data;
                    console.log(this.store.charData);
                    this.charFounded = response.data.length
                    console.log(this.charFounded);
                })
                .catch(err => {
                    console.error(err.message);
                    this.store.error = err.message
                })
        }
    },
    mounted() {
        this.callApi(this.store.url)

    }
}
</script>

<template>
    <main>
        <div class="container">
            <MainCommands @searchActor="callApi(store.url)"></MainCommands>
            <div class="characters_list">
                <MainBox></MainBox>
            </div>
        </div>
    </main>

</template>


<style lang="scss" scoped>
@use "../../node_modules/bootstrap"
</style>
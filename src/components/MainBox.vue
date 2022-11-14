<script>
import { store } from "../store";
import axios from "axios";

export default {
    name: "MainBox",
    data() {
        return {
            store,
        }
    },
    methods: {
        callApi(url) {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.store.charData = response.data;
                    console.log(this.store.charData);
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
    <div class="box">
        <div class="characters_found">ABC</div>
        <div class="cards row row-cols-2 row-cols-md-4 row-cols-lg-5">
            <div class="col" v-for="character in store.charData">
                <div class="character">
                    <img :src="character.img" alt="">
                    <h4 class="char_name">{{ character.name }}</h4>
                    <div class="description"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
// @use "../assets/scss/Variables.scss" as *;

// .box {
//     background-color: $light;
//     padding: 1rem;

// }
</style>
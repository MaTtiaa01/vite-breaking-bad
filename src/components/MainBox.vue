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
        <div class="characters_found"></div>
        <div class="cards row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4">
            <div class="col" v-for="character in store.charData">
                <div class="character">
                    <div class="thumb">

                        <img :src="character.img" alt="">
                    </div>
                    <h4 class="char_name text-white">{{ character.name }}</h4>
                    <div class="description">
                        <div class="category">{{ character.category }}</div>
                        <div class="status">{{ character.status }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use "../../node_modules/bootstrap";
@use "../assets/scss/Variables.scss" as *;

.box {
    background-color: $bb-light;
    padding: 1rem;

    .character {
        background-color: $bb-primary;
        padding: 1rem;

        .thumb {
            img {
                height: 300px;
                object-fit: cover;
            }
        }

        .description {
            margin-bottom: 1rem;

            .status,
            .category {
                color: grey;
            }
        }

    }

}
</style>
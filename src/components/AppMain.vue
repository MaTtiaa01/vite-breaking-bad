<script>
import MainBox from "./MainBox.vue";
export default {
    name: "AppMain",
    components: {
        MainBox,
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="main_commands"></div>
            <div class="characters_list">
                <MainBox></MainBox>
            </div>
        </div>
    </main>

</template>


<style lang="scss" scoped>
@use "../../node_modules/bootstrap"
</style>
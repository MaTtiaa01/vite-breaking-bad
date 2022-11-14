<script>
import MainCommands from "./MainCommands.vue";
import MainBox from "./MainBox.vue";
export default {
    name: "AppMain",
    components: {
        MainBox,
        MainCommands,
    }
}
</script>

<template>
    <main>
        <div class="container">
            <MainCommands></MainCommands>
            <div class="characters_list">
                <MainBox></MainBox>
            </div>
        </div>
    </main>

</template>


<style lang="scss" scoped>
@use "../../node_modules/bootstrap"
</style>
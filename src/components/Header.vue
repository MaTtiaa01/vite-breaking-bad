<script>
export default {
    name: "Header"
}
</script>

<template>
    <header>
        <div class="logo">
            <img src="../assets/img/Breaking_Bad_logo.svg.png" alt="">
        </div>
        <h1>Breaking Bad Api</h1>
    </header>

</template>


<style lang="scss" scoped>
@use "../assets/scss/Variables.scss" as *;

header {
    margin-bottom: 2rem;

    h1 {
        color: $bb-light;
        display: inline-block;
    }

    .logo {
        display: inline-block;
        width: 50px;
    }

}
</style>
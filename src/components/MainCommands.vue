<script>
export default {
    name: "MainCommands"
}
</script>

<template>
    <div class="main_commands">
        <form>

            <select>
                <option value="Breaking-Bad">Breaking-Bad</option>
                <option value="Rick-and-Morty">Rick-and-Morty</option>
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
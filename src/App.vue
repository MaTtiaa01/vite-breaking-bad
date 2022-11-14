<script >

import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import { store } from "./store";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store
    }
  },
  methods: {

  },
  mounted() {


  }
}
</script>

<template>
  <Header></Header>
  <!-- /header -->
  <Main></Main>

</template>

<style lang="scss" scoped>

</style>
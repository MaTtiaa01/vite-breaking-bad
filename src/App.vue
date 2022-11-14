<script >

import Header from "./components/Header.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";

export default {
  name: "App",
  components: {
    Header,
    AppMain,
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
  <AppMain></AppMain>

</template>

<style lang="scss" scoped>

</style>
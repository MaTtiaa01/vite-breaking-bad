<script >
import axios from "axios";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
    }
  },
  methods: {
    CallApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response);
        })
    }
  },
  mounted: {
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
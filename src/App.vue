<template>
  <div id="app">
    <Header />
    <Navbar />
    <GameContainer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/NavBar.vue";
import GameContainer from "./components/GameContainer.vue";
export default {
  name: "App",
  components: {
    Header,
    Navbar,
    GameContainer,
  },
  mounted() {
    this.init();
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
body {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}

h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}
</style>

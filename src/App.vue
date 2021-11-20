<template>
  <navbar @tab-changed="changeTab" />
  <home v-if="tab === 'home'" />
  <templates v-if="tab === 'templates'" />
  <settings v-if="tab === 'settings'" />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";
import Templates from "./views/Templates.vue";
import Settings from "./views/Settings.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    Templates,
    Settings,
  },
  data() {
    return {
      tab: "home",
    };
  },
  methods: {
    changeTab(tab) {
      this.tab = tab;
      console.log(tab);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

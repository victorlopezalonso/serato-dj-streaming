<template>
  <div>
    <navbar @tab-changed="changeTab" />
    <home v-show="tab === 'home'" />
    <templates v-show="tab === 'templates'" />
    <settings v-show="tab === 'settings'" />
  </div>
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

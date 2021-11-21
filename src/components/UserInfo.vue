<template>
  <div class="app-container">
    <bordered-input title="Serato Username" v-model="username" />
    <bordered-input title="Files location" v-model="filesLocation" />
  </div>
</template>

<script>
import BorderedInput from "./inputs/BorderedInput.vue";

export default {
  components: { BorderedInput },
  data() {
    return {
      username: "Carl Cox",
      filesLocation: "/Users/Carl Cox/OBS Files",
    };
  },
  methods: {},
};
</script>

<style></style>

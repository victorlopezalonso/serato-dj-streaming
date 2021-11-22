<template>
  <div class="app-container">
    <InputWithTitle title="Serato Username" v-model="username" />
    <InputWithTitle title="Files location" v-model="filesLocation" />
  </div>
</template>

<script>
import InputWithTitle from "./inputs/InputWithTitle.vue";

export default {
  components: { InputWithTitle },
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

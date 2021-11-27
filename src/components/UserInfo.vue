<template>
  <div class="app-container">
    <InputWithTitle title="Serato Username" v-model="username" disabled />
    <InputWithTitle title="Files location" v-model="filesLocation" disabled />
  </div>
</template>

<script>
import storage from "../lib/storage";
import InputWithTitle from "./inputs/InputWithTitle.vue";

export default {
  components: { InputWithTitle },
  data() {
    return {
      username: storage.getUsername(),
      filesLocation: storage.getFilesLocation(),
    };
  },
  methods: {},
};
</script>

<style></style>

<template>
  <div class="hero min-h-screen">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-neutral-content">
      <div class="max-wd-md">
        <img class="mx-auto" alt="Vue logo" src="@/assets/logo.png" />
        <h1 class="mb-5 text-5xl font-bold">{{ title }}</h1>
        <p class="mb-5 text-2xl">{{ msg }}</p>
        <span class="btn btn-primary" @click="showDialog">
          <BellIcon class="h-5 w-5 inline-block" /> open ICP dialog
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import icp from "../lib/ipc";
import { BellIcon } from "@heroicons/vue/solid";
export default {
  props: {
    title: String,
    msg: String,
  },
  components: { BellIcon },
  methods: {
    showDialog() {
      icp.showDialog("This is an electron dialog");
    },
  },
};
</script>

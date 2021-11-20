<template>
  <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
    <div class="flex-none px-2 mx-2">
      <span class="text-lg font-bold text-purple-400">SERATO STREAMING</span>
    </div>
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch lg:flex">
        <a
          v-for="(tab, key) in tabs"
          :key="{ key }"
          class="btn btn-ghost btn-lg rounded-btn"
          :class="{ 'text-green-400': selectedTab === tab.id }"
          @click="changeTo(tab.id)"
          >{{ tab.name }}</a
        >
      </div>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onchange: Object,
  },
  data() {
    return {
      selectedTab: "home",
      tabs: [
        { id: "home", name: "Home" },
        { id: "templates", name: "Templates" },
        { id: "settings", name: "Settings" },
      ],
    };
  },
  methods: {
    changeTo(tab) {
      this.selectedTab = tab.id;
      this.$emit("tab-changed", tab);
    },
  },
};
</script>

<style></style>

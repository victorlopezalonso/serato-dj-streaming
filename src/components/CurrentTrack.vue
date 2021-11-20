<template>
  <div class="shadow-2xl m-2 p-2 rounded-box">
    <div class="p-6 card border-2 border-gray-500">
      <div class="form-control" v-for="(type, key) in exportTypes" :key="key">
        <label class="cursor-pointer label" @click="checkIsManual">
          <span class="label-text text-lg font-semibold">{{ type.name }}</span>
          <input
            type="radio"
            name="opt"
            class="radio"
            :class="type.class"
            :value="type.value"
            v-model="exportType"
          />
        </label>
      </div>

      <div class="mt-4" v-if="exportType === 'automatic'">
        <button v-if="!listening" class="btn btn-primary" @click="listen">
          Start listening from Serato Live Playlists
        </button>
        <button v-if="listening" class="btn btn-secondary" @click="stop">
          Stop listening from Serato Live Playlists
        </button>
      </div>

      <div class="form-control" v-if="exportType === 'manual'">
        <label class="label">
          <span class="label-text text-lg text-accent font-semibold"
            >Track name</span
          >
        </label>
        <div class="relative">
          <input
            ref="manualInput"
            type="text"
            placeholder="Write down the trackname"
            class="w-full pr-16 input input-accent input-bordered text-lg"
          />
          <button
            @click="saveManualTrack"
            class="absolute top-0 right-0 rounded-l-none btn btn-accent"
          >
            Save
          </button>
        </div>
      </div>
    </div>

    <div v-if="currentTrack" class="alert mt-4">
      <div class="flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#2196f3"
          class="w-6 h-6 mx-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <label>Current track: {{ currentTrack }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listening: false,
      seratoTrack: null,
      manualTrack: null,
      exportType: "automatic",
      exportTypes: [
        {
          value: "automatic",
          class: "radio-primary",
          name: "Serato Live Playlists",
        },
        { value: "manual", class: "radio-accent", name: "Manual Input" },
      ],
    };
  },
  computed: {
    currentTrack() {
      if (!this.seratoTrack && !this.manualTrack) {
        return null;
      }

      return this.exportType === "automatic"
        ? this.seratoTrack
        : this.manualTrack;
    },
  },
  methods: {
    checkIsManual() {
      this.manualTrack = null;
      setTimeout(() => {
        this.exportType === "manual" && this.$refs.manualInput.focus();
      }, 300);
    },
    listen() {
      this.listening = true;
      this.seratoTrack = "Track from - Serato Live Playlists";
    },
    stop() {
      this.listening = false;
      this.seratoTrack = null;
    },
    saveManualTrack() {
      this.manualTrack = this.$refs.manualInput.value;
    },
  },
};
</script>

<style></style>

<template>
  <div class="shadow-2xl m-2 p-2 rounded-box">
    <div class="p-6 card border-2 border-gray-500">
      <div class="form-control" v-for="(type, key) in exportTypes" :key="key">
        <label class="cursor-pointer label" @click="checkIsManual">
          <span class="label-text text-lg font-semibold">{{ type.name }}</span>
          <input
            type="radio"
            name="opt"
            class="radio border-2"
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

    <Switch
      text="Export filename using uppercase"
      :checked="exportUsingUppercase"
      @switch:changed="toggleExportUsingUppercase"
    />

    <BoxAlert v-if="currentTrack">
      Current track:
      <span
        :class="{
          'text-green-500': isManual,
          'text-purple-400': isAutomatic,
        }"
        >{{ currentTrack }}</span
      >
    </BoxAlert>

    <div
      v-if="listening"
      class="p-4 mt-4 w-full text-right flex items-center justify-end"
    >
      <label class="font-medium"> Seconds to reload the track </label>
      <span class="font-mono text-6xl countdown">
        <span :style="`--value: ${countdown}`"></span>
      </span>
    </div>
  </div>
</template>

<script>
import storage from "../lib/storage";
import BoxAlert from "./containers/BoxAlert.vue";
import Switch from "./inputs/Switch.vue";
export default {
  components: { Switch, BoxAlert },
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
      exportUsingUppercase: storage.getExportInUppercase(),
      countdown: 20,
      interval: null,
    };
  },
  watch: {
    exportUsingUppercase(value) {
      storage.setExportInUppercase(value);
    },
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
    isManual() {
      return this.exportType === "manual";
    },
    isAutomatic() {
      return this.exportType === "automatic";
    },
  },
  methods: {
    toggleExportUsingUppercase() {
      this.exportUsingUppercase = !this.exportUsingUppercase;
    },
    checkIsManual() {
      this.manualTrack = null;
      this.stop();
      setTimeout(() => {
        this.exportType === "manual" && this.$refs.manualInput.focus();
      }, 300);
    },
    listen() {
      this.countdown = 20;
      this.listening = true;
      this.seratoTrack = "Track from - Serato Live Playlists";
    },
    stop() {
      this.listening = false;
      this.seratoTrack = null;
      this.interval = null;
    },
    saveManualTrack() {
      this.manualTrack = this.$refs.manualInput.value;
    },
  },
};
</script>

<style></style>

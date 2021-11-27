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
            v-model="manualTrack"
            type="text"
            placeholder="Write down the trackname"
            class="w-full pr-16 input input-accent input-bordered text-lg"
          />
          <button
            @click="updateCurrentTrack"
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
import { getLastTrackFromPlaylist } from "../lib/serato";
import { writeFile } from "../lib/filesystem";

export default {
  components: { Switch, BoxAlert },
  data() {
    return {
      listening: false,
      seratoTrack: null,
      manualTrack: null,
      currentTrack: null,
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
      countdown: null,
      countdownInterval: null,
      interval: null,
      intervalTime: storage.getIntervalTimeInMilliseconds(),
    };
  },
  computed: {
    isManual() {
      return this.exportType === "manual";
    },
    isAutomatic() {
      return this.exportType === "automatic";
    },
  },
  methods: {
    updateCurrentTrack() {
      const currentTrack =
        this.exportType === "automatic" ? this.seratoTrack : this.manualTrack;

      if (!currentTrack) {
        return;
      }

      this.currentTrack = this.exportUsingUppercase
        ? currentTrack.toUpperCase()
        : currentTrack;

      writeFile(storage.getSeratoNowPlayingFileLocation(), this.currentTrack);
    },
    toggleExportUsingUppercase() {
      this.exportUsingUppercase = !this.exportUsingUppercase;
      storage.setExportInUppercase(this.exportUsingUppercase);
      this.updateCurrentTrack();
    },
    checkIsManual() {
      this.manualTrack = null;
      this.stop();
      setTimeout(() => {
        this.exportType === "manual" && this.$refs.manualInput.focus();
      }, 300);
    },
    startCountdown() {
      clearInterval(this.countdownInterval);
      this.countdown = this.intervalTime / 1000 - 1;
      this.countdownInterval = setInterval(() => this.countdown--, 1000);
    },
    async getTracknameFromSeratoLive() {
      this.seratoTrack = await getLastTrackFromPlaylist(storage.getUsername());
      this.updateCurrentTrack();
      this.startCountdown();
    },
    listen() {
      this.listening = true;
      this.countdown = this.intervalTime / 1000;
      this.getTracknameFromSeratoLive();
      this.interval = setInterval(
        this.getTracknameFromSeratoLive,
        this.intervalTime
      );
    },
    stop() {
      this.listening = false;
      this.seratoTrack = null;
      this.interval && clearInterval(this.interval);
      this.countdownInterval && clearInterval(this.countdownInterval);
    },
    saveManualTrack() {
      this.manualTrack = this.$refs.manualInput.value;
      this.updateCurrentTrack();
    },
  },
};
</script>

<style></style>

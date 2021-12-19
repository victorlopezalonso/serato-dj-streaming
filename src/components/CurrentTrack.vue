<template>
  <div class="shadow-2xl m-2 p-2 rounded-box">
    <div class="mb-4">
      <button
        v-if="!playlistStarted"
        class="btn btn-primary w-full"
        @click="startPlaylist"
      >
        Start playlist
      </button>
      <button
        v-if="playlistStarted"
        class="btn btn-secondary w-full"
        @click="endPlaylist"
      >
        End playlist
      </button>
    </div>

    <div v-if="playlistStarted" class="p-6 card border-2 border-gray-500">
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
  </div>
  <playlist-history v-if="playlistStarted" :currentTrack="currentTrack" />
</template>

<script>
import storage from "../lib/storage";
import { getLastTrackFromPlaylist } from "../lib/serato";
import { appendFile, writeFile } from "../lib/filesystem";
import PlaylistHistory from "./PlaylistHistory.vue";

export default {
  components: { PlaylistHistory },
  emits: ["playlist-started", "playlist-updated", "playlist-ended"],
  data() {
    return {
      playlistStarted: false,
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
      appendFile(storage.getPlaylistHistoryFileLocation(), this.currentTrack);
      this.$emit("playlist-updated");
    },
    checkIsManual() {
      this.manualTrack = null;
      this.stop();
      setTimeout(() => {
        this.exportType === "manual" && this.$refs.manualInput.focus();
        this.exportType === "automatic" && this.listen();
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
      this.currentTrack = null;
      this.interval && clearInterval(this.interval);
      this.countdownInterval && clearInterval(this.countdownInterval);
    },
    saveManualTrack() {
      this.manualTrack = this.$refs.manualInput.value;
      this.updateCurrentTrack();
    },
    startPlaylist() {
      this.checkIsManual();
      this.playlistStarted = true;
      this.$emit("playlist-started");
    },
    endPlaylist() {
      this.stop();
      this.playlistStarted = false;
      this.$emit("playlist-ended");
    },
  },
};
</script>

<style></style>

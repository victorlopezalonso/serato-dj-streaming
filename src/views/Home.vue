<template>
  <div class="app-container">
    <template-dropdown :lock="playlistActive" />
    <current-track
      @playlist-started="handlePlaylistStarted"
      @playlist-updated="handlePlaylistUpdated"
      @playlist-ended="hadlePlaylistEnded"
    />
    <playlist-history v-if="playlistActive" :playlist="playlist" />
  </div>
</template>

<script>
import PlaylistHistory from "../components/PlaylistHistory.vue";
import storage from "../lib/storage";
import CurrentTrack from "./../components/CurrentTrack.vue";
import TemplateDropdown from "./../components/TemplateDropdown.vue";

export default {
  components: { CurrentTrack, TemplateDropdown, PlaylistHistory },
  data() {
    return {
      playlistActive: false,
      playlist: [],
    };
  },
  methods: {
    handlePlaylistUpdated() {
      this.playlist = storage.getCurrentPlaylist();
    },
    handlePlaylistStarted() {
      this.playlistActive = true;
      this.handlePlaylistUpdated();
    },
    hadlePlaylistEnded() {
      this.playlistActive = false;
    },
  },
};
</script>

<style></style>

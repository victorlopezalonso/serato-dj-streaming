<template>
  <div class="app-container">
    <bordered-input title="Serato Username" v-model="username" disabled />
    <alert>
      <template v-slot:icon>
        <UserCircleIcon class="w-8" />
      </template>
      <template v-slot:title>
        This username will be used to get the last track played from your live
        playlist)
      </template>
      <template v-slot:content>
        Log in into your Serato account and visit
        <a
          class="link link-accent font-bold"
          href="https://serato.com/yourplaylists"
          target="_blank"
        >
          Serato playlists
        </a>
        then open one of your playlists and grab the username added to the URL
        after <strong>https://serato.com/playlists/</strong>
      </template>
    </alert>

    <bordered-input title="Files location" v-model="filesLocation" disabled />

    <alert type="alert-warning">
      <template v-slot:icon>
        <FolderIcon class="w-8" />
      </template>
      <template v-slot:title>
        This will be the location where all your streaming files will be created
      </template>
      <template v-slot:content>
        <h4 class="font-medium">
          This will be the location where all your streaming files will be
          created
        </h4>
        <span class="text-sm text-base-content text-opacity-60 font-medium">
          These files will be created in the selected location:
          <div class="badge badge-ghost block mt-1">title.txt</div>
          <div class="badge badge-ghost block mt-1">description.txt</div>
          <div class="badge badge-ghost block mt-1">tags.txt</div>
          <div class="badge badge-ghost block mt-1">serato-now-playing.txt</div>
        </span>
      </template>
    </alert>
  </div>
</template>

<script>
import { UserCircleIcon, FolderIcon } from "@heroicons/vue/solid";
import BorderedInput from "../components/inputs/BorderedInput.vue";
import Alert from "../components/containers/Alert.vue";

export default {
  components: { UserCircleIcon, FolderIcon, BorderedInput, Alert },
  data() {
    return {
      username: "Carl Cox",
      filesLocation: "/Users/Carl Cox/OBS Files",
    };
  },
};
</script>

<style></style>

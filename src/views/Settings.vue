<template>
  <div class="app-container">
    <InputWithTitle title="Serato Username" v-model="username" />
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

    <InputWithTitle title="Files location" v-model="filesLocation" />

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
import InputWithTitle from "../components/inputs/InputWithTitle.vue";
import Alert from "../components/containers/Alert.vue";
import storage from "../lib/storage";

export default {
  components: { UserCircleIcon, FolderIcon, InputWithTitle, Alert },
  watch: {
    username(value) {
      console.log(value);
      storage.setUsername(value);
    },
    filesLocation(value) {
      storage.setFilesLocation(value);
    },
  },
  data() {
    return {
      username: storage.username,
      filesLocation: storage.getFilesLocation(),
    };
  },
};
</script>

<style></style>

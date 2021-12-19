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

    <input-with-title-and-button
      title="Files location"
      v-model="filesLocation"
      :onPress="selectLocation"
      onPressText="Select"
    />

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

    <Switch
      text="Export filename using uppercase"
      :checked="exportUsingUppercase"
      @switch:changed="toggleExportUsingUppercase"
    />
  </div>
</template>

<script>
import { UserCircleIcon, FolderIcon } from "@heroicons/vue/solid";
import InputWithTitle from "../components/inputs/InputWithTitle.vue";
import Alert from "../components/containers/Alert.vue";
import storage from "../lib/storage";
import electron from "electron";
import InputWithTitleAndButton from "../components/inputs/InputWithTitleAndButton.vue";
import Switch from "../components/inputs/Switch.vue";

export default {
  components: {
    UserCircleIcon,
    FolderIcon,
    InputWithTitle,
    Alert,
    InputWithTitleAndButton,
    Switch,
  },
  watch: {
    username(value) {
      storage.setUsername(value);
    },
    filesLocation(value) {
      storage.setFilesLocation(value);
    },
  },
  data() {
    return {
      username: storage.getUsername(),
      filesLocation: storage.getFilesLocation(),
      exportUsingUppercase: storage.getExportInUppercase(),
    };
  },
  methods: {
    async selectLocation() {
      const folder = await electron.ipcRenderer.invoke("showOpenDialog", {
        properties: ["openDirectory"],
      });

      if (folder.canceled) {
        return;
      }

      this.filesLocation = folder.filePaths[0];
      storage.setFilesLocation(folder.filePaths[0]);
    },
    toggleExportUsingUppercase() {
      this.exportUsingUppercase = !this.exportUsingUppercase;
      storage.setExportInUppercase(this.exportUsingUppercase);
    },
  },
};
</script>

<style></style>

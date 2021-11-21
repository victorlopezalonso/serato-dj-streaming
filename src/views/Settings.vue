<template>
  <div class="shadow-2xl m-2 p-2 rounded-box">
    <!-- username -->
    <div class="form-control">
      <label class="label">
        <span class="label-text text-lg font-semibold">Serato Username</span>
      </label>
      <input
        type="text"
        :value="username"
        class="input input-bordered text-lg"
      />
    </div>

    <div class="alert-info mt-2 mb-2 flex items-center rounded-box">
      <div class="p-6">
        <UserCircleIcon class="w-8" />
      </div>
      <div class="p-4">
        <h4 class="font-medium">
          This username will be used to get the last track played from your live
          playlist)
        </h4>
        <span class="text-sm text-base-content text-opacity-60 font-medium">
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
        </span>
      </div>
    </div>

    <!-- files location -->
    <div class="form-control">
      <label class="label">
        <span class="label-text text-lg font-semibold">Files location</span>
      </label>
      <input
        type="text"
        :value="filesLocation"
        class="input input-bordered text-lg"
      />
    </div>

    <div class="alert-warning mt-2 mb-2 flex items-center rounded-box">
      <div class="p-6">
        <FolderIcon class="w-8" />
      </div>
      <div class="p-4">
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
      </div>
    </div>
  </div>
</template>

<script>
import { UserCircleIcon, FolderIcon } from "@heroicons/vue/solid";

export default {
  components: { UserCircleIcon, FolderIcon },
  data() {
    return {
      username: "Carl Cox",
      filesLocation: "/Users/Carl Cox/OBS Files",
    };
  },
};
</script>

<style></style>

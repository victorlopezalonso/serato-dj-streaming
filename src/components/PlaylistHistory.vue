<template>
  <div v-if="!!playlist" class="app-container">
    <div class="form-control">
      <label class="label">
        <span class="label-text text-lg font-semibold">Playlist</span>
      </label>
    </div>
    <div class="overflow-x-auto table-compact">
      <table class="table w-full table-zebra">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in playlist" :key="key">
            <td>{{ item.artist }}</td>
            <td>{{ item.title }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    playlist: Array,
  },
};
</script>

<style></style>

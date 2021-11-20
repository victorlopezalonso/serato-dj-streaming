<template>
  <div class="shadow-2xl m-2 p-2 rounded-box">
    <!-- username -->
    <div class="form-control">
      <label class="label">
        <span class="label-text text-lg font-semibold">Username</span>
      </label>
      <input
        type="text"
        disabled="disabled"
        :value="username"
        class="input input-bordered text-lg"
      />
    </div>
    <!-- files location -->
    <div class="form-control">
      <label class="label">
        <span class="label-text text-lg font-semibold">Files location</span>
      </label>
      <input
        type="text"
        disabled="disabled"
        :value="filesLocation"
        class="input input-bordered text-lg"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Carl Cox",
      filesLocation: "/Users/Carl Cox/OBS Files",
    };
  },
  methods: {},
};
</script>

<style></style>

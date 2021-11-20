<template>
  <user-info />
  <template-dropdown />
  <current-track />
</template>

<script>
import CurrentTrack from "./../components/CurrentTrack.vue";
import TemplateDropdown from "./../components/TemplateDropdown.vue";
import UserInfo from "../components/UserInfo.vue";

export default {
  components: { CurrentTrack, TemplateDropdown, UserInfo },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>

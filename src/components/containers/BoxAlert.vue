<template>
  <div class="alert mt-4">
    <div class="flex-1 items-center">
      <InformationCircleIcon class="w-8 mr-2" />
      <label class="font-medium">
        <slot></slot>
      </label>
    </div>
  </div>
</template>

<script>
import { InformationCircleIcon } from "@heroicons/vue/solid";

export default {
  props: {
    title: String,
    type: { type: String, default: "alert-info" },
  },
  components: { InformationCircleIcon },
  data() {
    return {};
  },
  methods: {},
};
</script>

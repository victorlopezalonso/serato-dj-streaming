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
export default {
  props: {
    title: String,
    type: { type: String, default: "alert-info" },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div :class="type" class="mt-2 mb-2 flex items-center rounded-box">
    <div class="p-6">
      <slot name="icon"></slot>
      <UserCircleIcon class="w-8" />
    </div>
    <div class="p-4">
      <h4 class="font-medium">
        <slot name="title"></slot>
      </h4>
      <span class="text-sm text-base-content text-opacity-60 font-medium">
        <slot name="content" />
      </span>
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

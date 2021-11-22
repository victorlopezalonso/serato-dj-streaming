<template>
  <div class="pl-4 pr-4 pt-2 pb-2 card border-2 border-gray-500 mt-4">
    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="label-text font-medium text-lg">
          Export filename using uppercase
        </span>
        <input
          type="checkbox"
          :checked="checked"
          class="toggle toggle-accent border-2"
          @click="$emit('switch:changed')"
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    checked: Boolean,
  },
  emits: ["switch:changed"],
  data() {
    return {};
  },
  methods: {},
};
</script>

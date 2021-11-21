<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text text-lg font-semibold">{{ title }}</span>
    </label>

    <input
      v-if="!textArea"
      type="text"
      :value="modelValue"
      class="input input-bordered text-lg"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <textarea
      v-if="textArea"
      type="text"
      :value="modelValue"
      class="textarea text-lg h-40 font-medium"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    textArea: Boolean,
    modelValue: String,
  },
  emits: ["update:modelValue"],
  data() {
    return {};
  },
  methods: {},
};
</script>

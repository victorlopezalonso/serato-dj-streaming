<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text text-lg font-semibold">{{ title }}</span>
    </label>

    <div class="relative">
      <input
        v-if="!textArea"
        type="text"
        :value="modelValue"
        :disabled="disabled"
        class="input input-bordered text-lg w-full"
        @input="$emit('update:modelValue', $event.target.value)"
      />

      <textarea
        v-if="textArea"
        type="text"
        :value="modelValue"
        :disabled="disabled"
        class="textarea text-lg h-40 font-medium w-full"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <button
        v-if="onPress"
        @click="onPress"
        class="absolute top-0 right-0 rounded-l-none btn btn-primary"
      >
        {{ onPressText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    textArea: Boolean,
    disabled: Boolean,
    modelValue: String,
    onPress: Function,
    onPressText: String,
  },
  emits: ["update:modelValue"],
  data() {
    return {};
  },
  methods: {},
};
</script>

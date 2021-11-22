<template>
  <div
    class="
      card
      lg:card-side
      border-2 border-gray-500
      mt-2
      cursor-pointer
      hover:bg-gray-800
    "
    @click="$emit('template:clicked', this.template)"
  >
    <div class="card-body">
      <div
        data-tip="click to edit"
        class="tooltip tooltip-bottom tooltip-secondary text-left"
      >
        <h2 class="card-title">
          <span data-tip="hello" class="tooltip">
            <PencilAltIcon class="inline-block w-4 mr-2" />{{ template.title }}
          </span>
        </h2>
        <p>
          {{ template.description }}
        </p>
        <div class="badge badge-primary mt-3">
          {{ template.tags }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PencilAltIcon } from "@heroicons/vue/solid";

export default {
  components: { PencilAltIcon },
  props: {
    template: Object,
  },
  emits: ["template:clicked"],
  data() {
    return {};
  },
  methods: {},
};
</script>

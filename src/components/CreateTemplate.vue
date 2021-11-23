<template>
  <div id="create-template" class="modal modal-open">
    <div class="modal-box bg-gray-900">
      <div class="rounded-box">
        <InputWithTitle title="Title" v-model="template.title" />
        <InputWithTitle
          textArea
          title="Description"
          v-model="template.description"
        />
        <InputWithTitle title="Tags" v-model="template.tags" />
      </div>
      <div v-if="showWarning" class="alert alert-error mt-8">
        <div class="flex-1">
          <ExclamationIcon class="w-8 mr-2" />
          <label>All fields are required</label>
        </div>
      </div>
      <div class="modal-action">
        <div @click="createTemplate" class="btn btn-primary">Accept</div>
        <a @click="close" class="btn">Close</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ExclamationIcon } from "@heroicons/vue/solid";
import { hasMissingProperties } from "../lib/strings";
import InputWithTitle from "./inputs/InputWithTitle.vue";

export default {
  components: { ExclamationIcon, InputWithTitle },
  emits: ["template-created", "modal-closed"],
  data() {
    return {
      template: {},
      showWarning: false,
    };
  },
  mounted() {
    this.clearTemplate();
  },
  methods: {
    clearTemplate() {
      this.showWarning = false;
      this.template = { title: null, description: null, tags: null };
    },
    createTemplate() {
      if (hasMissingProperties(this.template)) {
        this.showWarning = true;
        return;
      }

      this.showWarning = false;
      this.$emit("template-created", this.template);
      this.clearTemplate();
      this.$emit("modal-closed");
    },
    close() {
      this.clearTemplate();
      this.$emit("modal-closed");
    },
  },
};
</script>

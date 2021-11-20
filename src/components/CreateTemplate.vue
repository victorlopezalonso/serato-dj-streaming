<template>
  <a href="/components/modal#create-template" class="btn btn-primary btn-block">
    <PlusCircleIcon class="w-8 mr-2" />
    New Template
  </a>
  <div id="create-template" class="modal">
    <div class="modal-box bg-gray-900">
      <div class="rounded-box">
        <div class="form-control">
          <label class="label">
            <span class="label-text text-lg">Title</span>
          </label>
          <input
            type="text"
            placeholder="title"
            class="input text-lg font-medium"
            v-model="template.title"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-lg">Description</span>
          </label>
          <textarea
            type="text"
            placeholder="description"
            class="textarea text-lg h-40 font-medium"
            v-model="template.description"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-lg">Tags</span>
          </label>
          <input
            type="text"
            placeholder="tags"
            class="input text-lg font-medium"
            v-model="template.tags"
          />
        </div>
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
import { ExclamationIcon, PlusCircleIcon } from "@heroicons/vue/solid";
import { hasMissingProperties } from "../lib/strings";

export default {
  components: { ExclamationIcon, PlusCircleIcon },
  emits: ["template-created"],
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
      window.location = "/components/modal#";
    },
    close() {
      this.clearTemplate();
      window.location = "/components/modal#";
    },
  },
};
</script>

<style></style>

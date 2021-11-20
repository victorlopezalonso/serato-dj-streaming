<template>
  <div id="update-template" class="modal">
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
            v-model="updatedTemplate.title"
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
            v-model="updatedTemplate.description"
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
            v-model="updatedTemplate.tags"
          />
        </div>
      </div>
      <div class="modal-action">
        <div @click="updateTemplate" class="btn btn-primary">Accept</div>
        <a href="/components/modal#" class="btn">Close</a>
      </div>
    </div>
  </div>
</template>

<script>
import { copy } from "./../lib/strings";

export default {
  props: {
    template: Object,
  },
  data() {
    return {
      updatedTemplate: copy(this.template),
    };
  },
  mounted() {
    console.log(this.updatedTemplate);
  },
  methods: {
    updateTemplate() {
      this.$emit("template-updated", this.updatedTemplate);
      window.location = "/components/modal#";
    },
  },
};
</script>

<style></style>

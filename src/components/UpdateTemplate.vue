<template>
  <div id="update-template" class="modal modal-open">
    <div class="modal-box bg-gray-900">
      <div class="rounded-box">
        <InputWithTitle title="Title" v-model="updatedTemplate.title" />
        <InputWithTitle
          textArea
          title="Description"
          v-model="updatedTemplate.description"
        />
        <InputWithTitle title="Tags" v-model="updatedTemplate.tags" />
      </div>

      <div v-if="!showDeleteWarning" class="modal-action">
        <div @click="showDelete" class="btn btn-secondary">Delete</div>
        <div @click="updateTemplate" class="btn btn-primary">Accept</div>
        <a @click="close" class="btn">Close</a>
      </div>

      <div v-if="showDeleteWarning" class="alert mt-4">
        <div class="flex-1">
          <label class="mx-3">
            <ExclamationIcon class="w-8 inline-block" />
            Are you sure you want to delete this template?
          </label>
        </div>
        <div class="flex-none">
          <button @click="hideDelete" class="btn btn-sm btn-ghost mr-2">
            Cancel
          </button>
          <button @click="deleteTemplate" class="btn btn-sm btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { copy } from "./../lib/strings";
import { ExclamationIcon } from "@heroicons/vue/solid";
import InputWithTitle from "./inputs/InputWithTitle.vue";

export default {
  components: { ExclamationIcon, InputWithTitle },
  props: {
    template: Object,
  },
  emits: ["template-updated", "template-deleted", "modal-closed"],
  data() {
    return {
      showDeleteWarning: false,
      updatedTemplate: copy(this.template),
    };
  },
  mounted() {
    console.log(this.updatedTemplate);
  },
  methods: {
    showDelete() {
      this.showDeleteWarning = true;
    },
    hideDelete() {
      this.showDeleteWarning = false;
    },
    updateTemplate() {
      this.$emit("template-updated", this.updatedTemplate);
      this.$emit("modal-closed");
    },
    deleteTemplate() {
      this.hideDelete();
      this.$emit("template-deleted", this.updatedTemplate);
      this.$emit("modal-closed");
    },
    close() {
      this.$emit("modal-closed");
    },
  },
};
</script>

<style></style>

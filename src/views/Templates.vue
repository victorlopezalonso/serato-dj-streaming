<template>
  <div class="app-container">
    <button
      class="btn btn-primary btn-block"
      @click="handleShowCreateTemplateModal"
    >
      <PlusCircleIcon class="w-8 mr-2" />
      New Template
    </button>
    <CreateTemplate
      v-if="showCreateTemplateModal"
      @template-created="createTemplate"
      @modal-closed="handleHideCreateTemplateModal"
    />
    <UpdateTemplate
      v-if="template"
      :template="template"
      @template-updated="updateTemplate"
      @template-deleted="deleteTemplate"
      @modal-closed="clearTemplate"
    />
    <Template
      v-for="(template, key) in templates"
      :key="key"
      :template="template"
      @template:clicked="editTemplate"
    />
  </div>
</template>

<script>
import storage from "./../lib/storage";
import { PlusCircleIcon } from "@heroicons/vue/solid";
import CreateTemplate from "../components/CreateTemplate.vue";
import UpdateTemplate from "../components/UpdateTemplate.vue";
import Template from "../components/containers/Template.vue";

export default {
  components: { CreateTemplate, UpdateTemplate, Template, PlusCircleIcon },
  data() {
    return {
      template: null,
      templates: storage.getTemplates(),
      showCreateTemplateModal: false,
    };
  },
  methods: {
    editTemplate(template) {
      this.template = template;
    },
    clearTemplate() {
      this.template = null;
    },
    handleShowCreateTemplateModal() {
      this.showCreateTemplateModal = true;
    },
    handleHideCreateTemplateModal() {
      this.showCreateTemplateModal = false;
    },
    createTemplate(template) {
      this.templates = storage.addTemplate(template);
    },
    updateTemplate(template) {
      this.templates = storage.updateTemplate(template);
      this.clearTemplate();
    },
    deleteTemplate(template) {
      this.templates = storage.deleteTemplate(template);
      this.clearTemplate();
    },
  },
};
</script>

<style></style>

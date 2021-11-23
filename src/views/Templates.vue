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
import { PlusCircleIcon } from "@heroicons/vue/solid";
import CreateTemplate from "../components/CreateTemplate.vue";
import UpdateTemplate from "../components/UpdateTemplate.vue";
import Template from "../components/containers/Template.vue";

export default {
  components: { CreateTemplate, UpdateTemplate, Template, PlusCircleIcon },
  data() {
    return {
      template: null,
      showCreateTemplateModal: false,
      templates: [
        {
          id: 1,
          title: "Morning Routine",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in ultrices lorem. Sed sollicitudin scelerisque lacinia. In a vehicula lacus, non fringilla libero.",
          tags: "#techno #dark #progressive",
        },
        {
          id: 2,
          title: "After Hours",
          description:
            "Maecenas nec odio blandit quam lacinia eleifend. Sed tempor auctor convallis. Morbi est magna, commodo nec urna quis, sagittis viverra metus. Etiam quis erat et urna semper auctor. In eu mauris eleifend, convallis sem eget, facilisis nisi. Donec molestie nulla vel nisi mollis, vestibulum luctus velit consequat. Cras tristique viverra lectus vel malesuada. Vestibulum sagittis tempus eros sed ornare. Integer ut viverra eros, id porttitor nibh. ",
          tags: "#techno #dark",
        },
      ],
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
      const lastId = this.templates.length
        ? this.templates.sort((a, b) => b.id - a.id)[0].id
        : 1;

      this.templates.push({
        id: lastId + 1,
        ...template,
      });
    },
    updateTemplate(template) {
      console.log(template);
      this.templates = this.templates.map((t) => {
        if (t.id === template.id) {
          return template;
        }

        return t;
      });

      this.clearTemplate();
    },
    deleteTemplate(template) {
      this.templates = this.templates.filter((t) => t.id !== template.id);
      this.clearTemplate();
    },
  },
};
</script>

<style></style>

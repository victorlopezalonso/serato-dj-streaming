<template>
  <div class="shadow-2xl m-2 p-2 rounded-box">
    <create-template @template-created="createTemplate" />
    <update-template
      v-if="template"
      :template="template"
      @template-updated="updateTemplate"
      @template-deleted="deleteTemplate"
      @modal-closed="clearTemplate"
    />
    <div class="overflow-y-scroll h-screen">
      <div
        class="
          card
          lg:card-side
          border-2 border-gray-500
          mt-2
          cursor-pointer
          hover:bg-gray-800
        "
        v-for="(template, key) in templates"
        :key="key"
        @click="editTemplate(template)"
      >
        <div class="card-body">
          <div
            data-tip="click to edit"
            class="tooltip tooltip-bottom tooltip-secondary text-left"
          >
            <h2 class="card-title">
              <span data-tip="hello" class="tooltip">
                <PencilAltIcon class="inline-block w-4 mr-2" />{{
                  template.title
                }}
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
    </div>
  </div>
</template>

<script>
import CreateTemplate from "../components/CreateTemplate.vue";
import { PencilAltIcon } from "@heroicons/vue/solid";
import UpdateTemplate from "../components/UpdateTemplate.vue";

export default {
  components: { CreateTemplate, UpdateTemplate, PencilAltIcon },
  data() {
    return {
      template: null,
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
    getSeparatedTags(tags) {
      return tags.split(" ");
    },
    editTemplate(template) {
      this.template = template;
      // setTimeout(() => {
      //   window.location = "/components/modal#update-template";
      // }, 300);
    },
    clearTemplate() {
      this.template = null;
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
      console.log("delete this template");
      console.log(template);
      this.templates = this.templates.filter((t) => t.id !== template.id);
      this.clearTemplate();
    },
  },
};
</script>

<style></style>

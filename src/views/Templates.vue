<template>
  <div class="shadow-2xl m-2 p-2 rounded-box">
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
</template>

<script>
import { PencilAltIcon } from "@heroicons/vue/solid";
export default {
  components: { PencilAltIcon },
  data() {
    return {
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
  },
};
</script>

<style></style>

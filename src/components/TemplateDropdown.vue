<template>
  <div class="shadow-2xl m-2 p-2 rounded-box">
    <div class="dropdown">
      <div tabindex="0" class="m-1 btn">
        <span class="text-yellow-500">
          {{ this.template?.title || "No template selected" }}</span
        >
      </div>
      <ul
        tabindex="0"
        class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
      >
        <li v-for="(template, key) in templates" :key="key">
          <a @click="selectTemplate(template)">{{ template.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      template: null,
      templates: [
        { id: 1, title: "Morning Routine" },
        { id: 2, title: "After Hours" },
      ],
    };
  },
  methods: {
    selectTemplate(template) {
      this.template = template;
    },
  },
};
</script>

<style></style>

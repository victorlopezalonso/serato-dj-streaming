<template>
  <div class="shadow-2xl m-2 p-2 rounded-box">
    <div
      :data-tip="
        lock
          ? 'you need to stop the current playlist'
          : 'click to change your template'
      "
      class="dropdown w-full tooltip tooltip-bottom tooltip-secondary text-left"
    >
      <div tabindex="0" class="m-1 btn w-full">
        <span class="text-yellow-500">
          {{ this.selectedTemplate || "No template selected" }}</span
        >
      </div>
      <ul
        v-show="!lock"
        tabindex="0"
        class="
          p-2
          shadow
          menu
          dropdown-content
          bg-base-100
          rounded-box
          w-full
          border border-gray-600
        "
      >
        <li v-for="(template, key) in templates" :key="key">
          <a @click="selectTemplate(template)">{{ template.title }}</a>
        </li>
      </ul>
    </div>
    <button class="w-0 h-0" ref="hiddenfocus" />
  </div>
</template>

<script>
import { writeFile } from "../lib/filesystem";
import storage from "../lib/storage";
export default {
  props: {
    lock: Boolean,
  },
  data() {
    return {
      selectedTemplate: storage.getSelectedTemplateTitle(),
      templates: storage.getTemplates(),
    };
  },
  methods: {
    updateFiles() {
      writeFile(
        storage.getTitleFileLocation(),
        storage.getSelectedTemplateTitle("title")
      );
      writeFile(
        storage.getDescriptionFileLocation(),
        storage.getSelectedTemplateDescription()
      );
      writeFile(
        storage.getTagsFileLocation(),
        storage.getSelectedTemplateTags()
      );
    },
    selectTemplate(template) {
      this.selectedTemplate = storage
        .setSelectedTemplate(template)
        .getSelectedTemplateTitle();

      this.updateFiles();
      this.$refs.hiddenfocus.focus();
    },
  },
};
</script>

<style></style>

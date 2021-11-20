<template>
  <a href="/components/modal#create-template" class="btn btn-primary btn-block">
    <PlusCircleIcon class="w-8 mr-2" />
    New Template
  </a>
  <div id="create-template" class="modal">
    <div class="modal-box">
      <p>NEW TEMPLATE</p>
      <div class="modal-action">
        <a href="/components/modal#" class="btn btn-primary">Accept</a>
        <a href="/components/modal#" class="btn">Close</a>
      </div>
    </div>
  </div>
</template>

<script>
import { PlusCircleIcon } from "@heroicons/vue/solid";
export default {
  components: { PlusCircleIcon },
};
</script>

<style></style>

<template>
  <div :class="`rounded-2xl  box-shadow bg-white ${customClass}`">
    <slot/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  height: {
    type: Number,
    default: "12.5rem"
  },
  customClass: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    default: ""
  }
});
</script>

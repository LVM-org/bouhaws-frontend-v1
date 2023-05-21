<template>
  <span>
    <svg
      v-if="type == 'down'"
      :height="height"
      :width="width"
      viewBox="0 0 16 9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 8.5L0 0.5H16L8 8.5Z" />
    </svg>
  </span>
</template>
  
<script   setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'left',
  },
  width: {
    type: Number,
    default: 14,
  },
  height: {
    type: Number,
    default: 14,
  },
},) 
</script>

<style lang="scss" scoped>
</style>

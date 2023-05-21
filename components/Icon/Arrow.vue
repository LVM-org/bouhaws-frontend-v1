<template>
  <span>
    <svg
      v-if="type == 'left'"
      :height="height"
      :width="width"
      viewBox="0 0 40 41"
      class="fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0007 40.9985L0.000732422 20.9985L20.0007 0.998535L23.5632 4.49853L9.56323 18.4985H40.0007V23.4985H9.56323L23.5632 37.4985L20.0007 40.9985Z"
      />
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
    default: 18,
  },
  height: {
    type: Number,
    default: 18,
  },
},) 
</script>

<style lang="scss" scoped>
</style>

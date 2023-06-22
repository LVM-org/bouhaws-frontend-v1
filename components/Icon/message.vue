<template>
  <span>  
    <svg  
      v-if="isOutlined"
      :height="height"
      :width="width"
      class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 22.75H3C2.04 22.75 1.25 21.96 1.25 21V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V16C22.75 20.42 20.42 22.75 16 22.75ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V21C2.75 21.14 2.86 21.25 3 21.25H16C19.58 21.25 21.25 19.58 21.25 16V8C21.25 4.42 19.58 2.75 16 2.75H8Z" />
      <path d="M17 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H17C17.41 8.75 17.75 9.09 17.75 9.5C17.75 9.91 17.41 10.25 17 10.25ZM14 15.25H7C6.59 15.25 6.25 14.91 6.25 14.5C6.25 14.09 6.59 13.75 7 13.75H14C14.41 13.75 14.75 14.09 14.75 14.5C14.75 14.91 14.41 15.25 14 15.25Z" />
    </svg>

    <svg
      v-else
      :height="height"
      :width="width"
      class="fill-current"
      viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0H6C2 0 0 2 0 6V19C0 19.55 0.45 20 1 20H14C18 20 20 18 20 14V6C20 2 18 0 14 0ZM12 13.25H5C4.59 13.25 4.25 12.91 4.25 12.5C4.25 12.09 4.59 11.75 5 11.75H12C12.41 11.75 12.75 12.09 12.75 12.5C12.75 12.91 12.41 13.25 12 13.25ZM15 8.25H5C4.59 8.25 4.25 7.91 4.25 7.5C4.25 7.09 4.59 6.75 5 6.75H15C15.41 6.75 15.75 7.09 15.75 7.5C15.75 7.91 15.41 8.25 15 8.25Z"/>
    </svg> 
  </span>
</template>
  
<script   setup lang="ts">
const props = defineProps({
  width: {
    type: Number,
    default: 16,
  },
  height: {
    type: Number,
    default: 16,
  },
  isOutlined: {
    type: Boolean,
    default: true
  }
},) 
</script>

<style lang="scss" scoped>
</style>

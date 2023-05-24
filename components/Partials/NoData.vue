<template>
  <div class="text-normal flex justify-center items-center w-full py-20">
    <!-- <IconSideBar :title="icon" :isActive="false"  /> -->

    <span class="ml-3">
      {{ content }}
    </span>
  </div>
</template> 

<script setup lang="ts">  
const props = defineProps({
  content: {
    type: String,
    default: "No Data found",
  },
  icon: {
    type: String,
    default: "",
  },
})

</script>

<style scoped>
</style>

<template>
  <div class="h-screen font-Kanit flex justify-evenly w-screen">
    <div
      class="flex w-full md:w-1/2 justify-center items-center h-full bg-white"
    >
      <slot />
    </div>

    <div
      class="md:w-1/2 h-full flex justify-center items-center bg-[#16120F] rounded-r-lg"
    >
      <Quotes />
    </div>
  </div>
</template>

<script setup lang="ts">   
</script>

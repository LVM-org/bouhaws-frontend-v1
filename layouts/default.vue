<template>
  <div class="bg-[#E3E3D9]">
    <PartialsTopBar />

    <div class="container mx-auto min-h-screen py-10 px-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
 </script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

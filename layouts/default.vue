<template>
  <div>
    <PartialsTopBar />

    <div class="container mx-auto h-screen py-8 px-4 bg-red-500">
      <div class="col-span-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
 </script>

<style scoped></style>

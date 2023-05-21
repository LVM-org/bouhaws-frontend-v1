<template>
  <div>test me</div>
</template>

<script setup lang="ts"> 
const modalId = ref('')
const closeModal = (id: string) => { modalId.value = "" }
const createVendor = (id: string) => { modalId.value = id }
</script>

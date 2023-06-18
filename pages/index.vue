<template>
  <Home />
</template>

<script setup lang="ts">      
onBeforeMount(() => {
  useRouter().push("/auth/login")
})
</script> 

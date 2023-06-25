<template>
 <Home/>
</template>

<script setup lang="ts">
definePageMeta({ layout: "dashboard" });
onBeforeMount(() => {
  useRouter().push("/home")
});
</script>

<template>
  <div class="container grid grid-cols-4 gap-6 py-5 px-2">
    <div v-for="exhibition in exhibitions" :key="exhibition">
      <CardExhibitionList :exhibition="exhibition" />
    </div>
  </div>
</template>

<script setup lang="ts">  
const exhibitions = ref([
  {
    id: "1",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "2",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "3",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "4",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "5",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "6",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "7",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "8",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "9",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "10",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "11",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "12",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
])
</script>
 
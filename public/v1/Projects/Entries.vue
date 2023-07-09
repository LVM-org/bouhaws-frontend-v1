<template>
  <section class="w-full py-4 px-6 bg-white rounded-lg box-shadow space-y-7">
    <h4 class="flex items-center text-2xl space-x-4 font-normal">
      <IconArrow type="left" class="text-bouhaws-blue-main" />
      <span> Project Entries </span>
    </h4>

    <div class="grid grid-cols-3 gap-4 py-5 px-2">
      <CardExhibition
        v-for="projectEntry in projectEntries"
        :key="projectEntry"
        :exhibition="projectEntry"
      />
    </div>
  </section>
</template>

<script setup lang="ts">  
const projectEntries = ref([
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
 
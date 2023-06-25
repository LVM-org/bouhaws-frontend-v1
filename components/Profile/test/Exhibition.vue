<template>
  <div>
    <div class="grid grid-cols-4 gap-6 mt-4 pb-16">
      <CardExhibition
        v-for="exhibition in exhibitions"
        :key="exhibition"
        :exhibition="exhibition"
        :hasSection="true"
      />
    </div> 
  </div>
</template>

<script setup lang="ts"> 
const exhibitions = ref([
  {
    id: "1",
    username: `ArchyScript`,
    profilePicture: `/images/gallery-project-2.png`, 
    artist: "Script is LIFE",
  },
  {
    id: "2",
    username: `ArchyScript`,
    profilePicture: `/images/gallery-project-1.png`,
    artist: "You like Script",
  },
  {
    id: "3",
    username: `ArchyScript`,
    profilePicture: `/images/gallery-project-2.png`,
    artist: "Tou like Script",
  },
  {
    id: "4",
    username: `Archy Script`,
    profilePicture: `/images/gallery-project-3.png`,
    artist: "Tou like Script",
  },
  {
    id: "5",
    username: `ArchyScript`,
    profilePicture: `/images/gallery-project-5.png`,
    artist: "Tou like Script",
  },
  {
    id: "6",
    username: `ArchyScript`,
    profilePicture: `/images/gallery-project-2.png`,
    artist: "Tou like Script",
  },
  {
    id: "7",
    username: `ArchyScript`,
    profilePicture: `/images/gallery-project-1.png`,
    artist: "Tou like Script",
  },
  {
    id: "8",
    profilePicture: `/images/gallery-project-2.png`,
    noOfLikes: "23",
    noOfComments: "32",
    title: "Test me ",
    artist: "Tou like Script",
  },
  {
    id: "9",
    username: `ArchyScript`,
    profilePicture: `/images/gallery-project-1.png`,
    artist: "Tou like Script",
  },
  {
    id: "10",
    username: `ArchyScript`,
    profilePicture: `/images/gallery-project-3.png`,
    artist: "Tou like Script",
  },
  {
    id: "11",
    username: `ArchyScript`,
    profilePicture: `/images/gallery-project-4.png`,
    artist: "Tou like Script",
  },
  {
    id: "12",
    username: `ArchyScript`,
    profilePicture: `/images/gallery-project-2.png`,
    artist: "Tou like Script",
  },
]); 
</script>

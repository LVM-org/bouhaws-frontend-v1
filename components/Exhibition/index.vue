<template>
  <div class="w-full flex flex-col">
    <div
      class="flex flex-col items-center mb-6 h-[180px] justify-center p-6 space-y-5 bg-bouhaws-blue-main"
    >
      <TypoHeaderText :custom-class="'!font-normal !text-white'" :size="'3xl'">
        Explore projects by students in the community
      </TypoHeaderText>

      <div
        class="w-2/5 mx-auto text-[#61656D] flex items-center space-x-4 px-5 bg-white rounded-[10px]"
      >
        <IconSearch />

        <input
          type="search"
          placeholder="Search"
          class="flex-1 w-full text-sm py-3 bg-transparent outline-none placeholder:font-light"
        />
      </div>
    </div>

    <div class="mx-auto container">
      <div class="flex items-center my-8 space-x-4 justify-between">
        <Tabs
          :tabs="filterOptions1"
          :activeTab="activeOption1"
          @selectTab="selectTab1"
        />

        <Tabs
          :isSpaced="false"
          :tabs="filterOptions2"
          :activeTab="activeOption2"
          @selectTab="selectTab2"
        />
      </div>

      <div class="grid grid-cols-3 gap-6 my-6">
        <CardExhibitionTypeA
          v-for="index in 3"
          :key="index"
          :exhibition="exhibitions[index]"
        />
      </div>

      <div>
        <TypoHeaderText :custom-class="'!font-normal'" :size="'3xl'">
          Trending in paintings
        </TypoHeaderText>

        <div class="grid grid-cols-4 gap-6 mt-4 pb-16">
          <CardExhibitionTypeA
            v-for="exhibition in exhibitions"
            :key="exhibition"
            :exhibition="exhibition"
            :hasSection="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeOption1 = ref("all");
const activeOption2 = ref("popular");
const filterOptions1 = ref([
  { title: "all" },
  { title: "class" },
  { title: "challenge" },
  { title: "active" },
  { title: "completed" },
]);
const filterOptions2 = ref([{ title: "popular" }, { title: "recent" }]);
const exhibitions = ref([
  {
    id: "1",
    username: `ArchyScript`,
    profilePicture: `/images/gallery-project-2.png`,
    noOfLikes: "23",
    noOfComments: "456",
    title: "Test me ",
    artist: "Script is LIFE",
  },
  {
    id: "2",
    profilePicture: `/images/gallery-project-1.png`,
    noOfLikes: "23",
    noOfComments: "456",
    title: "Test me ",
    artist: "You like Script",
  },
  {
    id: "3",
    profilePicture: `/images/gallery-project-2.png`,
    noOfLikes: "23",
    noOfComments: "456",
    title: "Test me ",
    artist: "Tou like Script",
  },
  {
    id: "4",
    profilePicture: `/images/gallery-project-3.png`,
    noOfLikes: "23",
    noOfComments: "456",
    title: "Test me ",
    artist: "Tou like Script",
  },
  {
    id: "5",
    profilePicture: `/images/gallery-project-5.png`,
    noOfLikes: "23",
    noOfComments: "456",
    title: "Test me ",
    artist: "Tou like Script",
  },
  {
    id: "6",
    profilePicture: `/images/gallery-project-2.png`,
    noOfLikes: "23",
    noOfComments: "456",
    title: "Test me ",
    artist: "Tou like Script",
  },
  {
    id: "7",
    profilePicture: `/images/gallery-project-1.png`,
    noOfLikes: "23",
    noOfComments: "456",
    title: "Test me ",
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
    profilePicture: `/images/gallery-project-1.png`,
    noOfLikes: "23",
    noOfComments: "456",
    title: "Test me ",
    artist: "Tou like Script",
  },
  {
    id: "10",
    profilePicture: `/images/gallery-project-3.png`,
    noOfLikes: "23",
    noOfComments: "456",
    title: "Test me ",
    artist: "Tou like Script",
  },
  {
    id: "11",
    profilePicture: `/images/gallery-project-4.png`,
    noOfLikes: "23",
    noOfComments: "456",
    title: "Test me ",
    artist: "Tou like Script",
  },
  {
    id: "12",
    profilePicture: `/images/gallery-project-2.png`,
    noOfLikes: "23",
    noOfComments: "456",
    title: "Test me ",
    artist: "Tou like Script",
  },
]);

const selectTab1 = (activeTab: string) => {
  activeOption1.value = activeTab;
};
const selectTab2 = (activeTab: string) => {
  activeOption2.value = activeTab;
};
</script>

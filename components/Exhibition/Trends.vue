<template>
  <div class="container  py-5 px-2">
    <div class="flex flex-col items-center mb-6 justify-center p-6 space-y-5 rounded-2xl bg-bouhaws-blue-main">
      <h4 class="text-white text-3xl">
       Explore projects by students in the community
      </h4>

      <div class="w-2/5 mx-auto text-[#61656D] flex items-center space-x-4 px-5 bg-white rounded-xl">
        <IconSearch/>

        <input type="search" placeholder="Search" class="flex-1 w-full text-sm py-3 bg-transparent outline-none" />
      </div>
    </div>

    <div class="flex items-center my-8 space-x-4 justify-between "> 
      <div class="flex   space-x-3 items-center justify-between ">
        <span v-for="filterOption in filterOptions" class="px-4 py-2 btn-box-shadow text-sm cursor-pointer   text-[#61656D] rounded-lg font-light"
          :class="activeOption == filterOption.title ? 'bg-bouhaws-semi-dark text-white ' : 'bg-white'"
          @click="activeOption = filterOption.title"
        >
          {{filterOption.title}}
        </span>
      </div>

      <div class="flex   items-center justify-between bg-white rounded-lg">
        <span v-for="filterType in filterTypes" class="px-4 py-2 text-sm cursor-pointer   text-[#61656D] rounded-lg font-light"
          :class="activeType == filterType.title ? 'bg-bouhaws-semi-dark text-white  btn-box-shadow' : 'bg-transparent'"
          @click="activeType = filterType.title"
        >
          {{filterType.title}}
        </span>
      </div>
    </div>
    
    
    <div>
      <div class="mb-6">
        <div class="grid grid-cols-3 gap-6">
          <CardExhibitionTypeA
            v-for="exhibition in 3"
            :key="exhibition"
            :exhibition="exhibition" 
          />
        </div>
      </div>
      
      <div>
        <h4>
          Trending in paintings
        </h4>
        
        <div class="grid grid-cols-4 gap-6">
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
const activeOption = ref("all") 
const activeType = ref("popular") 
const filterOptions =  ref([
  {title: 'all'},
  {title: 'class'},
  {title: 'challenge'},
  {title: 'active'},
  {title: 'completed'},
]) 
const filterTypes =  ref([
  {title: 'popular'},
  {title: 'recent'}, 
]) 
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
 
 <style>
  .btn-box-shadow {
    box-shadow: 0px 10px 34px rgba(0, 0, 0, 0.15);
  }
 </style>
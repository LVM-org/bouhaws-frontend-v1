<template>
  <div class="">
    <div class="flex flex-col items-center mb-6 sticky top-20 z-40 justify-center p-6 space-y-5  bg-bouhaws-blue-main"> 
      <TypoHeaderText :custom-class="'!font-normal !text-white'" :size="'3xl'">
        Explore challenges from brands and experts in the art community
      </TypoHeaderText>

      <div class="w-2/5 mx-auto text-[#61656D] flex items-center space-x-4 px-5 bg-white rounded-xl">
        <IconSearch/>

        <input type="search" placeholder="Search" class="flex-1 w-full text-sm py-3 bg-transparent outline-none" />
      </div>
    </div>

    <div class="mx-auto container">
      <div class=" flex items-center my-8 space-x-4 justify-between "> 
        <Tabs :tabs="filterOptions1" :activeTab="activeOption1" @selectTab="selectTab1" />
        
        <Tabs :isSpaced="false" :tabs="filterOptions2" :activeTab="activeOption2" @selectTab="selectTab2" />
      </div>
        
      <div class="grid grid-cols-2 gap-4 mt-6 pb-16">
        <CardChallengeTypeA
          v-for="challenge in challenges"
          :key="challenge"
          :challenge="challenge"
          :hasSection="true"
        />
      </div> 
    </div>
  </div>
</template>

<script setup lang="ts"> 
const activeOption1 = ref("all") 
const activeOption2 = ref("popular") 
const filterOptions1 =  ref([ 
  {title: 'all'},
  {title: 'painting'},
  {title: 'drawing'},
  {title: 'photography'},
  {title: 'sculpture'},
]) 
const filterOptions2 =  ref([
  {title: 'popular'},
  {title: 'recent'}, 
]) 
const challenges = ref([
  {
    id: "1", 
    brandName: "Brand",
    picture: `/images/gallery-project-1.png`, 
    deadline: 'Deadline in 15 days',
    posted: 'Posted 2 hours ago',
    milestone: 1, 
    title: "ArchyScript",
    gift: "100",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },  
  {
    id: "4", 
    brandName: "Brand",
    picture: `/images/gallery-project-2.png`, 
    deadline: 'Deadline in 15 days',
    posted: 'Posted 2 hours ago',
    milestone: 4,
    title: "ArchyScript",
    gift: "100",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },  
  {
    id: "2", 
    brandName: "Brand",
    picture: `/images/gallery-project-4.png`, 
    deadline: 'Deadline in 15 days',
    posted: 'Posted 2 hours ago',
    milestone: 1,
    title: "ArchyScript",
    gift: "100",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  }, 
  {
    id: "3", 
    brandName: "Brand",
    picture: `/images/gallery-project-3.png`, 
    deadline: 'Deadline in 15 days',
    posted: 'Posted 6 hours ago',
    milestone: 768,
    title: "ArchyScript",
    gift: "100",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  }, 
])

const selectTab1 = (activeTab: string) => {
  activeOption1.value = activeTab 
}
const selectTab2 = (activeTab: string) => {
  activeOption2.value = activeTab 
}
</script> 
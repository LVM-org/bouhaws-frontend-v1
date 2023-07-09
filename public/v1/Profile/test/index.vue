<template>
  <div class="px-4"> 
    <div class="mb-6"> 
      <Tabs 
        :tabs="navs"
        :activeTab="activeNav"
        @selectTab="selectTab"
        :isFullSpan="true"
        :isBtnLarge="true"
      />
    </div>

    <div class="my-2">
      <ProfileAbout v-if="activeNav == 'about'" /> 
      <ProfileCourses v-if="activeNav == 'courses'" /> 
      <ProfileExhibition v-if="activeNav == 'exhibition'" /> 
      <ProfileAchievements v-if="activeNav == 'achievements'" /> 
      <ProfileWallet v-if="activeNav == 'wallet'" /> 
      <ProfileSettings v-if="activeNav == 'settings'" /> 
    </div> 
  </div>
</template>

<script   setup lang="ts">  
const activeNav = ref("about");
const navs = ref([
  { title: "about" },
  { title: "courses" },
  { title: "exhibition" },
  { title: "achievements" },
  { title: "wallet" },
  { title: "settings" },
]); 

const selectTab = (activeTab: string) => {
  activeNav.value = activeTab;
  console.log(activeTab)
};
</script>

<style lang="scss" scoped>
</style>

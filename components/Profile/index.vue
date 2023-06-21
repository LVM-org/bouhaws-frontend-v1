<template>
  <div > 
    <div class="border"> 
      <Tabs 
        :tabs="navs"
        :activeTab="activeNav"
        @selectTab="selectTab"
        :isFullSpan="true"
        :isBtnLarge="true"
      />
    </div>

    <div>

    </div>
  esee
  </div>
</template>

<script   setup lang="ts">  
const activeNav = ref("all");
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

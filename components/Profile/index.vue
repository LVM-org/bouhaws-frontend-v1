<template>
  <div class="flex space-x-6 sticky top-[60%]"> 
    <div class="rounded-md space-y-4 box-shadow p-8  !w-[360px] h-fit bg-white">
        <TypoHeaderText
          :custom-class="'!font-normal'"
          :size="'3xl'"
        >
         Settings
        </TypoHeaderText>

        <div class=" flex-col space-y-1 border-b border-[#EBEBE5] pb-3">
          <TypoHeaderText 
            v-for="nav in navs"
            :key="nav.title" 
            :customClass="`p-1.5 !font-normal cursor-pointer hover:text-[#1A52E4] text-sm capitalize ${nav.title == activeNav ? 'text-[#1A52E4]' : 'text-[#61656D] hover:pl-3 hover:opacity-70' }`"
            @click="selectTab(nav.title)">
            {{nav.title}}
          </TypoHeaderText>
        </div>

          <div class=" border-[#EBEBE5] pb-2">
          <TypoHeaderText  customClass="py-1.5 !font-normal cursor-pointer text-[#F33] text-sm capitalize ">
            delete account
          </TypoHeaderText>
        </div>
    </div>
    
    <div class="sti cky overflow-scroll flex-1 no-scrollbar max-h-screen top-0">
      <ProfilePersonal v-if="activeNav == 'personal'" /> 
      <ProfileContacts v-if="activeNav == 'contacts'" /> 
      <ProfileNotifications v-if="activeNav == 'notifications'" /> 
      <ProfileSecurity v-if="activeNav == 'security'" />  
    </div> 
  </div>
</template>

<script   setup lang="ts">  
const activeNav = ref("personal");
const navs = ref([
  { title: "personal" },
  { title: "contacts" },
  { title: "notifications" },
  { title: "security" }, 
]); 

const selectTab = (activeTab: string) => {
  activeNav.value = activeTab;
  console.log(activeTab)
};
</script>

<style lang="scss" scoped>
</style>

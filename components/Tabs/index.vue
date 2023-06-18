import { Style } from '../../.nuxt/components';
<template>
  <div class="flex items-center"
  :class="isSpaced ? 'space-x-3 bg-transparent' : 'bg-white rounded-md' "
  >
    <Button
      v-for="(tab, index) in tabs" :key="index"
      class="!w-auto !bg-white btn-box-shadow"
      :custom-class="activeTab == tab.title && '!bg-bouhaws-semi-dark'"
      :use-slot="true"
      :padding="'py-2 px-5'" 
      @click="selectTab(tab.title)"
    >
      <TypoNormalText :custom-class="`!font-normal ${activeTab == tab.title ? '!text-white' : ' !text-[#61656D]'} `" >
         {{tab.title}}
      </TypoNormalText>
    </Button>
  </div>
</template>


<script setup lang="ts"> 
const props = defineProps({ 
  tabs: {
    type: String,
    required: true,
  },
  activeTab: {
    type: String,
    default: 'all'
  },
  isSpaced: {
    type: Boolean,
    default: true
  }
})  

const emit = defineEmits(["selectTab"]);
const selectTab = (active_tab: string) => {
  emit("selectTab", active_tab);
};
</script>


<style lang="scss">
  .btn-box-shadow  {
    box-shadow: 0px 10px 34px rgba(0, 0, 0, 0.15);
  }
</style>
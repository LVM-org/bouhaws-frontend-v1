<template>
  <div
    :class="`flex items-center ${
      isSpaced ? 'space-x-3 bg-transparent' : '-space-x-2'
    }`"
  >
    <TypoNormalText
      v-for="(tab, index) in tabs"
      :key="index"
      :custom-class="`${
        activeTab == tab.title ? 'bg-bouhaws-semi-dark z-10' : 'bg-white'
      } shadow-custom py-2 px-5 rounded-[10px] capitalize cursor-pointer`"
      @click="selectTab(tab.title)"
      :color="`${
        activeTab == tab.title ? 'text-white' : 'text-bouhaws-text-black'
      }`"
    >
      {{ tab.title }}
    </TypoNormalText>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tabs: {
    type: Object,
    required: true,
  },
  activeTab: {
    type: String,
    default: "all",
  },
  isSpaced: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["selectTab"]);
const selectTab = (active_tab: string) => {
  emit("selectTab", active_tab);
};
</script>

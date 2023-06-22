<template>
  <ImageLoader
    :photoUrl="item.image_url"
    :customClass="`col-span-1 h-[240px] rounded-[10px] flex flex-col justify-between item-start`"
  >
    <div class="w-full flex flex-row px-4 py-4"></div>
    <div
      class="w-full px-4 py-4 bg-gradient-to-t from-black rounded-b-[10px] flex flex-col space-y-1"
    >
      <div class="flex items-center flex-row space-x-2 w-full">
        <Avatar :photoUrl="item.user.photo_url" :size="'24'"></Avatar>
        <TypoNormalText :customClass="'!font-normal'" :color="'text-white'">
          {{ item.user.name }}
        </TypoNormalText>
      </div>
    </div>
  </ImageLoader>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>

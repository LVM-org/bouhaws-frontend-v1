<template>
  <ImageLoader
    :photoUrl="course.image_url"
    :customClass="`w-full h-[240px] rounded-[10px] flex flex-col justify-between item-start`"
  >
    <div class="w-full flex flex-row px-4 py-4"></div>
    <div
      class="w-full px-4 py-4 bg-gradient-to-t from-black rounded-b-[10px] flex flex-col space-y-1"
    >
      <TypoNormalText
        :color="'text-white'"
        :customClass="'!text-base !font-normal !line-clamp-1 pb-1'"
      >
        {{ course.title }}
      </TypoNormalText>

      <div class="w-full flex flex-col items-center">
        <div class="w-full h-[7px] rounded-[99px] bg-white relative">
          <div
            class="absolute top-0 left-0 rounded-[99px] h-full bg-bouhaws-green"
            :style="`width: ${course.progress}%;`"
          ></div>
        </div>
      </div>
    </div>
  </ImageLoader>
</template>

<script setup lang="ts">
const props = defineProps({
  course: {
    type: Object as () => {
      title: string;
      progress: number;
      image_url: string;
    },
    default: () => {},
  },
});
</script>

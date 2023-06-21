 
<template>
  <nuxt-link
    :to="`exhibition/${exhibition.username}`"
    class="relative rounded-md box-shadow h-[12.5rem] w-full bg-[url('~/assets/images/art.svg')] bg-no-repeat bg-cover"
  > 
    <ImageLoader
      :photoUrl="exhibition.profilePicture"
      customClass="w-full h-full rounded-[10px] flex flex-col justify-between item-start"
    > 
      <div
        class="relative h-full w-full cursor-pointer top-0 left-0 bg-bouhaws-dark bg-opacity-70 hover:bg-opacity-50 rounded-lg"
      >
        <div class="absolute bottom-0 left-0 w-full p-3"> 
          <span class="flex items-center  space-x-2">
            <img
              :src="exhibition.profilePicture"
              :alt="exhibition.username" 
              class="!h-7 !w-7 rounded-full"
            />

            <TypoNormalText :custom-class="'!font-light !text-white'" :size="'small'">
              {{exhibition.username}}
            </TypoNormalText> 
          </span>  
        </div>
      </div>
    </ImageLoader>
  </nuxt-link>
</template>

<script setup lang="ts">  
const props = defineProps({
  exhibition: {
    type: Object,
    default: {
      id: "1",
      username: `ArchyScript`,
      imageUrl: `/images/gallery-project-2.png`, 
      profilePicture: "" 
    }
  }
}) 
</script>

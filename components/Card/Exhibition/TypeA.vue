import { IconArrow } from '../../.nuxt/components';
<template>
  <nuxt-link
    :to="`exhibition/test`"
    class="relative rounded-md box-shadow border h-auto  w-full "
  > 

  <div class="relative bg-[url('~/assets/images/art.svg')] bg-no-repeat bg-cover h-[12.5rem]"> 
    <div
      class="absolute w-full h-full flex justify-end flex-col p-3  text-white cursor-pointer bottom-0 left-0 bg-bouhaws-dark bg-opacity-70 hover:bg-opacity-50 rounded-lg"
    > 
      test 
    </div> 
  </div>

  
  <div v-if="hasSection" class="w-full flex items-center justify-between space-x-2 p-3">
      <span class="flex items-center  space-x-1"> 
        <span class="text-bouhaws-gray text-sm"> feerererer </span>
      </span>

      <div class="flex items-center justify-end text-xs font-light flex-1   space-x-2">
        <span class="flex items-center space-x-1 text-bouhaws-gray">
          <IconHeart class="  bg-bouhaws-gray  text-white" />
          <span>457</span>
        </span>
          <span class="flex items-center space-x-1">
          <IconMessage class="  bg-bouhaws-gray text-white" />
          <span>64</span>
        </span>
          <IconBookmark class="  bg-bouhaws-gray text-white"  /> 
      </div> 
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">  
const props = defineProps({
  exhibition: {
    type: Object,
    default: {
      profilePicture: "",
      name: "Daniel Regha",
    }
  },
  hasSection: {
    type: Boolean,
    default: false
  }
})

const seeDetails = (id: any) => {
  useRouter().push(`/exhibition/${id}`)
}
</script>

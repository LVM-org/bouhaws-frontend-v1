import { IconArrow } from '../../.nuxt/components';
<template>
  <nuxt-link
    :to="`exhibition/test`"
    class="relative rounded-md box-shadow h-[12.5rem] w-full bg-[url('~/assets/images/art.svg')] bg-no-repeat bg-cover"
  > 
    <div
      class="relative h-full w-full cursor-pointer top-0 left-0 bg-bouhaws-dark bg-opacity-70 hover:bg-opacity-50 rounded-lg"
      @click="seeDetails('res')"
    >
      <div class="absolute bottom-0 left-0 w-full p-2">
        <div class="w-full   flex items-center justify-between space-x-2">
          <span class="flex items-center  space-x-1">
            <img
              src="~/assets/images/profile-picture.svg"
              alt=""
              class="!h-6 !w-6 rounded-full"
            />

            <span class="text-white text-sm"> Username </span>
          </span>

          <div class="flex items-center justify-end text-xs font-light flex-1   space-x-2 text-white">
            <span class="flex items-center space-x-1">
              <IconHeart />
              <span>457</span>
            </span>
             <span class="flex items-center space-x-1">
              <IconMessage />
              <span>64</span>
            </span>
              <IconBookmark /> 
          </div>

        </div>
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
  }
})

const seeDetails = (id: any) => {
  useRouter().push(`/exhibition/${id}`)
}
</script>

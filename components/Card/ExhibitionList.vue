<template>
  <div
    class="relative rounded-md box-shadow h-[12.5rem] w-full bg-[url('~/assets/images/profile-picture.svg')] bg-no-repeat bg-cover"
  >
    <div
      class="relative h-full w-full top-0 left-0 bg-bouhaws-dark bg-opacity-70 rounded-lg"
    >
      <div class="absolute bottom-0 left-0">
        <span class="flex items-center p-4 space-x-3">
          <img
            src="~/assets/images/profile-picture.svg"
            alt=""
            class="!h-8 !w-8 rounded-full"
          />

          <span class="text-white"> Username </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts"> 
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    exhibition: {
      type: Object,
      default: {
        profilePicture: "",
        name: "Daniel Regha",
      }
    }
  }
})
</script>

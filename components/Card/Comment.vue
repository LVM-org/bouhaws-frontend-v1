<template>
  <div class="flex justify-between space-x-2 text-sm">
    <img
      src="~/assets/images/profile-picture.svg"
      :alt="comment.username"
      class="!h-7 !w-7 rounded-full"
    />

    <div class="flex-col flex-1 space-y-1">
      <div class="flex space-x-3 text-sm">
        <span class="font-medium text-[#0E1011]"> {{ comment.username }}</span>
        <span class="text-[#888888] font-light"> {{ comment.datePosted }}</span>
      </div>

      <p class="text-sm pr-5 text-[#0E1011] font-light">
        {{ comment.comment }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">  
const props = defineProps({
  comment: {
    type: Object,
    default: () => { }
  }
})
</script>

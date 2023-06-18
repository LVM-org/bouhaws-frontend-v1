<template>
  <div
    class="flex items-center space-x-2.5 p-3 bg-bouhaws-dark rounded-md rounded-tl-none"
  >
    <span
      class="h-12 w-12 p-1 rounded-xl shadow bg-gradient-to-r from-bouhaws-light-green via-red-200 to-green-300"
    >
      <img
        src="~/assets/images/profile-picture.svg"
        :alt="challenge.title"
        class="w-full h-full"
      />
    </span>

    <div class="flex flex-1 flex-col text-white">
      <h6 class="font-medium text-base mb-0.5">
        {{ challenge.title }}
      </h6>

      <p class="font-extralight text-sm ">
        {{ challenge.instruction }}
      </p>

      <p class="h-1.5 mt-2 w-full relative bg-bouhaws-light-gray rounded-lg mr-1">
        <span style="width: 80%;" class="absolute top-0 left-0 h-full rounded-lg bg-bouhaws-green"></span>
        <!-- <span>
          Reward: {{ formatNumber(challenge.reward) }}
          {{ challenge.reward > 1 ? "Points" : "Point" }}
        </span>

        <span
          :class="
            challenge.completed
              ? 'text-bouhaws-green'
              : 'text-bouhaws-light-gray'
          "
        >
          <IconCheckbox />
        </span> -->
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"> 
import { formatNumber } from "~/controllers/utils"
const props = defineProps({
  challenge: {
    type: Object,
    default: () => { }
  }
})
</script>

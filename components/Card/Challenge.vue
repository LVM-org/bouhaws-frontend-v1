<template>
  <div
    class="flex items-center space-x-2.5 p-3 bg-bouhaws-dark rounded-md rounded-tl-none"
  >
    <span
      class="h-14 w-14 p-1 rounded-xl shadow bg-gradient-to-r from-bouhaws-light-green via-red-200 to-green-300"
    >
      <img
        src="~/assets/images/profile-picture.svg"
        :alt="challenge.title"
        class="w-full h-full"
      />
    </span>

    <div class="flex flex-col text-sm space-y-0.5 text-white">
      <h6 class="font-medium text-base">
        {{ challenge.title }}
      </h6>

      <p class="font-extralight">
        {{ challenge.instruction }}
      </p>

      <p class="flex items-center font-extralight space-x-2">
        <span>
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
        </span>
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

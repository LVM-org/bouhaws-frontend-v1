<template>
  <div>
    <div class="container grid grid-cols-4 gap-4 py-5 px-2">
      <!-- Left side nav -->
      <section class="col-span-1 pb-3 border bg-bouhaws-semi-dark rounded-xl">
        <!-- Header -->
        <div
          class="px-3 pb-4 mb-2 border-b border-b-[#61656D] border-opacity-70 relative w-full"
        >
          <!--  -->
          <div
            class="w-fit bg-gradient-to-r -mt-6 from-bouhaws-light-green via-bouhaws-blue-main to-bouhaws-green p-1 rounded-full flex justify-center items-center right-1/2 bottom-1/2 text-xl mx-auto font-medium"
          >
            <span
              class="w-full h-full rounded-full bg-bouhaws-semi-dark text-white px-5 py-3"
            >
              3
            </span>
          </div>

          <!--  -->
          <div>
            <div
              class="mt-5 text-sm rounded-full relative bg-bouhaws-light flex mx-auto w-5/6"
            >
              <p
                :style="{ width: getPercentageRatio(23000, 50000) + '%' }"
                class="text-white px-3 py-1 overflow-hidden rounded-full bg-bouhaws-green"
              >
                {{ formatNumber(23000) }}
              </p>

              <span
                class="absolute text-bouhaws-semi-dark right-0 top-0 flex justify-end items-center px-3 py-1"
              >
                {{ formatNumber(50000) }}
              </span>
            </div>

            <p
              class="flex items-center justify-center text-bouhaws-light w-full my-2 space-x-1 text-xs"
            >
              <span class="text-bouhaws-light-green">
                {{ formatNumber(50000 - 23000) }} points
              </span>
              <span> left to reach LEVEL 4 </span>
            </p>
          </div>
        </div>

        <!-- Body -->
        <div class="p-3 overflow-scroll no-scrollbar space-y-3 max-h-screen">
          <div v-for="challenge in challenges" :key="challenge.id">
            <CardChallengeList :challenge="challenge" />
          </div>
        </div>
      </section>

      <!-- main content -->
      <section class="col-span-2 border">eregrhejkr</section>

      <!-- right side  -->
      <section class="border col-span-1">Test</section>
    </div>
  </div>
</template>

<script setup lang="ts"> 
import { getPercentageRatio, formatNumber } from "~/controllers/utils"

const challenges = ref([
  {
    id: "1",
    title: `Challenge title`,
    reward: 1,
    instruction: `Challenge instruction`,
    imagUrl: '',
    completed: true,
  },
  {
    id: "2",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: '',
    completed: true,
  },
  {
    id: "3",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: '',
    completed: true,
  },
  {
    id: "4",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: '',
    completed: true,
  },
  {
    id: "5",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: '',
    completed: false,
  },
  {
    id: "6",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: '',
    completed: false,
  },
  {
    id: "7",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: '',
    completed: false,
  },
  {
    id: "8",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: '',
    completed: true,
  },
  {
    id: "9",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: '',
    completed: false,
  },
  {
    id: "10",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: '',
    completed: true,
  },
  {
    id: "11",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: '',
    completed: true,
  },
  {
    id: "12",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: '',
    completed: false,
  },
])
</script>

<template>
  <div>
    <div class="container grid grid-cols-4 gap-6 py-5 px-2">
      <!-- Left side nav -->
      <section
        class="col-span-1 pb-3 border bg-bouhaws-semi-dark h-fit rounded-xl"
      >
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
                :style="{ width: `${getPercentageRatio(23000, 50000)}%` }"
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
          <CardChallengeList
            v-for="challenge in challenges"
            :key="challenge.id"
            :challenge="challenge"
          />
        </div>
      </section>

      <!-- main content -->
      <section class="col-span-2 space-y-5">
        <!--  -->
        <div
          class="flex justify-between items-center space-x-4 bg-bouhaws-blue-main text-white rounded-xl py-6 px-8"
        >
          <div class="flex flex-col flex-1">
            <h4 class="text-2xl mb-2 font-medium">New events are here!</h4>

            <p class="text-sm mb-2 font-extralight">
              Participate in fun events going on right now. You’ll earn points,
              badges and other rewards. Submit and entry today and stand the
              chance to get your work voted as the best.
            </p>

            <span
              class="px-6 inline-block w-fit py-2 font-medium text-sm mt-4 rounded-lg text-bouhaws-dark bg-white"
            >
              Get Started
            </span>
          </div>

          <div>
            <IconSpinner :width="100" :height="100" />
          </div>
        </div>

        <!--  -->
        <div class="rounded-md p-6 bg-white box-shadow">
          <h4 class="text-2xl font-medium mb-4">Projects you’re on</h4>

          <div
            class="flex flex-col space-y-5 overflow-scroll no-scrollbar max-h-screen"
          >
            <CardProjectList v-for="x in 8" :key="x" />
          </div>
        </div>
      </section>

      <!-- right side  -->
      <section class="col-span-1 bg-white box-shadow h-fit pb-3 rounded-xl">
        <h4 class="p-4 border-b-2 font-medium border-b-[#EBEBE5] text-2xl mb-2">
          Feedbacks
        </h4>

        <div class="overflow-scroll p-3 no-scrollbar space-y-3 max-h-screen">
          <CardFeedbackList v-for="x in 8" :key="x" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPercentageRatio, formatNumber } from "~/controllers/utils";

const challenges = ref([
  {
    id: "1",
    title: `Challenge title`,
    reward: 1,
    instruction: `Challenge instruction`,
    imagUrl: "",
    completed: true,
  },
  {
    id: "2",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: "",
    completed: true,
  },
  {
    id: "3",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: "",
    completed: true,
  },
  {
    id: "4",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: "",
    completed: true,
  },
  {
    id: "7",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: "",
    completed: false,
  },

  {
    id: "12",
    title: `Challenge title`,
    reward: 500,
    instruction: `Challenge instruction`,
    imagUrl: "",
    completed: false,
  },
]);
</script>

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
      <section class="col-span-3 space-y-5">
        <div class="grid grid-cols-3 gap-x-4">
          <div
            class="p-6 bg-opacity-20 text-white col-span-2 box-shadow rounded-lg bg-gradient-to-br from-[#8861DE90] via-[#8861DE90] to-[#E0B4F9]"
          >
            <h3 class="uppercase mb-4 text-shadow font-bold text-3xl">
              INTERNATIONAL <br />
              WOMEN’S DAY
            </h3>

            <p class="font-light mb-5 text-sm w-3/5">
              Show your support for all the women breaking the bias by joining
              this event. Submit entries relating to the theme and stand a
              chance to get your work voted as the best.
            </p>

            <div class="flex font-light items-center space-x-8 text-sm">
              <span>200 Entries submitted </span>
              <span>Open until 20/03/23 </span>
            </div>
          </div>

          <div
            class="p-4 relative h-auto col-span-1 box-shadow rounded-lg bg-white"
          >
            <div
              class="absolute right-0 top-0 rounded-md rounded-tl-none rounded-br-none bg-[#E3E3D9] pl-4 pb-4 pr-0.5 pt-0.5"
            >
              <Button
                text="Create new event"
                customClass="!font-light !px-4 !py-2"
              />
            </div>
          </div>
        </div>

        <!-- others -->
        <div
          class="grid grid-cols-3 max-h-screen overflow-scroll no-scrollbar gap-4"
        >
          <div
            class="p-4 col-span-1 min-h-[12.5rem] bg-white box-shadow rounded-lg"
            v-for="x in 16"
            :key="x"
          >
            test {{ x }}
          </div>
        </div>
      </section>
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
 
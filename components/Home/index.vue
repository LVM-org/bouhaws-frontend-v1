<template>
  <div class="container grid grid-cols-3 gap-6 px-2">
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
          <ListProject v-for="x in 10" :key="x" />
        </div>
      </div>
    </section>

    <!-- right side  -->
    <section class="col-span-1 bg-white box-shadow h-fit pb-3 rounded-xl">
      <h4 class="p-4 border-b-2 font-medium border-b-[#EBEBE5] text-2xl mb-2">
        Feedbacks
      </h4>

      <div class="overflow-scroll p-3 no-scrollbar space-y-3 max-h-screen">
        <CardFeedback v-for="x in 10" :key="x" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

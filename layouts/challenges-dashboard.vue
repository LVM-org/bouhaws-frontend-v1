<template>
  <div class="bg-[#E3E3D9] h-screen relative font-Kanit">
    <PartialsTopBar />

    <!-- class="container mx-auto grid grid-cols-4 overflow-hidden no-scrollbar max-h-screen py-11 px-4 gap-6" -->
    <div
      class="container mx-auto flex h-[80vh] mt-4 overflow-hidden no-scrollbar p-4 space-x-6"
    >
      <!--  challenges sidebar -->
      <div class="w-72 overflow-hidden py-6 pb-0">
        <PartialsChallenges class="h-full" />
      </div>

      <!-- page content -->
      <div class="flex-1 ml-72 overflow-scroll no-scrollbar">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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

<style>
* {
  font-family: Kanit, Arial, Helvetica, sans-serif;
}
.text-shadow {
  text-shadow: 2.5px 2.5px 0px #4503a4;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
/*  */
.box-shadow {
  box-shadow: 0px 10px 34px rgba(0, 0, 0, 0.15);
}

body {
  background: linear-gradient(287.56deg, #d8d8c7 0%, #ebebe5 100%);
}
</style>

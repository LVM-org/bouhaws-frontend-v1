<template>
  <div class="bg-[#E3E3D9]">
    <PartialsTopBar />

    <div class="container mx-auto min-h-screen py-10 px-4">
      <slot />
    </div>

    <!-- <img
        src="~/assets/images/profile-picture.svg"
        :alt="challenge.title"
        class="w-full h-full"
      /> -->
  </div>
</template>

<script setup lang="ts">
 </script>

<style>
* {
  font-family: Kanit, Arial, Helvetica, sans-serif;
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
</style>

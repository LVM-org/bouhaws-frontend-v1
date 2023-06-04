<template>
  <div class="bg-[#E3E3D9]">
    <PartialsTopBar />

    <div
      class="container mx-auto grid grid-cols-4 min-h-screen py-16 px-4 gap-6"
    >
      <!--  challenges sidebar -->
      <div>
        <PartialsMilestone />
      </div>

      <!-- page content -->
      <div class="col-span-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">   </script>
 
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
</style>

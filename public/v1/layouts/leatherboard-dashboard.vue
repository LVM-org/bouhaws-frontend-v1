<template>
  <div class="bg-[#E3E3D9] h-screen font-Kanit">
    <PartialsTopBar />

    <div
      class="container mx-auto flex h-[90vh] overflow-hidden no-scrollbar py-11 px-4 space-x-6"
    >
      <!--  challenges sidebar -->
      <div class="w-72 h-full overflow-hidden py-6 pb-0">
        <PartialsLeatherboard class="h-full" />
      </div>

      <!-- page content -->
      <div class="flex-1 ml-72 overflow-scroll no-scrollbar">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<template>
  <div class="bg-[#E3E3D9] font-Kanit">
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

<script setup lang="ts"></script>

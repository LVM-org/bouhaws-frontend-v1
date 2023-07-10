<template>
  <div class="bg-[#E3E3D9] h-screen relative font-Kanit w-full flex flex-col">
    <PartialsTopBar />

    <!--  challenges sidebar -->
    <div
      class="relative lg:!w-[20%] mdlg:!w-[22%] lg:!left-[5%] mdlg:!left-[2%] top-0  flex flex-col !max-h-[80%] pb-6"
    > 
      <PartialsSideBar />
    </div>

    <div
      class="lg:!w-[70%] mdlg:!w-[74%] lg:!ml-[25%] mdlg:!ml-[24%] flex flex-row justify-center h-full overflow-y-hidden"
    >
      <div
        class="w-full overflow-scroll no-scrollbar lg:!pt-[54px] mdlg:!pt-[50px] pl-4"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

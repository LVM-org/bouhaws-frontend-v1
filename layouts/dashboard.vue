<template>
  <div class="bg-[#E3E3D9] h-screen relative font-Kanit w-full flex flex-col">
    <PartialsTopBar />

    <!--  challenges sidebar -->
    <div
      class="fixed lg:!w-[20%] mdlg:!w-[22%] lg:!left-[5%] mdlg:!left-[2%] lg:!top-[14%] mdlg:!top-[17%] flex flex-col lg:!h-[85%] mdlg:!h-[83%] pb-6"
    >
      <PartialsSideBar />
    </div>

    <!-- class="container mx-auto grid grid-cols-4 overflow-hidden no-scrollbar max-h-screen py-11 px-4 gap-6" -->
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

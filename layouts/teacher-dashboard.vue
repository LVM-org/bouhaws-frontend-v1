<template>  
  <div>
    <PartialsTopBar/>
    
     
  <div
    class="w-full sticky top-[560px] overflow-scroll no-scrollbar lg:!pt-[54px] mdlg:!pt-[50px]"
  >
    <slot />
  </div> 
  </div> 

</template>

<script setup lang="ts"></script>

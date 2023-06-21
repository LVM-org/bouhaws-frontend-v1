<template>
  <div class="space-y-8">
    <div class="box-shadow  bg-white p-6 rounded-2xl"> 
        <TypoHeaderText size="3xl" customClass="!font-normal leading-6 mb-4">
          Enrolled courses
        </TypoHeaderText> 
        
       
        <div
          class="w-full flex flex-row space-x-3 flex-nowrap no-scrollbar overflow-x-auto scrollbar-hide"
        >
          <div class="flex flex-row space-x-6 py-2 pr-4 ">
            <div
              class="flex flex-col w-[320px] py-6 px-8 bg-[#DBE7FF] space-y-4 rounded-xl"
              v-for="(index) in 6"
              :key="index"
            >
                <TypoHeaderText custom-class="!font-normal !text-[#9383FF] leading-5" size="3xl">
                    Course code
                </TypoHeaderText>

                <TypoHeaderText :custom-class="'!font-light'" size="base">
                    Course name
                </TypoHeaderText>
            </div>
          </div>
        </div> 
    </div>

    <div class="box-shadow  bg-white p-6 rounded-2xl"> 
        <TypoHeaderText size="3xl" customClass="!font-normal leading-6 mb-4">
            Previously enrolled courses
        </TypoHeaderText> 
        
       
        <div
          class="w-full flex flex-row space-x-3 flex-nowrap no-scrollbar overflow-x-auto scrollbar-hide"
        >
          <div class="flex flex-row space-x-6 py-2 pr-4 ">
            <div
              class="flex flex-col w-[320px] py-6 px-8 bg-[#FFE2C6] space-y-4 rounded-xl"
              v-for="(index) in 6"
              :key="index"
            >
                <TypoHeaderText custom-class="!font-normal !text-[#FFAF05] leading-5" size="3xl">
                    Course code
                </TypoHeaderText>

                <TypoHeaderText :custom-class="'!font-light'" size="base">
                    Course name
                </TypoHeaderText>
            </div>
          </div>
        </div> 
    </div> 
  </div>
</template>

<script setup lang="ts"></script>

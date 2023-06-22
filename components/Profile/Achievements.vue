<template>
    <div class="grid grid-cols-2 gap-6"> 
        <div class="box-shadow  bg-white p-6 rounded-2xl"> 
            <TypoHeaderText size="3xl" customClass="!font-normal leading-6 mb-4">
                Tasks
            </TypoHeaderText>  
            
            <div class="w-full flex flex-row space-x-3 flex-nowrap no-scrollbar overflow-x-auto scrollbar-hide">
                <div class="flex flex-row space-x-6 py-2 pr-4 ">
                    <div
                        class="flex flex-col space-y-3"
                        v-for="(index) in 6"
                        :key="index"
                    >
                        <ImageLoader
                            photoUrl="/images/gallery-project-1.png"
                            customClass="w-[7rem] h-[8rem] rounded-[10px] flex flex-col justify-between item-start"
                        />  

                        <TypoHeaderText :custom-class="'!font-normal !text-sm text-center'">
                            Course name
                        </TypoHeaderText>
                    </div>
                </div>
            </div> 
        </div>

         <div class="box-shadow  bg-white p-6 rounded-2xl"> 
            <TypoHeaderText size="3xl" customClass="!font-normal leading-6 mb-4">
                Project badges
            </TypoHeaderText>  
            
            <div class="w-full flex flex-row space-x-3 flex-nowrap no-scrollbar overflow-x-auto scrollbar-hide">
                <div class="flex flex-row space-x-6 py-2 pr-4 ">
                    <div
                        class="flex flex-col space-y-3"
                        v-for="(index) in 6"
                        :key="index"
                    >
                        <ImageLoader
                            photoUrl="/images/gallery-project-1.png"
                            customClass="w-[7rem] h-[8rem] rounded-[10px] flex flex-col justify-between item-start"
                        />  

                        <TypoHeaderText :custom-class="'!font-normal !text-sm text-center'">
                            Course name
                        </TypoHeaderText>
                    </div>
                </div>
            </div> 
        </div>

         <div class="box-shadow  bg-white p-6 rounded-2xl"> 
            <TypoHeaderText size="3xl" customClass="!font-normal leading-6 mb-4">
                Level up
            </TypoHeaderText>  
            
            <div class="w-full flex flex-row space-x-3 flex-nowrap no-scrollbar overflow-x-auto scrollbar-hide">
                <div class="flex flex-row space-x-6 py-2 pr-4 ">
                    <div
                        class="flex flex-col space-y-3"
                        v-for="(index) in 6"
                        :key="index"
                    >
                        <ImageLoader
                            photoUrl="/images/gallery-project-1.png"
                            customClass="w-[7rem] h-[8rem] rounded-[10px] flex flex-col justify-between item-start"
                        />  

                        <TypoHeaderText :custom-class="'!font-normal !text-sm text-center'">
                            Course name
                        </TypoHeaderText>
                    </div>
                </div>
            </div> 
        </div>

         <div class="box-shadow  bg-white p-6 rounded-2xl"> 
            <TypoHeaderText size="3xl" customClass="!font-normal leading-6 mb-4">
                Event badges
            </TypoHeaderText>  
            
            <div class="w-full flex flex-row space-x-3 flex-nowrap no-scrollbar overflow-x-auto scrollbar-hide">
                <div class="flex flex-row space-x-6 py-2 pr-4 ">
                    <div
                        class="flex flex-col space-y-3"
                        v-for="(index) in 6"
                        :key="index"
                    >
                        <ImageLoader
                            photoUrl="/images/gallery-project-1.png"
                            customClass="w-[7rem] h-[8rem] rounded-[10px] flex flex-col justify-between item-start"
                        />  

                        <TypoHeaderText :custom-class="'!font-normal !text-sm text-center'">
                            Course name
                        </TypoHeaderText>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script setup lang="ts"> 
</script>

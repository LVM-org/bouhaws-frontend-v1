<template>
<div class="flex flex-col space-y-6">
    <div class="flex space-x-6 ">
        <div class=" box-shadow flex-1 space-y-5 bg-white rounded-2xl  px-8 py-6 ">  
            <TypoHeaderText size="sm" customClass="!font-normal leading-5">
                Available balance
            </TypoHeaderText> 

            <span class="flex items-center justify-between space-x-4"> 
                <TypoHeaderText size="3xl"  customClass="!font-normal !text-4xl flex-1 !leading-5">
                    $6,400.00
                </TypoHeaderText> 

                <Button text="Withdraw" customClass="!font-extralight !text-xs" padding="py-1.5 px-4" />  
            </span> 
         </div>

       <div class=" box-shadow flex-1 space-y-5 bg-white rounded-2xl  px-8 py-6 ">  
            <TypoHeaderText size="sm" customClass="!font-normal leading-5">
               Total withdrawn
            </TypoHeaderText> 
 
                <TypoHeaderText size="3xl"  customClass="!font-normal !text-4xl flex-1 !leading-5">
                    $800.00
                </TypoHeaderText>  
         </div>
         </div> 
    
    <div class=" box-shadow  bg-white rounded-2xl !mb-6">
          <TypoHeaderText size="3xl" customClass="!font-normal px-8 py-6 border-b leading-6">
          History  
          </TypoHeaderText> 

      <div class=" px-8 py-4  flex items-center space-x-6 border-b">
        <div class="flex-1 space-y-2"> 
          <TypoHeaderText size="sm" customClass="!font-normal leading-5">
         Winner of the lorem ipsum event 
          </TypoHeaderText> 

        <span class="flex items-center space-x-4"> 
          <TypoNormalText  customClass="!font-light !text-xs !leading-3">
           March 19
          </TypoNormalText> 

          <TypoNormalText  customClass="!font-light !text-xs !leading-3">
           4hrs ago
          </TypoNormalText>
        </span>
        </div>
 
          <TypoHeaderText size="2xl" customClass="!font-normal text-[#27BA8E] leading-6">
          +10$
          </TypoHeaderText>  
      </div> 

 <div class=" px-8 py-4  flex items-center space-x-6 border-b">
        <div class="flex-1 space-y-2"> 
          <TypoHeaderText size="sm" customClass="!font-normal leading-5">
         Winner of the lorem ipsum event 
          </TypoHeaderText> 

        <span class="flex items-center space-x-4"> 
          <TypoNormalText  customClass="!font-light !text-xs !leading-3">
           March 19
          </TypoNormalText> 

          <TypoNormalText  customClass="!font-light !text-xs !leading-3">
           4hrs ago
          </TypoNormalText>
        </span>
        </div>
 
          <TypoHeaderText size="2xl" customClass="!font-normal text-[#27BA8E] leading-6">
          +10$
          </TypoHeaderText>  
      </div> 

    <div class=" px-8 py-4  flex items-center space-x-6 border-b">
        <div class="flex-1 space-y-2"> 
          <TypoHeaderText size="sm" customClass="!font-normal leading-5">
         Withdrawal
          </TypoHeaderText> 

        <span class="flex items-center space-x-4"> 
          <TypoNormalText  customClass="!font-light !text-xs !leading-3">
           March 19
          </TypoNormalText> 

          <TypoNormalText  customClass="!font-light !text-xs !leading-3">
           4hrs ago
          </TypoNormalText>
        </span>
        </div>
 
          <TypoHeaderText size="2xl" customClass="!font-normal leading-6">
          -10$
          </TypoHeaderText>  
      </div> 
 
    </div>
  </div>
</template>

<script setup lang="ts"> 
</script>

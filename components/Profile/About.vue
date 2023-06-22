<template>
  <div class="space-y-8">
    <div class="flex justify-start box-shadow space-x-6 bg-white p-8 rounded-2xl">
      <span>
        <img src="~/assets/images/profile-picture.svg"  class="h-28 w-28 rounded-full"/> 
      </span>
      
      <div class="flex-1 flex-col space-y-2 py-1">
        <TypoHeaderText size="3xl" customClass="!font-normal leading-6 mb-4">
          Firstname Lastname
        </TypoHeaderText> 
        
        <TypoNormalText  customClass="!leading-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quasi tempora nam ipsum, soluta sequi at expedita autem, earum voluptatum in, fugiat perferendis saepe enim accusamus consectetur placeat maxime unde molestias fuga quidem totam iusto. Doloribus tenetur qui vitae. Fugiat.
        </TypoNormalText>
      </div> 

      <span>
        <Button text="Edit" customClass="!font-light !text-xs" padding="py-1.5 px-4" />
      </span>
    </div>


    <div class=" box-shadow  bg-white rounded-2xl !mb-6">
      <div class=" px-8 py-4  flex space-x-6 border-b">
        <div class="flex-1 space-y-2">
          <TypoHeaderText size="xs" customClass="!font-light  !leading-3">
           School name
          </TypoHeaderText>

          <TypoHeaderText size="2xl" customClass="!font-normal leading-6">
          Art school of art
          </TypoHeaderText> 
        </div>

        <span>
          <Button text="Edit" customClass="!font-light !text-xs" padding="py-1.5 px-4"  /> 
        </span>
      </div> 

      <div class="flex-1 px-8 py-4 border-b space-y-2">
        <TypoHeaderText size="xs" customClass="!font-light  !leading-3">
          Student number
        </TypoHeaderText>

        <TypoHeaderText size="2xl" customClass="!font-normal leading-6">
          76434323124
        </TypoHeaderText> 
      </div>

      <div class="flex-1 px-8 py-4  space-y-2">
        <TypoHeaderText size="xs" customClass="!font-light  !leading-3">
          Year of enrollment
        </TypoHeaderText>

        <TypoHeaderText size="2xl" customClass="!font-normal leading-6">
          2019
        </TypoHeaderText> 
      </div> 
    </div>
  </div>
</template>

<script setup lang="ts"> 
</script>

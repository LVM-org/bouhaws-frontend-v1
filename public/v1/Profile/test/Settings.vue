<template>
<div class="grid grid-cols-2 gap-6">
     <div class=" box-shadow  bg-white rounded-2xl py-3">
          <TypoHeaderText size="4xl" customClass="!font-normal text-[28px] px-8 py-6 border-b-2 leading-6">
          History  
          </TypoHeaderText> 

        <p class=" flex items-center space-x-3  px-8 py-6  border-b-2  ">
            <TypoHeaderText size="2xl" customClass="!font-normal leading-6">
                Email
            </TypoHeaderText>  

            <IconLoader name="arrow-forward" class="!h-[1.5rem]" />
        </p>

           <p class=" flex items-center space-x-3  px-8 py-6     ">
            <TypoHeaderText size="2xl" customClass="!font-normal">
                Password
            </TypoHeaderText>  

            <IconLoader name="arrow-forward" class="!h-[1.5rem]" />
        </p>
    </div>

     <div class=" box-shadow  bg-white rounded-2xl py-3">
          <TypoHeaderText size="4xl" customClass="!font-normal text-[28px] px-8 py-6 border-b-2 leading-6">
          Notifications
          </TypoHeaderText> 

        <p class=" flex items-center justify-between space-x-3  px-8 py-6  border-b-2  ">
            <TypoHeaderText size="2xl" customClass="!font-normal leading-6">
                Push notifications
            </TypoHeaderText>  

            <!--  -->
            <Toggle :value="isPushNotification" @toggle="togglePushNotification" />
        </p> 
    </div>

     <div class=" box-shadow  bg-white rounded-2xl py-3">
          <TypoHeaderText size="4xl" customClass="!font-normal text-[28px] px-8 py-6 border-b-2 leading-6">
          Delete account 
          </TypoHeaderText> 

        <p class=" flex-col space-y-6  px-8 py-5">
            <TypoHeaderText size="base" customClass="!font-normal leading-6">
               Are you sure you want to delete your account?
            </TypoHeaderText>  

            <Button text="Delete my account" customClass="!bg-[#FF3333] !font-normal !px-7"  /> 
        </p> 
    </div>

     <div class=" box-shadow  bg-white rounded-2xl py-3">
          <TypoHeaderText size="4xl" customClass="!font-normal text-[28px] px-8 py-6 border-b-2 leading-6">
          Legal
          </TypoHeaderText> 

        <p class=" flex items-center space-x-3  px-8 py-6  border-b-2  ">
            <TypoHeaderText size="2xl" customClass="!font-normal leading-6">
                Privacy policy
            </TypoHeaderText>  

            <IconLoader name="arrow-forward" class="!h-[1.5rem]" />
        </p>

           <p class=" flex items-center space-x-3  px-8 py-6     ">
            <TypoHeaderText size="2xl" customClass="!font-normal">
                Terms and condition
            </TypoHeaderText>  

            <IconLoader name="arrow-forward" class="!h-[1.5rem]" />
        </p>
    </div>
</div>
</template>

<script setup lang="ts"> 
const isPushNotification = ref(false)

const togglePushNotification = (value: boolean) => {
    isPushNotification.value = value
}
</script>``

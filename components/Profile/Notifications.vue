<template>
  <div class="bg-white w-full rounded-md space-y-6 box-shadow p-8">
      <TypoHeaderText
          :custom-class="'!font-normal'"
          :size="'3xl'"
        >
         Notifications
        </TypoHeaderText>

 
        <div class=" flex items-center justify-between space-x-3 ">
            <TypoHeaderText size="2xl" customClass="!font-normal leading-6">
                Push notifications
            </TypoHeaderText>  

            <!--  -->
            <Toggle :value="isPushNotification" @toggle="togglePushNotification" />
        </div>  
  </div>
</template>

<script setup lang="ts"> 
const isPushNotification = ref(false)

const togglePushNotification = (value: boolean) => {
    isPushNotification.value = value
}
 </script>

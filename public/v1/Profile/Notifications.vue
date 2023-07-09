<template>
  <div class="bg-white w-full rounded-md space-y-4 box-shadow px-6 py-6">
    <TypoHeaderText :custom-class="'!font-normal'" :size="'2xl'">
      Notifications
    </TypoHeaderText>

    <div class="flex items-center justify-between space-x-3">
      <TypoNormalText customClass="!font-light leading-6">
        Push notifications
      </TypoNormalText>

      <!--  -->
      <IconLoader :name="'toggle-on'" :custom-class="'h-[24px]'" />
    </div>
  </div>
</template>

<script setup lang="ts">
const isPushNotification = ref(false);

const togglePushNotification = (value: boolean) => {
  isPushNotification.value = value;
};
</script>

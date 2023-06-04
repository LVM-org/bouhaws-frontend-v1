<template>
  <button
    :type="type"
    class="flex items-center text-white capitalize text-sm font-semibold py-4 px-6 rounded-lg"
    :disabled="disabled"
    :class="customClass"
    @click="clickBtn"
  >
    <IconSpinner v-if="loading" class="animate-spin" />

    <span :class="{ 'ml-2': hasIcon }" :style="{ fontSize: fontSize }">
      {{ loading ? "" : text }}
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "button",
  },
  hasIcon: {
    type: Boolean,
    default: true,
  },
  hasBorder: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isGray: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  fontSize: {
    type: String,
    default: "0.875rem",
  },
});

// emits
const emit = defineEmits(["click"]);
const clickBtn = () => {
  emit("click");
};
</script>

<style lang="scss" scoped>
button {
  @apply flex w-[inherit] items-center justify-center rounded-lg bg-bouhaws-blue-main text-base font-semibold text-white;
  box-shadow: 0px 2px 4px rgba(23, 206, 137, 0.07);
  font-family: "Poppins", sans-serif;

  &.hasBorder {
    @apply border bg-transparent font-medium;
  }

  &:disabled {
    @apply cursor-not-allowed;
  }

  &.isGray {
    @apply border border-solid border-[#7c8db5] text-[#7c8db5];
  }

  &.isGray.hasBorder {
    @apply border border-solid border-[#7c8db5] text-[#7c8db5];
  }

  span {
    @apply block text-sm;
  }
}
</style>

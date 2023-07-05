<template>
  <div class="bg-white w-full rounded-md space-y-6 box-shadow px-6 py-6">
    <TypoHeaderText :custom-class="'!font-normal'" :size="'2xl'">
      Contacts
    </TypoHeaderText>

    <form @submit.prevent="updateContact">
      <div class="space-y-5">
        <FormTextField
          v-model="payload.email"
          placeholder="Your email"
          customClass="bg-[#EBEBE5] !rounded-r-[12px] rounded-bl-[12px] rounded-tl-[0px] "
          :padding="'py-4 px-4'"
        />

        <FormTextField
          v-model="payload.phone_number"
          placeholder="Your phone number"
          customClass="bg-[#EBEBE5] !rounded-r-[12px] rounded-bl-[12px] rounded-tl-[0px] "
          :padding="'py-4 px-4'"
        />

        <div class="w-full flex flex-col">
          <Button
            type="submit"
            text="Submit"
            customClass="!bg-bouhaws-blue-main text-white w-full !rounded-[7px]"
            :useSlot="true"
            :padding="'!py-4'"
          >
            <TypoNormalText :custom-class="'!font-light'" :color="'text-white'">
              Save
            </TypoNormalText>
          </Button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const payload = ref({
  email: "hermanwayne@gmail.com",
  phone_number: `+90 815 489 2067`,
});

const updateContact = () => {
  console.log(payload.value);
};
</script>

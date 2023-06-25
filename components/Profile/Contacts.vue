<template>
  <div class="bg-white w-full rounded-md space-y-6 box-shadow p-8">
      <TypoHeaderText
          :custom-class="'!font-normal'"
          :size="'3xl'"
        >
         Contacts
        </TypoHeaderText>
 
          <form @submit.prevent="updateContact">
            <div class=" space-y-4">
              <FormTextField v-model="payload.email" placeholder="Txt maname" customClass="bg-[#EBEBE5]"  />
            
              <FormTextArea v-model="payload.phone_number" placeholder="Txt ewaeweeaw" customClass="bg-[#EBEBE5] !text-base !py-3"  />

              <div class="w-full flex flex-col">
                <Button
                  type="submit"
                  text="Submit"
                  customClass="!bg-bouhaws-blue-main text-white w-full"
                  :useSlot="true"
                  :padding="'py-3'"
                >
                  <TypoNormalText
                    :custom-class="'!font-normal'"
                    :color="'text-white'"
                  >
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
  email: "Oluwatoyin Script",
  phone_number: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, et veniam laudantium nostrum eos labore in, praesentium quae iusto facilis eaque consectetur neque sint amet officia voluptas deleniti delectus sunt?`
})

const updateContact = () => {
  console.log(payload.value)
}

</script>

<template>
  <div class="bg-white w-full rounded-md space-y-6 box-shadow p-8">
      <TypoHeaderText
          :custom-class="'!font-normal'"
          :size="'3xl'"
        >
         Security
        </TypoHeaderText>

        <form @submit.prevent="updatePassword">
          <div class=" space-y-4">
            <FormTextField v-model="payload.current_password" placeholder="Current password" customClass="bg-[#EBEBE5]"  />
            <FormTextField v-model="payload.new_password" placeholder=" new wpassword" customClass="bg-[#EBEBE5]"  />
            <FormTextField v-model="payload.confirm_new_password" placeholder="conirm new wpassword" customClass="bg-[#EBEBE5]"  />
            
            <div class="w-full flex flex-col">
              <Button
                type="submit"
                text="Submit"
                customClass="!bg-bouhaws-blue-main text-white w-full"
                :useSlot="true"
                :padding="'!py-3'"
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
  current_password: "",
  new_password: "",
  confirm_new_password: "",
 })

const updatePassword = () => {
  console.log(payload.value)
}
 </script>

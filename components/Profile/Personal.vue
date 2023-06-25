<template>
  <div class="bg-white w-full rounded-md space-y-6 box-shadow p-8">
      <TypoHeaderText
          :custom-class="'!font-normal'"
          :size="'3xl'"
        >
         Personal
        </TypoHeaderText>

        <div class=" space-y-6"> 
          <div class="w-fit h-fit relative rounded"> 
            <Avatar :photoUrl="'/images/profile-info.png'" :size="'180'" />

            <span class=" flex justify-center items-center absolute bottom-2 -right-3 bg-black p-3 rounded-full">
              <IconLoader name="camera-light" customClass="h-5" />
            </span>
          </div>

          <form @submit.prevent="updateProfile">
            <div class=" space-y-4">
              <FormTextField v-model="payload.name" placeholder="Txt maname" customClass="bg-[#EBEBE5]"  />
            
              <FormTextArea v-model="payload.about" placeholder="Txt ewaeweeaw" customClass="bg-[#EBEBE5] !text-base !py-3"  />

              <div class="w-full flex flex-col pt-2">
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
  </div>
</template>

<script setup lang="ts"> 
const payload = ref({
  name: "Oluwatoyin Script",
  about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, et veniam laudantium nostrum eos labore in, praesentium quae iusto facilis eaque consectetur neque sint amet officia voluptas deleniti delectus sunt?`
})

const updateProfile = () => {
  console.log(payload.value)
}
 </script>

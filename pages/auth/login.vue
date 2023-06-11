<template>
  <div class="flex flex-col mx-auto max-w-xl w-3/5">
    <div class="mb-4">
      <h1 class="mb-2 pb-1 -ml-7 flex items-center space-x-3">
        <IconArrow
          type="left"
          @click="router.go(-1)"
          class="text-bouhaws-blue-main mt-1 p-1.5"
        />

        <span class="text-5xl font-semibold leading-8">Log In</span>
      </h1>

      <p class="font-normal opacity-90">Welcome back!</p>
    </div>

    <div class="w-full mt-1">
      <form class="space-y-6" @submit.prevent="login">
        <div>
          <input
            id="email"
            type="email"
            class="px-5 py-4 rounded-tl-none w-full bg-[#EBEBE5] text-[#A0A1A3] rounded-lg border-0 outline-none"
            name="email"
            placeholder="Email"
            v-model="payload.email"
          />
        </div>

        <div>
          <input
            id="password"
            type="password"
            class="flex-grow px-5 py-4 w-full rounded-tl-none bg-[#EBEBE5] text-[#A0A1A3] rounded-lg border-0 outline-none"
            name="password"
            v-model="payload.password"
            placeholder="Password"
          />
        </div>

        <div class="flex flex-col pt-4">
          <Button type="submit" text="Login" />
        </div>
      </form>

      <p class="text-sm text-center mt-3">
        Don’t have an account?
        <nuxt-link to="/auth/register" class="no-underline text-[#336DFF]">
          Register
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">  
definePageMeta({ layout: "auth" });
const router = useRouter()

const payload = ref({
  email: "",
  password: ""
})

const login = () => {
  console.log(payload.value)
}

</script>

<style scoped>
input {
  @apply opacity-80;
}
</style>

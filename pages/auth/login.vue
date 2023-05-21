<template>
  <div class="flex flex-col mx-auto max-w-xl w-3/5">
    <div class="mb-4">
      <h1 class="mb-1.5 pb-1 relative">
        <span class="text-5xl font-medium">Log In</span>

        <span
          class="absolute text-bouhaws-blue-main left-0 bottom-1/2 h-full flex justify-center -m-8"
        >
          <IconArrow
            type="left"
            @click="router.go(-1)"
            class="flex justify-center w-full h-full items-center"
          />
        </span>
      </h1>

      <p class="text-base">Welcome back!</p>
    </div>

    <div class="w-full mt-1">
      <form class="space-y-5" @submit.prevent="login">
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

        <div class="flex flex-col mt-8">
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
definePageMeta({
  layout: "auth",
});
const router = useRouter()

const payload = ref({
  email: "",
  password: ""
})

const login = () => {
  console.log(payload.value)
}

</script>

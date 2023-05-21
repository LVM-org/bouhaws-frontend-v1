<template>
  <div class="flex flex-col mx-auto max-w-xl w-3/5">
    <div class="mb-4">
      <h1 class="mb-1.5 pb-1 relative">
        <span class="text-5xl font-medium">
          {{ isReadyToRegister ? "Almost done..." : "Register" }}
        </span>

        <span
          class="absolute text-bouhaws-blue-main left-0 bottom-1/2 h-full flex justify-center -m-8"
        >
          <IconArrow
            type="left"
            class="flex justify-center w-full h-full items-center cursor-pointer"
            @click="
              isReadyToRegister ? (isReadyToRegister = false) : router.go(-1)
            "
          />
        </span>
      </h1>

      <p class="text-base">
        {{
          isReadyToRegister
            ? "Tell us about your school"
            : "Let’s set up your account"
        }}
      </p>
    </div>

    <div class="w-full mt-1">
      <!-- first registration phase -->
      <div v-if="!isReadyToRegister" class="space-y-5">
        <div>
          <input
            id="username"
            type="text"
            class="px-5 py-4 rounded-tl-none w-full bg-[#EBEBE5] text-[#A0A1A3] rounded-lg border-0 outline-none"
            name="username"
            placeholder="Username"
            v-model="payload.username"
          />
        </div>

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
          <Button text="Continue" @click="isReadyToRegister = true" />
        </div>

        <!--  -->
        <p class="text-sm text-center text-bouhaws-gray mt-3">
          Already have an account?
          <nuxt-link to="/auth/login" class="no-underline text-[#336DFF]">
            Log in
          </nuxt-link>
        </p>
      </div>

      <!-- final registration process -->
      <form v-else class="space-y-5" @submit.prevent="register">
        <div class="relative">
          <select
            name="school_name"
            id="school_name"
            placeholder="Password"
            class="px-5 py-4 rounded-tl-none w-full bg-[#EBEBE5] text-[#A0A1A3] rounded-lg border-0 outline-none"
          >
            <option selected disabled>School name</option>
            <option value="US">United States</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div>
          <input
            id="student_number"
            type="text"
            class="flex-grow px-5 py-4 w-full rounded-tl-none bg-[#EBEBE5] text-[#A0A1A3] rounded-lg border-0 outline-none"
            name="student_number"
            v-model="payload.student_number"
            placeholder="Student number"
          />
        </div>

        <div class="relative">
          <select
            name="year_of_enrollment"
            id="year_of_enrollment"
            placeholder="Year of enrollment<"
            class="px-5 py-4 rounded-tl-none w-full bg-[#EBEBE5] text-[#A0A1A3] rounded-lg border-0 outline-none"
          >
            <option selected disabled>Year of enrollment</option>
            <option value="US">2012</option>
            <option value="DE">2013</option>
          </select>
        </div>
        <!--  -->
        <p class="text-sm text-center mt-3 text-bouhaws-gray">
          <nuxt-link to="/policy/terms" class="no-underline text-[#336DFF]">
            Conditions of Use
          </nuxt-link>
          and
          <nuxt-link
            to="/policy/conditions"
            class="no-underline text-[#336DFF]"
          >
            Terms
          </nuxt-link>
        </p>

        <div class="flex w-full mt-8">
          <Button type="submit" text="Done" />
        </div>
      </form>
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
  password: "",
  username: ""
})

const studentDetails = ref({
  school_name: "",
  student_number: "",
  year_of_enrollment: ""
})

const isReadyToRegister = ref(false)



const register = () => {
  console.log(payload.value)
}

</script>

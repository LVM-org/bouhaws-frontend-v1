<template>
  <nuxt-link
    :to="`exhibition/test`"
    class="relative rounded-md box-shadow h-[12.5rem] w-full bg-[url('~/assets/images/art.svg')] bg-no-repeat bg-cover"
  >
    <!-- :to="`exhibition/${project.id}`" -->
    <div
      class="relative h-full w-full cursor-pointer top-0 left-0 bg-bouhaws-dark bg-opacity-70 hover:bg-opacity-50 rounded-lg"
      @click="seeDetails('res')"
    >
      <div class="absolute bottom-0 left-0">
        <span class="flex items-center p-4 space-x-3">
          <img
            src="~/assets/images/profile-picture.svg"
            alt=""
            class="!h-8 !w-8 rounded-full"
          />

          <span class="text-white"> Username </span>
        </span>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">  
const props = defineProps({
  exhibition: {
    type: Object,
    default: {
      profilePicture: "",
      name: "Daniel Regha",
    }
  }
})

const seeDetails = (id: any) => {
  useRouter().push(`/exhibition/${id}`)
}
</script>

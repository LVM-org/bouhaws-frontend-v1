<template>
  <nav
    class="w-screen text-neutral-800 bg-white mx-auto sticky z-40 top-0 -mt-0 shadow-md"
  >
    <div
      class="w-full flex container relative bg-white px-8 mx-auto items-center justify-between py-4"
    >
      <div class="flex-shrink-0 flex items-center justify-between">
        <nuxt-link
          to="/home"
          class="text-2xl select-none cursor-pointer font-medium text-bouhaws-gray"
        >
          BOUHAWS
        </nuxt-link>
      </div>

      <div class="flex-1 flex pl-12 space-x-4 xl:space-x-8">
        <ul class="w-full h-auto flex items-center space-x-5">
          <li v-for="navLink in navLinks" :key="navLink.title">
            <nuxt-link
              :to="navLink.route"
              class="py-2 capitalize text-sm space-x-3 px-6 rounded-lg flex items-center"
              :class="
                activeRoute.includes(navLink.route)
                  ? 'text-bouhaws-blue-main'
                  : 'text-bouhaws-gray'
              "
            >
              <span
                :class="
                  activeRoute.includes(navLink.route)
                    ? 'text-bouhaws-blue-main'
                    : 'text-bouhaws-gray'
                "
              >
                <IconTopBar :title="navLink.title" />
              </span>

              <span class="font-medium">
                {{ navLink.title }}
              </span>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="space-x-5 flex items-center justify-center">
        <span class="text-bouhaws-gray">
          <IconTopBar title="notifications" />
        </span>

        <span class="h-12 w-12 border rounded-full">
          <img src="~/assets/images/profile-picture.svg" />
        </span>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts" >  
const navLinks = ref([
  {
    title: 'home',
    route: '/home',
  },
  {
    title: 'projects',
    route: '/projects',
  },
  {
    title: 'events',
    route: '/events',
  },
  {
    title: 'exhibition',
    route: '/exhibition',
  },
  {
    title: 'courses',
    route: '/courses',
  },
])

const activeRoute = computed(() => useRoute().fullPath)

</script>

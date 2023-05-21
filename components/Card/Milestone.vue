<template>
  <nav
    class="w-screen text-neutral-800 bg-white mx-auto sticky z-40 top-0 -mt-0 shadow-xl"
  >
    <div
      class="w-full flex container relative bg-white px-8 mx-auto items-center justify-between py-4"
    >
      <div class="flex-shrink-0 flex items-center justify-between">
        <span class="text-2xl font-semibold text-bohwas-gray"> BOUHAWS </span>
      </div>

      <div class="flex-1 flex pl-12 space-x-4 xl:space-x-8">
        <ul
          class="w-full h-auto flex items-center pb-4 lg:pb-0 lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <li v-for="navLink in navLinks" :key="navLink.title">
            <router-link
              :to="navLink.route"
              class="md:px-4 py-2 text-sm space-x-2 rounded-lg flex items-center"
              :class="
                navLink.route == activeRoute
                  ? 'text-blue-600'
                  : 'text-green-700'
              "
            >
              <span
                :class="
                  navLink.route == activeRoute
                    ? 'text-blue-600'
                    : 'text-green-700'
                "
              >
                <TopBarIcons :title="navLink.title" />
              </span>

              <span>
                {{ navLink.title }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="space-x-3 flex items-center justify-center">
        <span>
          <TopBarIcons title="notifications" />
        </span>

        <span class="h-14 w-14 border">
          <img src="" alt="" />
        </span>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from "vue-router";
import TopBarIcons from "../components/Icon/TopBar.vue";

export default defineComponent({
  components: {
    TopBarIcons
  },

  setup() {
    const navLinks = ref([
      {
        title: 'home',
        route: '/',
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

    return {
      navLinks, activeRoute
    }
  },
})
</script>

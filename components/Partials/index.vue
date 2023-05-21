<template>
  <div>
    <TopBarVue />

    <div class="container h-screen my-64 bg-red-500">
      <div class="grid grid-cols-5 w-full h-full p-12 mt-12 bg-red-500">
        <div class="col-span-1">
          <LeftSideBar />
        </div>
 
        <div class="col-span-4">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"> 
import { defineComponent } from "vue";
import LeftSideBar from "./LeftSideBar.vue";
import TopBarVue from "./TopBar.vue";

export default defineComponent({
  components: {
    LeftSideBar, TopBarVue
  },
  setup() {
    return {

    }
  }
})
</script>

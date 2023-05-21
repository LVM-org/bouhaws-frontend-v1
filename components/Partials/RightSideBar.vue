<template>
  <div class="about">
    <h1>
      This is an about pag 3e Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Soluta non nemo modi odit pariatur. In iste eos corporis
      exercitationem ratione iure ducimus magnam deserunt sint, ad laboriosam,
      soluta optio officia?
    </h1>
  </div>
</template>

<script lang="ts"> 
import { defineComponent, ref } from "vue";
import IconSideBar from "../components/Icon/TopBar.vue";

export default defineComponent({
  setup() {
    const links = ref([
      {
        path: '/',
        name: 'Home',
      },
      {
        path: '/events',
        name: 'Events',
      },
      {
        path: '/courses',
        name: 'Courses',
      },
      {
        path: '/projects',
        name: 'Projects',
      },
      {
        path: '/exhibitions',
        name: 'Exhibitions',
      },
    ])

    return {
      links
    }
  }
})
</script>

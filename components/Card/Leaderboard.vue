<template>
  <div>
    <span>
      <img :src="user.imgUrl" alt="" />
    </span>

    <span>
      {{ user.name }}
    </span>

    <span>
      {{ user.score }}
    </span>
  </div>
</template>

<script lang="ts"> 
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    user: {
      type: Object,
      default: {
        imgUrl: "",
        name: "Daniel Regha",
        score: 700
      }
    }
  }
})
</script>

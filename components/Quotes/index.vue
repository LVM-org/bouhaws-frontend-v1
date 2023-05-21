<template>
  <div
    class="max-w-sm m-auto text-white p-20 flex flex-col px-8 justify-center space-y-6 items-center bg-gradient-to-b from-[#16120F] to-[#292F33] rounded-3xl rounded-tl-none"
  >
    <div class="flex justify-center items-center">
      <div class="w-32 h-28 relative bg-[#16120F] rounded-2xl rounded-tl-none">
        <!--  -->
        <span
          class="w-28 h-28 rounded-full bg-[#E6D6FF] absolute bottom-1/4 right-1/3"
        >
        </span>
      </div>
    </div>

    <div class="text-white pt-5 font-medium text-sm mx-auto">
      <p>“{{ quotes[0].quote }}</p>

      <span class="flex justify-end"> ~ {{ quotes[0].author }} </span>
    </div>
  </div>
</template>

<script   setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'image'
  },
  imageUrl: {
    type: String,
    default: 'left',
  },
  quote: {
    type: String,
    default: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit perspiciatis magnam veritatis. Hic necessitatibus rem tempora alias, vel porro dicta.`,
  },
  author: {
    type: String,
    default: `Oluwatoyin Script`,
  },
},)


const quotes = ref([
  {
    author: `Pablo Picasso`,
    quote: `We artists are indestructible; even in a prison, or in a concentration camp, I would be almighty in my own world of art`,
  },
  {
    author: `Seth Godin`,
    quote: `Art is a personal gift that changes the recipient. The medium doesn't matter. The intent does.`,
  },
])
</script>

<style lang="scss" scoped>
</style>

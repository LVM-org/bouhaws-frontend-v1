<template>
  <image-loader
    :photo-url="photoUrl"
    :custom-class="`rounded-md flex text-xs uppercase font-semibold bg-opacity-10 flex-row items-center cursor-pointer justify-center ${customClass} `"
    :custom-style="`width: ${size}px; height: ${size}px;`"
    @click.stop="goToRoute('/profile/id')"
  >
    <template v-if="photoUrl == ''">
      <slot />
    </template>
  </image-loader>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ImageLoader from "../ImageLoader/index.vue";

export default defineComponent({
  components: {
    ImageLoader,
  },
  props: {
    size: {
      type: String,
      default: "50",
    },
    photoUrl: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "",
    },
  },
  name: "Avatar",
  setup() {
    const router = useRouter();

    const goToRoute = (path: string) => {
      router.push(path);
    };

    return {
      goToRoute,
    };
  },
});
</script>

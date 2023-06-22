<template>
  <section
    class="col-span-3 py-6 px-6 bg-white box-shadow rounded-[10px] flex flex-col space-y-3"
  >
    <div class="flex flex-row justify-between items-center">
      <TypoHeaderText :custom-class="'!text-2xl !font-normal'">
        Projects
      </TypoHeaderText>

      <div class="flex items-center flex-row bg-[#EBEBE5] rounded-[5px]">
        <TypoNormalText
          v-for="filterOption in filterOptions"
          :custom-class="`capitalize !px-4 py-2 text-sm cursor-pointer text-[#61656D] rounded-[5px] ${
            activeOption == filterOption.title ? 'bg-bouhaws-semi-dark' : ''
          }`"
          :color="`${
            activeOption == filterOption.title
              ? 'text-white '
              : 'text-bouhaws-text-black'
          }`"
          @click="activeOption = filterOption.title"
        >
          {{ filterOption.title }}
        </TypoNormalText>
      </div>
    </div>

    <div class="flex flex-col space-y-5">
      <CardProjectDetails
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
  <div class="h-[100px]"></div>
</template>

<script setup lang="ts">
const activeOption = ref("all");
const filterOptions = reactive([
  { title: "all" },
  { title: "class" },
  { title: "challenge" },
  { title: "active" },
  { title: "completed" },
]);
const projects = ref([
  {
    id: "1",
    title: `Project title`,
    type: "class",
    dataPosted: `Posted 2 hours ago`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    milestones: {
      total: 5,
      current: 3,
    },
    deadline: `Deadline in 15 days`,
    user: {
      name: "Teacher",
      photo_url: "/images/avatar-2.png",
    },
    image_url: "/images/gallery-project-1.png",
    completed: true,
  },
  {
    id: "1",
    title: `Project title`,
    type: "class",
    dataPosted: `Posted 2 hours ago`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    milestones: {
      total: 5,
      current: 3,
    },
    deadline: `Deadline in 15 days`,
    user: {
      name: "Brand",
      photo_url: "/images/avatar-5.png",
    },
    image_url: "/images/gallery-project-2.png",
    completed: true,
  },
  {
    id: "1",
    title: `Project title`,
    type: "class",
    dataPosted: `Posted 2 hours ago`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    milestones: {
      total: 5,
      current: 3,
    },
    deadline: `Deadline in 15 days`,
    user: {
      name: "Teacher",
      photo_url: "/images/avatar-3.png",
    },
    image_url: "/images/gallery-project-3.png",
    completed: true,
  },
  {
    id: "1",
    title: `Project title`,
    type: "class",
    dataPosted: `Posted 2 hours ago`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    milestones: {
      total: 5,
      current: 3,
    },
    deadline: `Deadline in 15 days`,
    user: {
      name: "Brand",
      photo_url: "/images/avatar-4.png",
    },
    image_url: "/images/event-gallery.png",
    completed: true,
  },
]);
</script>

<template>
  <section class="col-span-3 py-6 px-8 bg-white box-shadow rounded-xl">
    <div class=" flex justify-between items-center">
      <h4 class="text-2xl font-medium mb-3">Projects</h4>

      <div  class="flex items-center bg-[#EBEBE5]  rounded-lg">
        <span v-for="filterOption in filterOptions" class="px-4 py-2 text-sm cursor-pointer text-[#61656D] rounded-lg font-light"
          :class="activeOption == filterOption.title ? 'bg-bouhaws-semi-dark text-white ' : ''"
          @click="activeOption = filterOption.title"
        >
          {{filterOption.title}}
        </span>
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
</template>

<script setup lang="ts">
const activeOption = ref("all")
const filterOptions =  ref([
  {title: 'all'},
  {title: 'class'},
  {title: 'challenge'},
  {title: 'active'},
  {title: 'completed'},
])
const projects = ref([
  {
    id: "1",
    title: `Project title`,
    username: "ArchyScript",
    entryType: 'single',
    entryRange: '1-4',
    entry: {
      type: 'multiple',
      range: {
        min: 1,
        max: 6
      }
    },
    dataPosted: `Posted 2h ago `,
    description: `Short description of the project and how the teacher is expecting from the student entries. Also anything they think would be helpful.`,
    milestone: 2,
    memberOfTeam: 4,
    deadline: `20/23/2022`,
    imagUrl: '~/assets/images/profile-picture.svg',
    completed: true,
  },
  {
    id: "2",
    title: `Project title`,
    username: "Archy Script",
    entryType: 'single',
    entryRange: '1-4',
    entry: {
      type: 'single',
      range: {
        min: 1,
        max: 6
      }
    },
    dataPosted: `Posted 2h ago`,
    description: `Short description of the project and how the teacher is expecting from the student entries. Also anything they think would be helpful.`,
    milestone: 2,
    memberOfTeam: 1,
    deadline: `20/23/2022`,
    imagUrl: '~/assets/images/profile-picture.svg',
    completed: true,
  },
  {
    id: "3",
    title: `Project title`,
    username: "ArchyScript",
    entryType: 'multiple',
    entryRange: '1-4',
    entry: {
      type: 'single',
      range: {
        min: 1,
        max: 6
      }
    },
    dataPosted: `Posted 2h ago`,
    description: `Short description of the project and how the teacher is expecting from the student entries. Also anything they think would be helpful.`,
    milestone: 1,
    memberOfTeam: 3,
    deadline: `20/23/2022`,
    imagUrl: '~/assets/images/profile-picture.svg',
    completed: true,
  },
  {
    id: "4",
    title: `Project title`,
    username: "ArchyScript",
    entryType: 'multiple',
    entryRange: '1-4',
    entry: {
      type: 'multiple',
      range: {
        min: 1,
        max: 6
      }
    },
    dataPosted: `Posted 2h ago`,
    description: `Short description of the project and how the teacher is expecting from the student entries. Also anything they think would be helpful.`,
    milestone: 4,
    memberOfTeam: 4,
    deadline: `20/23/2022`,
    imagUrl: '~/assets/images/profile-picture.svg',
    completed: true,
  },
])
</script>
 
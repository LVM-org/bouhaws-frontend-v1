<template>
  <nuxt-link
    :to="`projects/${project.id}`"
    class="flex space-x-4 border-b pt-2 pb-4 bg-white text-[#0E1011] space-x-2.5"
  >
    <span class="h-36 w-36">
      <img
        src="~/assets/images/profile-picture.svg"
        :alt="project.title"
        class="w-full h-full"
      /> 
    </span>

    <div class="flex flex-col flex-1">
      <h4 class="text-xl font-medium mb-3.5">
        {{ project.title }}
      </h4> 
  
      <div class="flex items-center space-x-6 text-sm mb-3">
        <span class="flex items-center space-x-3">
          <img
            src="~/assets/images/profile-picture.svg"
            :alt="project.title"
            class="!h-7 !w-7 rounded-full"
          />

          <span>
            {{ project.username }}
          </span>
        </span>

        <span>
          {{ project.numberOfEntries > 1 ? "Entries" : "Entry" }}
          submitted
        </span>

        <span class="font-light"> {{ project.dataPosted }} </span>
      </div>

      <p class="font-light text-sm w-3/4 mb-3">
        {{ project.description }}
      </p>

      <div class="flex items-center space-x-5 text-sm mb-3">
        <span> Project milestones </span>

        <span class="flex items-center space-x-1.5">
          <IconCheckbox
            :width="16"
            :height="16"
            v-for="x in 5"
            :class="
              x <= project?.milestone
                ? 'text-bouhaws-green'
                : 'text-bouhaws-light-gray'
            "
          />
        </span>

        <div class="flex items-center space-x-5 text-sm">
          <span
            class="flex space-x-3 bg-[#FFE2C6] text-[#844200] items-center px-3 py-2 rounded-md"
          >
            <span>
              <IconUser
                :title="project?.entry?.type == 'single' ? 'user' : 'users'"
              />
            </span>

            <span>
              {{
                project?.entry?.type == "single"
                  ? "Individual entries"
                  : `Teams of ${
                      project?.entry?.range?.max - project?.entry?.range?.min
                    } members`
              }}
            </span>
          </span>

          <span
            class="flex space-x-3 bg-[#ECE0FF] text-[#0C006C] items-center px-3 py-2 rounded-md"
          >
            <span> <IconImagePlus /> </span>

            <span>
              {{
                project?.entry?.type == "single"
                  ? "1 Entry allowed"
                  : `${project?.entry?.range?.min} - ${project?.entry?.range?.max}   entries allowed`
              }}
            </span>
          </span>

          <span
            class="flex space-x-3 bg-[#DBE7FF] text-[#02176B] items-center px-3 py-2 rounded-md"
          >
            <span> Deadline: </span>
            <span> {{ project?.deadline }} </span>
          </span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts"> 
const props = defineProps({
  project: {
    type: Object,
    default: () => { }
  }
})
</script>

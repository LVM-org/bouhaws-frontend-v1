import { CardChallenge } from '../../.nuxt/components';
<template>
  <div>
    <!-- Modals here -->
    <Modal
      title="Project details"
      id="project-details"
      v-if="showProjectDetailsModal"
      @close="showProjectDetailsModal = false"
    >
      <div class="space-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi utc
        </p>

        <ul class="space-y-1 px-2">
          <li v-for="x in 3" :key="x">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </li>
        </ul>

        <div class="flex space-x-2.5 mt-4 overflow-auto no-scrollbar py-2 px-1">
          <img
            src="~/assets/images/art.svg"
            class="!w-32 !h-32 rounded-xl shadow"
            v-for="x in 9"
            :key="x"
          />
        </div>
      </div>
    </Modal>

    <!--  -->
    <div class="grid grid-cols-3 gap-x-6 mx-auto">
      <section class="col-span-2 space-y-6 w-full">
        <div class="w-full py-4 px-6 bg-white rounded-lg box-shadow space-y-4">
          <div class="flex justify-between items-center">
            <h4
              class="flex items-center cursor-pointer text-2xl space-x-4 font-normal"
            > 
              <span> {{ project?.title }} </span>
            </h4>
          </div>

          
      <div class="flex items-center space-x-6 text-sm mb-3">
        <span  class="px-4 py-1.5 bg-[#FF9900] text-white rounded-md font-light">
          challenge
        </span>
        
        <span class="flex items-center space-x-3">
          <img
            src="~/assets/images/profile-picture.svg"
            :alt="project.title"
            class="!h-7 !w-7 rounded-full"
          />

          <span>
            {{ project.brand }}
          </span>
        </span>

        <span class="font-light"> {{ project.dataPosted }} </span>

        <span class="font-light text-red-500"> 
          Deadline in 15 days
        </span>
      </div>

          <p class="text-sm font-light w-5/6">
            {{ project?.description }}
          </p>


          <div class="flex space-x-4 mt-4 overflow-auto no-scrollbar py-2 px-1">
            <img
              src="~/assets/images/art.svg"
              :alt="project.title"
              class="!w-40 !h-40 rounded-xl shadow"
              v-for="x in 9"
              :key="x"
            />
          </div>
        </div>

        <div class="w-full py-4 px-6 bg-white rounded-lg box-shadow space-y-3">
          <h4 class="flex items-center text-2xl space-x-4 font-normal">
            <span> Requirements </span>
          </h4> 

          <div class="flex flex-col space-y-1 text-sm">
            <p
              v-for="requirement in requirements"
              :key="requirement.title"
              class="flex space-x-3 items-center font-light py-1 px-2"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-bouhaws-purple"></span>
              <span>
                {{ requirement.title }}
              </span>
            </p>
          </div> 
        </div>

         <div class="w-full py-4 px-6 bg-white rounded-lg box-shadow space-y-4">
          <h4 class="flex items-center text-2xl space-x-4 font-normal">
             Entries (8) 
          </h4> 

          <div class=" grid grid-cols-4 gap-3">
           <CardImgUser
              v-for="exhibition in 8"
              :key="exhibition" class="h-[8.5rem]"
            />
          </div> 
        </div>
      </section>


<!-- section 2 -->
      <section class="col-span-1 w-full space-y-6">
        <form
          @submit.prevent="uploadForm"
          class="rounded-lg box-shadow bg-white p-6 "
        > 
        <h4 class="text-2xl mb-3  font-normal">
            Submit Entry
          </h4> 
 
          <div class="py-2 space-y-2.5 border-b-2 border-[#EBEBE5]">
            <div>
              <label for="title" class=" font-light">
                Title
              </label>

              <input
                type="text"
                id="title"
                class="border-0 w-full placeholder:text-bouhaws-dark placeholder:text-sm placeholder:font-extralight font-light py-2 px-0.5 text-sm border-b border-[#EBEBE5] outline-none"
                placeholder="Name your entry"
                v-model="payload.title"
              />
            </div>

            <div>
              <label for="description" class=" font-light">
                Description
              </label>

              <textarea
                id="description"
                v-model="payload.description"
                class="border-0 resize-none w-full placeholder:text-bouhaws-dark no-scrollbar placeholder:text-sm placeholder:font-extralight overflow-auto font-light py-2 px-0.5 text-sm outline-none"
                placeholder="Give a short description" 
                rows="2"
              ></textarea>
            </div>
          </div>

          <div class="mt-6">
            <div>
              <h6>Milestone 1</h6>

               <div class="flex space-x-1 mt-1 overflow-auto no-scrollbar py-2 px-1">
                <img
                  src="~/assets/images/art.svg"
                  :alt="project.title"
                  class="!w-16 !h-16 rounded shadow"
                  v-for="x in 9"
                  :key="x"
                />
              </div>

              <div class=" flex items-center cursor-pointer w-auto text-sm space-x-1.5 font-light mt-3">
                <span class=" p-1 bg-bouhaws-blue-main text-white rounded-md">
                  <IconAdd :width="14" :height="14"/>
                </span>

                <span>
                  Add entry
                </span>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <div>
              <h6>Milestone 2</h6>

              
              <div class=" flex items-center cursor-pointer w-auto text-sm space-x-1.5 font-light mt-3">
                <span class=" p-1 bg-bouhaws-blue-main text-white rounded-md">
                  <IconAdd :width="14" :height="14"/>
                </span>

                <span>
                  Add entry
                </span>
              </div>
            </div>
          </div>


          <div class="pt-4">
            <Button
              type="submit"
              text="Submit"
              class="!w-full flex-1 !py-2.5 !px-6 my-2"
              customClass="!bg-[#D6D6D6]  !text-bouhaws-dark !text-white"
            />
          </div>
        </form> 
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">  
const router = useRouter()
const project = ref({
  id: "1",
  title: `Project title`,
  brand: "ArchyScript",
  entryType: 'single',
  entryRange: '1-4',
  entry: {
    type: 'multiple',
    range: {
      min: 1,
      max: 6
    }
  },
  points: {
    min: 200,
    max: 500
  },
  dataPosted: `Posted 2h ago `,
  description: `Short description of the project and how the teacher is expecting from the student entries. Also anything they think would be helpful.`,
  milestone: 2,
  memberOfTeam: 4,
  deadline: `20/23/2022`,
  imagUrl: '~/assets/images/profile-picture.svg',
  completed: true,
}) 

const showProjectDetailsModal = ref(false) 

const requirements = ref([
  { title: "Project entries must be less than 5MB." },
  { title: "Images resolution should be at least 150 pixels." },
])

const payload = ref({
  title: "",
  description: ""
})

const uploadForm = () => {
  console.log(payload.value)
}

</script>
 
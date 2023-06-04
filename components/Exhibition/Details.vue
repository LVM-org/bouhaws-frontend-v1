<template>
  <div>
    <div
      class="grid grid-cols-3 gap-6 items-start text-[#0E1011] p-2 w-5/6 mx-auto"
    >
      <section class="w-full col-span-1 h-full">
        <img src="~/assets/images/art.svg" class="!h-fit !w-full" />
      </section>

      <section class="col-span-2 w-full space-y-5">
        <div class="w-full py-3 px-4 bg-white rounded-lg box-shadow space-y-3">
          <h4 class="flex items-center text-2xl space-x-3">
            <IconArrow type="left" class="text-bouhaws-blue-main" />
            <span> Project Title </span>
          </h4>

          <div class="flex items-center space-x-6 text-sm mb-3">
            <span class="flex items-center space-x-2">
              <img
                src="~/assets/images/profile-picture.svg"
                class="!h-7 !w-7 rounded-full"
              />
              <span> ArchyScript </span>
            </span>

            <span class="font-light"> Posted 2hr ago </span>
          </div>

          <p class="text-sm font-light">
            Short description of the project and different techniques they used
            to create the entry. Also anything they think would be helpful.
          </p>

          <p class="flex items-center space-x-5 text-bouhaws-light py-2">
            <IconArrow type="upvote" />

            <span class="text-bouhaws-dark"> 360 </span>

            <IconArrow type="downvote" />
          </p>
        </div>

        <div class="w-full py-3 px-4 bg-white rounded-lg box-shadow space-y-3">
          <h5 class="text-2xl">Comments</h5>

          <div class="flex items-center space-x-3">
            <img
              src="~/assets/images/profile-picture.svg"
              class="!h-7 !w-7 rounded-full"
            />

            <input
              id="Comments"
              class="border-0 resize-none w-3/4 bg-transparent border-b border-[#EBEBE5] placeholder:text-bouhaws-dark no-scrollbar placeholder:text-sm placeholder:font-extralight overflow-auto font-light mt-1 py-1.5 px-2 text-sm outline-none"
              placeholder="Add a comment..."
            />
          </div>

          <div
            class="max-h-[16rem] mt-4 py-2 space-y-6 overflow-scroll no-scrollbar"
          >
            <CardComment
              v-for="comment in comments"
              :key="comment.id"
              :comment="comment"
            />
          </div>
        </div>
      </section>
    </div>

    <div class="mt-8 space-y-4 w-full">
      <h5 class="text-2xl text-center">More like this</h5>

      <div class="flex space-x-4 overflow-auto no-scrollbar">
        <CardExhibition
          v-for="exhibition in exhibitions"
          :key="exhibition"
          :exhibition="exhibition"
          class="!h-40 !w-40"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"> 
const comments = ref([
  {
    id: "1",
    comment: `I'm glad that Michelle's art is getting better and better 👍🏾 She's really doing very well 😁`,
    username: "Archycript",
    datePosted: "2 hours ago",
    imageUrl: "",
  },
  {
    id: "2",
    comment: `I'm glad that Michelle's art is getting better and better 👍🏾 She's really doing very well 😁`,
    username: "Archycript",
    datePosted: "2 hours ago",
    imageUrl: "",
  },
  {
    id: "3",
    comment: `I'm glad that Michelle's art is getting better and better 👍🏾 She's really doing very well 😁`,
    username: "Archycript",
    datePosted: "2 hours ago",
    imageUrl: "",
  },
  {
    id: "4",
    comment: `I'm glad that Michelle's art is getting better and better 👍🏾 She's really doing very well 😁`,
    username: "Archycript",
    datePosted: "2 hours ago",
    imageUrl: "",
  },
  {
    id: "5",
    comment: `I'm glad that Michelle's art is getting better and better 👍🏾 She's really doing very well 😁`,
    username: "Archycript",
    datePosted: "2 hours ago",
    imageUrl: "",
  },
  {
    id: "6",
    comment: `I'm glad that Michelle's art is getting better and better 👍🏾 She's really doing very well 😁`,
    username: "Archycript",
    datePosted: "2 hours ago",
    imageUrl: "",
  },
  {
    id: "7",
    comment: `I'm glad that Michelle's art is getting better and better 👍🏾 She's really doing very well 😁`,
    username: "Archycript",
    datePosted: "2 hours ago",
    imageUrl: "",
  },
  {
    id: "8",
    comment: `I'm glad that Michelle's art is getting better and better 👍🏾 She's really doing very well 😁`,
    username: "Archycript",
    datePosted: "2 hours ago",
    imageUrl: "",
  },
])
const exhibitions = ref([
  {
    id: "1",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "2",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "3",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "4",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "5",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "6",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "7",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "8",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "9",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "10",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "11",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
  {
    id: "12",
    username: `ArchyScript`,
    profilePicture: ``,
    artWork: ``
  },
])
</script>

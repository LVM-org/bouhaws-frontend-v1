<template>
  <div class=" space-y-8"> 
    <section>
      image slider
    </section>

    <div class="grid grid-cols-3 gap-5">
      <section class="col-span-2 space-y-5" > 
        <div class="rounded-[10px] px-6 py-5 bg-white flex flex-col space-y-3 shadow-custom" >
          <TypoHeaderText :size="'2xl'" :custom-class="'!font-normal'">
            Star light academy
          </TypoHeaderText>

          <div class="flex items-center space-x-6 flex-row w-full">
            <div class="flex items-center space-x-1">
              <Avatar 
              photoUrl="/images/avatar-3.png"
                :size="'20'"
              ></Avatar>

              <TypoNormalText :customClass="'!font-medium'">
                Vincent Van Gogh
              </TypoNormalText>
            </div>

              <TypoNormalText>
                Posted 2 hours ago
              </TypoNormalText>  
          </div>

            <TypoNormalText :custom-class="'!text-left !leading-relaxed'">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laborisM Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua ullamco laborisM Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
          </TypoNormalText>

          <div
            class="w-full flex flex-row items-center justify-between space-x-3 bg-white rounded-b-[10px]"
          >
            <div class="flex flex-row items-center space-x-3">
              <div class="flex flex-row items-center space-x-1.5">
                <IconLoader :name="'like'" :custom-class="'h-[17px]'" />
                <TypoNormalText
                  :color="'text-progress-bar-gray'"
                  :custom-class="'!text-xs'"
                >
                  3500
                </TypoNormalText>
              </div>

              <div class="flex flex-row items-center space-x-1.5">
                <IconLoader :name="'comment'" :custom-class="'h-[17px]'" />
                <TypoNormalText
                  :color="'text-progress-bar-gray'"
                  :custom-class="'!text-xs'"
                >
                  4000
                </TypoNormalText>
              </div>

              <IconLoader :name="'chat-send-fill'" :customClass="'h-[21px]'" />
            </div>

            <div>
              <IconLoader :name="'bookmark'" :custom-class="'h-[19px]'" />
            </div>
          </div>
        </div> 

        <!--  -->
        <div class="rounded-[10px] px-6 py-5 bg-white flex flex-col space-y-2 shadow-custom" >
          <TypoHeaderText :size="'2xl'" :custom-class="'!font-normal'">
            Details
          </TypoHeaderText> 

          <div class="space-y-1">  
            <div class="flex items-center space-x-2">
              <TypoNormalText :customClass="'!font-medium'">
                Title:
              </TypoNormalText>

              <TypoNormalText :customClass="'!font-normal'">
               {{details.title}}
              </TypoNormalText>
            </div>

            <div class="flex items-center space-x-2">
              <TypoNormalText :customClass="'!font-medium'">
                Created:
              </TypoNormalText>

              <TypoNormalText :customClass="'!font-normal'">
               {{details.created}}
              </TypoNormalText>
            </div>

            <div class="flex items-center space-x-2">
              <TypoNormalText :customClass="'!font-medium'">
                Project:
              </TypoNormalText>

              <TypoNormalText :customClass="'!font-normal'">
               {{details.project}}
              </TypoNormalText>
            </div>

            <div class="flex items-center space-x-2">
              <TypoNormalText :customClass="'!font-medium'">
                Type:
              </TypoNormalText>

              <TypoNormalText :customClass="'!font-normal'">
               {{details.type}}
              </TypoNormalText>
            </div>

            <div class="flex items-center space-x-2">
              <TypoNormalText :customClass="'!font-medium'">
                Medium:
              </TypoNormalText>

              <TypoNormalText :customClass="'!font-normal'">
               {{details.medium}}
              </TypoNormalText>
            </div>

            <div class="flex items-center space-x-2">
              <TypoNormalText :customClass="'!font-medium'">
                Dimensions:
              </TypoNormalText>

              <TypoNormalText :customClass="'!font-normal'">
               {{details.dimensions}}
              </TypoNormalText>
            </div>
            
            <div class="flex items-center space-x-2">
              <TypoNormalText :customClass="'!font-medium'">
                Painter:
              </TypoNormalText>

              <TypoNormalText :customClass="'!font-normal'">
               {{details.painter}}
              </TypoNormalText>
            </div> 
          </div>
        </div>
      </section>

      <section class="col-span-1">
        <div class="rounded-[10px] space-y-6 relative h-full px-6 pt-5 bg-white flex flex-col space-y-2 shadow-custom" >
          <TypoHeaderText :size="'2xl'" :custom-class="'!font-normal'">
            Comments
          </TypoHeaderText>

          <div class="!h-full">
            <div class="space-y-2">
              <div class="flex justify-between space-x-2" v-for="detail in details"  :key="detail.id"> 
                 <!-- <Avatar 
                    :photoUrl="detail?.profilePicture"
                    size="40"
                  ></Avatar> -->

                  <div class="flex-col flex-1 space-y-1">
                    <TypoNormalText size="sm" :customClass="'!font-medium'">
                      tesv
                      <!-- {{detail.username}}  -->
                    </TypoNormalText> 

                     <TypoNormalText size="sm" :customClass="'!font-normal'">
                      <!-- {{detail.comment}} -->
                    </TypoNormalText> 

                     <TypoNormalText  :customClass="'!font-light !text-[#61656D]'">
                      <!-- {{detail.timePosted}} -->
                    </TypoNormalText> 

                    <!-- <div v-if="detail?.replies?.length" class="flex items-center space-x-2"> 
                      <TypoNormalText :customClass="'!font-light !text-[#61656D]'">
                        View more replies (2)
                      </TypoNormalText> 

                      <IconLoader :name="'alt-arrow-down'" :custom-class="'h-[19px]'" />
                    </div> -->
                </div>
              </div>
            </div>
          </div>

          <div class=" absolute pr-8  bottom-0 left-0 w-full  justify-between flex flex-row space-x-3 items-center rounded-b-[10px] border-t-[1px] border-[#EBEBE5]"> 
            <div class="flex flex-row  flex-1 ">
              <span
                :contenteditable="true"
                role="textbox"
                :class="`w-full textarea cursor-pointer  !font-light resize-none !min-h-[48px] text-bodyBlack whitespace-pre-wrap focus:outline-none !max-h-[80px] overflow-x-hidden bg-transparent rounded-[8px] py-3 px-3 items-start text-left overflow-y-auto`"
                id="messageContainer"
              >
              </span>
            </div>

            <div class="w-[35px] absolute right-0" >
              <IconLoader :name="'chat-send-fill'" :customClass="'h-[21px] rotate-45'" />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="w-full flex flex-col space-y-4">
      <TypoHeaderText :custom-class="'!font-normal'" :size="'3xl'">
        Recommended
      </TypoHeaderText>

      <div
        class="w-full flex flex-row no-scrollbar space-x-3 flex-nowrap overflow-x-auto scrollbar-hide"
      >
        <div class="flex flex-row space-x-3 py-2 pr-4">
        <CardExhibition
          v-for="(exhibition, index) in exhibitions"
          :key="index"
          :custom-class="'col-span-1 !w-auto !h-[240px] !w-[240px]'"
          :exhibition="exhibition"
          :has-more-info="true"
        />
      </div>
    </div>
    </div>
  </div>
</template>  
<script setup lang="ts">
const activeDetailCommentId = ref('')

const details = ref({
  title: "Call me NOW!!!",
  created: "Dec 40, 2096 ",
  project: "Personal",
  type: "Painting",
  medium: "Oil on canvas",
  dimensions: "80 cm x 20 cm ",
  painter: "ARTyScript"
})

const comments = ref([
  {
    id: "2",
    profilePicture: "/images/avatar-3.png",
    username: "Jeff King",
    comment: "Great work Daniel, thank you",
    timePosted: "7:30pm",
    replies: [
      {
        profilePicture: "/images/avatar-3.png",
        username: "Jeff King",
        comment: "Great work Daniel, thank you", 
      },
      {
        profilePicture: "/images/avatar-3.png",
        username: "Tom Cruise",
        comment: "Great work", 
      }, 
      {
        profilePicture: "/images/avatar-3.png",
        username: "Archy Script",
        comment: "Thank you", 
      },  
    ] 
  },
  {
    id: "3",
    profilePicture: "/images/avatar-3.png",
    username: "Samuel King",
    comment: "Great work Daniel, thank you",
    timePosted: "7:30pm",
    replies: [
      {
        profilePicture: "/images/avatar-3.png",
        username: "Jeff King",
        comment: "Great work Daniel, thank you", 
      },
      {
        profilePicture: "/images/avatar-3.png",
        username: "Tom Cruise",
        comment: "Great work", 
      }, 
      {
        profilePicture: "/images/avatar-3.png",
        username: "Archy Script",
        comment: "Thank you", 
      },  
    ] 
  },
  {
    id: "4",
    profilePicture: "/images/avatar-3.png",
    username: "Jeff Samuel",
    comment: "Great work Daniel, thank you",
    timePosted: "7:30pm",
    replies: [ 
      {
        profilePicture: "/images/avatar-3.png",
        username: "Tom Cruise",
        comment: "Great work", 
      }, 
      {
        profilePicture: "/images/avatar-3.png",
        username: "Archy Script",
        comment: "Thank you", 
      },  
    ] 
  },
  {
    id: "4",
    profilePicture: "/images/avatar-3.png",
    username: "Jeff King",
    comment: "Great work Daniel, thank you",
    timePosted: "7:30pm",
    replies: [] 
  },
  {
    id: "5",
    profilePicture: "/images/avatar-3.png",
    username: "Jeff King",
    comment: "Great work Daniel, thank you",
    timePosted: "7:30pm",
    replies: [
      {
        profilePicture: "/images/avatar-3.png",
        username: "Jeff King",
        comment: "Great work Daniel, thank you", 
      }, 
    ] 
  },
])

const exhibitions = ref([
  {
    id: "1",
    username: "Username",
    title: "Heart over stained glass",
    image_url: "/images/gallery-project-1.png",
    stats: {
      likes: 200,
      shares: 30,
      comments: 34,
    },
  },
  {
    id: "2",
    username: "Username",
    title: "Cultural woman",
    image_url: "/images/gallery-project-2.png",
    stats: {
      likes: 200,
      shares: 30,
      comments: 34,
    },
  },
  {
    id: "3",
    username: "Username",
    title: "From the other side",
    image_url: "/images/gallery-project-3.png",
    stats: {
      likes: 200,
      shares: 30,
      comments: 34,
    },
  },
  {
    id: "4",
    username: "Username",
    title: "Mother and son connection",
    image_url: "/images/top-exhibition-2.png",
    stats: {
      likes: 200,
      shares: 30,
      comments: 34,
    },
  },
  {
    id: "4",
    username: "Username",
    title: "Mother and son connection",
    image_url: "/images/top-exhibition-2.png",
    stats: {
      likes: 200,
      shares: 30,
      comments: 34,
    },
  },
  {
    id: "4",
    username: "Username",
    title: "Mother and son connection",
    image_url: "/images/top-exhibition-2.png",
    stats: {
      likes: 200,
      shares: 30,
      comments: 34,
    },
  },
  {
    id: "4",
    username: "Username",
    title: "Mother and son connection",
    image_url: "/images/top-exhibition-2.png",
    stats: {
      likes: 200,
      shares: 30,
      comments: 34,
    },
  },
  {
    id: "4",
    username: "Username",
    title: "Mother and son connection",
    image_url: "/images/top-exhibition-2.png",
    stats: {
      likes: 200,
      shares: 30,
      comments: 34,
    },
  },
  {
    id: "4",
    username: "Username",
    title: "Mother and son connection",
    image_url: "/images/top-exhibition-2.png",
    stats: {
      likes: 200,
      shares: 30,
      comments: 34,
    },
  },
]);

 </script>



<style scoped>
.textarea[contenteditable]:empty::before {
  content: "Add a comment";
  color: #61656d;
}
</style>

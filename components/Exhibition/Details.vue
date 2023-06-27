 
<template>
  <div class=" space-y-8"> 
    <section class=" space-y-4">
      <div class="relative mx-auto max-w-[1000px]">
          <!--  left arrow --> 
          <span class="absolute left-0 top-1/2 -mt-16">
            <IconLoader  @click="updateImage('prev')"  :name="'alt-arrow-left-white'" :custom-class="'cursor-pointer h-[32px]'" />
          </span>

          <div class="space-y-4 flex flex-col w-full justify-center items-center">
            <div class="h-[360px] w-[360px]">
              <ImageLoader 
                :photoUrl="activeImageObject.url"
                customClass=" h-full w-full !rounded-md"
              /> 
            </div>

            <div class="flex space-x-2 items-center justify-center"> 
              <span class="h-3 w-3 rounded-full cursor-pointer" 
                :class="activeSliderIndex == index ? 'bg-black' : 'bg-white horver:opacity-40'" 
                v-for="(image, index) in displayImages" :key="`${image}__${index}`"
                @click="updateImage(null, image, index)"
              ></span>
            </div> 

            <div class=" flex space-x-4 items-center">
              <IconLoader  @click="updateImage('prev')"  :name="'arrow-left-white'" :custom-class="'cursor-pointer  h-[16px]'" />

              <TypoHeaderText :size="'xl'" :custom-class="'!font-normal'">
                {{activeImageObject.title}}
              </TypoHeaderText>

              <IconLoader :name="'arrow-left-white'"  @click="updateImage('next')"  :custom-class="'cursor-pointer rotate-180  h-[16px]'" />
            </div>
          </div>

          <!--  right arrow -->
          <span class="absolute right-0 top-1/2 -mt-16">
            <IconLoader @click="updateImage('next')" :name="'alt-arrow-left-white'" :custom-class="'cursor-pointer  h-[32px] rotate-180'" />
          </span>
      </div> 
    </section>

    <div class="grid grid-cols-3 gap-5">
      <section class="col-span-2 space-y-5" > 
        <div class="rounded-[10px] px-6 py-5 bg-white flex flex-col space-y-3 shadow-custom" >
          <TypoHeaderText :size="'3xl'" :custom-class="'!font-normal'">
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

              <IconLoader  :name="'chat-send-fill'" :customClass="'h-[21px]'" />
            </div>

            <div>
              <IconLoader :name="'bookmark'" :custom-class="'h-[19px]'" />
            </div>
          </div>
        </div> 

        <!--  -->
        <div class="rounded-[10px] px-6 py-5 bg-white flex flex-col space-y-2 shadow-custom" >
          <TypoHeaderText :size="'3xl'" :custom-class="'!font-normal'">
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

      <section class="!max-h-full col-span-1  overflow-auto !text-[#0E1011]">
        <div class="rounded-[10px]  space-y-6 relative !h-full overflow-hidden px-6 pt-5 bg-white flex flex-col space-y-2 shadow-custom" >
          <TypoHeaderText :size="'3xl'" :custom-class="'!bg-white z-10 pb-4 !font-normal'">
            Comments
          </TypoHeaderText>

          <div class=" absolute top-0 left-0 h-full pb-6  w-full ">
            <div class="space-y-2.5 w-full h-full overflow-scroll no-scrollbar pt-12 pb-16 px-6 ">
              <div class="flex space-x-2" v-for="comment in comments"  :key="comment.id"> 
                <Avatar
                  :photoUrl="comment?.profilePicture"
                  size="40"
                ></Avatar>

                <div class="space-y-1 flex-1 -mt-1">
                  <div class="space-y-1">
                    <TypoNormalText size="sm" :customClass="'!font-normal'"> 
                      {{comment.username}} 
                    </TypoNormalText> 

                    <TypoNormalText size="sm" :customClass="'!font-light'">
                      {{comment.message}}
                    </TypoNormalText> 

                    <TypoNormalText  :customClass="'!font-light !text-[#61656D]'">
                      {{comment.timePosted}}
                    </TypoNormalText>  
                  </div>

                  <!--  -->
                  <!-- replies -->
                  <div class="space-y-2 pt-2.5 pb-1"  v-if="comment?.replies?.length && activeDetailCommentId == comment.id" >
                    <div class="flex justify-between space-x-2" v-for="reply in comment?.replies"  :key="reply.id"> 
                      <Avatar 
                        :photoUrl="reply.profilePicture"
                        size="36"
                        custonmClass="rounded-full"
                      ></Avatar>

                      <div class="flex-col flex-1 space-y-0.5 -mt-0.5">
                        <TypoNormalText size="sm" :customClass="'!font-normal'"> 
                          {{reply?.username}} 
                        </TypoNormalText> 

                        <TypoNormalText size="sm" :customClass="'!font-light'">
                          {{reply?.message}}
                        </TypoNormalText>  
                      </div>
                    </div>
                  </div>
                  
                  <!-- show view more button -->
                  <div 
                    v-if="comment?.replies?.length" @click="toggleReplies(comment.id)"
                    class="w-fit flex items-center cursor-pointer space-x-2"
                  >  
                    <TypoNormalText :customClass="'!font-light !text-[#61656D]'">
                      {{activeDetailCommentId == comment.id ? 'Hide' : 'View more'}} replies ({{comment.replies.length}})
                    </TypoNormalText> 

                    <IconLoader :name="'alt-arrow-down'" :custom-class="`h-[19px] ${activeDetailCommentId == comment.id && 'rotate-180'}`" />
                  </div>  
                </div> 
              </div>
            </div>
          </div>

          <div class=" absolute pr-8  bottom-0 left-0 w-full  justify-between flex flex-row space-x-3 items-center rounded-b-[10px] border-t-[1px] border-[#EBEBE5]"> 
            <div class="flex flex-row bg-white flex-1 ">
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

    <div class="w-full flex flex-col space-y-3">
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
const activeSliderIndex = ref(0)
const activeImageObject = ref({}) 

const displayImages =  ref([
  {url: "/images/top-exhibition-1.png", title: "Milestone 1"},
  {url: "/images/top-exhibition-2.png", title: "Milestone 2"},
  {url: "/images/top-exhibition-1.png", title: "Milestone 3"},
  {url: "/images/top-exhibition-3.png", title: "Milestone 4"},  
])


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
    id: "1",
    profilePicture: "/images/avatar-1.png",
    username: "Jeff King",
    message: "Great work Daniel, thank you",
    timePosted: "7:30pm",
    replies: [
      {
        profilePicture: "/images/avatar-2.png",
        username: "Jeff King",
        message: "Great work Daniel, thank you", 
      },
      {
        profilePicture: "/images/avatar-3.png",
        username: "Tom Cruise",
        message: "Great work", 
      }, 
      {
        profilePicture: "/images/avatar-4.png",
        username: "Archy Script",
        message: "Thank you", 
      },  
    ] 
  },
  {
    id: "3",
    profilePicture: "/images/avatar-5.png",
    username: "Samuel King",
    message: "Great work Daniel, thank you",
    timePosted: "7:30pm",
    replies: [
      {
        profilePicture: "/images/avatar-3.png",
        username: "Jeff King",
        message: "Great work Daniel, thank you", 
      },
      {
        profilePicture: "/images/avatar-2.png",
        username: "Tom Cruise",
        message: "Great work", 
      }, 
      {
        profilePicture: "/images/avatar-4.png",
        username: "Archy Script",
        message: "Thank you", 
      },  
    ] 
  },
  {
    id: "4",
    profilePicture: "/images/avatar-1.png",
    username: "Jeff Samuel",
    message: "Great work Daniel, thank you",
    timePosted: "7:30pm",
    replies: [ 
      {
        profilePicture: "/images/avatar-3.png",
        username: "Tom Cruise",
        message: "Great work", 
      }, 
      {
        profilePicture: "/images/avatar-5.png",
        username: "Archy Script",
        message: "Thank you", 
      },  
    ] 
  },
  // {
  //   id: "4",
  //   profilePicture: "/images/avatar-2.png",
  //   username: "Jeff King",
  //   message: "Great work Daniel, thank you",
  //   timePosted: "7:30pm",
  //   replies: [] 
  // },
  // {
  //   id: "5",
  //   profilePicture: "/images/avatar-1.png",
  //   username: "Jeff King",
  //   message: "Great work Daniel, thank you",
  //   timePosted: "7:30pm",
  //   replies: [
  //     {
  //       profilePicture: "/images/avatar-2.png",
  //       username: "Jeff King",
  //       message: "Great work Daniel, thank you", 
  //     }, 
  //   ] 
  // },
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
 
const toggleReplies = (id: string) => { 
  console.log(id)
  if (activeDetailCommentId.value == id) return activeDetailCommentId.value = ""

  activeDetailCommentId.value = id
} 

const updateImage = (action: any, image: object, index: number) => { 
  if (!action) {
    activeImageObject.value = image
    return activeSliderIndex.value =  index
  }

  let imageIndex = 0

  if(action == 'prev') { 
    imageIndex = activeSliderIndex.value == 0 ? displayImages.value.length - 1  : activeSliderIndex.value - 1
  } 
  if(action == 'next') { 
    imageIndex = activeSliderIndex.value == displayImages.value.length - 1 ? 0  : activeSliderIndex.value + 1
  } 
     
  activeImageObject.value = displayImages.value[imageIndex]
  return activeSliderIndex.value =  imageIndex
}

onBeforeMount(() => {
  activeImageObject.value = displayImages.value[activeSliderIndex.value]
})
 </script>



<style scoped>
.textarea[contenteditable]:empty::before {
  content: "Add a comment";
  color: #61656d;
}
</style>

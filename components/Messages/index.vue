<template>
  <div
    class="fixed lg:!top-[10%] mdlg:!top-[12%] left-0 !w-screen lg:!h-[90%] mdlg:!h-[88%] overflow-hidden pb-4 flex flex-col justify-center items-center"
  >
    <div class="h-[95%] grid grid-cols-9 gap-4 lg:!w-[90%] mdlg:!w-[96%]">
      <div
        class="col-span-2 h-full bg-white shadow-custom rounded-[10px] relative flex flex-col"
      >
        <div
          class="h-full flex flex-col space-y-2 pb-4 overflow-y-auto relative"
        >
          <div
            class="px-4 pt-4 pb-3 bg-white top-0 sticky w-full flex flex-row items-center rounded-t-[10px] border-b-[1px] border-[#EBEBE5]"
          >
            <TypoHeaderText :size="'2xl'" :customClass="'!font-normal'">
              Messages
            </TypoHeaderText>
          </div>

          <div
            :class="`px-4 w-full py-3 hover:bg-[#DBE7FF] flex flex-row items-center justify-between cursor-pointer ${
              convo.id == selectedConvo.id ? 'bg-[#DBE7FF]' : 'bg-white'
            }`"
            v-for="(convo, index) in conversationList"
            :key="index"
          >
            <div class="flex flex-row items-center space-x-2">
              <div class="w-[48px]">
                <Avatar :photoUrl="convo.user.photo_url" :size="'48'"></Avatar>
              </div>
              <div class="flex flex-col space-y-1">
                <TypoNormalText
                  :customClass="'!font-normal !text-left !line-clamp-1'"
                >
                  {{ convo.user.name }}
                </TypoNormalText>
                <TypoNormalText :customClass="'!text-left !line-clamp-1'">
                  {{ convo.last_messsage }}
                </TypoNormalText>
              </div>
            </div>

            <div
              class="h-full flex flex-col justify-between items-end min-w-[50px]"
            >
              <TypoNormalText :customClass="'!text-xs '">
                {{ convo.time }}
              </TypoNormalText>
              <span
                :class="`h-[22px] w-[22px] rounded-full bg-bouhaws-purple flex items-center justify-center ${
                  convo.unread > 0 ? '' : '!invisible'
                }`"
              >
                <TypoNormalText :color="'text-white !text-xs !font-normal'">
                  {{ convo.unread }}
                </TypoNormalText>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-span-5 h-full bg-white shadow-custom rounded-[10px] relative"
      >
        <div
          class="px-4 pt-4 pb-3 bg-white top-0 sticky w-full flex flex-row space-x-3 items-center rounded-t-[10px] border-b-[1px] border-[#EBEBE5]"
        >
          <Avatar
            :photoUrl="selectedConvo.user.photo_url"
            :size="'48'"
          ></Avatar>

          <div class="flex flex-col">
            <TypoNormalText
              :customClass="'!font-normal !text-left !text-base !line-clamp-1'"
            >
              {{ selectedConvo.user.name }}
            </TypoNormalText>
            <TypoNormalText :customClass="'!text-left !line-clamp-1'">
              {{ selectedConvo.last_active }}
            </TypoNormalText>
          </div>
        </div>
      </div>
      <div
        class="col-span-2 h-full bg-white shadow-custom rounded-[10px]"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const conversationList = reactive([
  {
    id: 1,
    user: {
      name: "Username",
      photo_url: "/images/chat-1.png",
    },
    last_messsage: "Awesome work so far ",
    time: "7:33 pm",
    unread: 1,
  },
  {
    id: 2,
    user: {
      name: "Username",
      photo_url: "/images/chat-2.png",
    },
    last_messsage: "I’ll check the rest out and give you more feedback",
    time: "9:03 am",
    unread: 0,
  },
  {
    id: 3,
    user: {
      name: "Username",
      photo_url: "/images/chat-3.png",
    },
    last_messsage: "Great work!",
    time: "4:13 pm",
    unread: 0,
  },
  {
    id: 4,
    user: {
      name: "Username",
      photo_url: "/images/chat-4.png",
    },
    last_messsage: "I think maybe you can change the way the",
    time: "3:25 pm",
    unread: 0,
  },
  {
    id: 5,
    user: {
      name: "Username",
      photo_url: "/images/chat-5.png",
    },
    last_messsage: "Ahh I see what you were talking about",
    time: "10:12 am",
    unread: 0,
  },
  {
    id: 5,
    user: {
      name: "Username",
      photo_url: "/images/chat-6.png",
    },
    last_messsage: "Thank you",
    time: "12:39 pm",
    unread: 0,
  },
]);

const selectedConvo = reactive({
  id: 2,
  user: {
    name: "Username",
    photo_url: "/images/chat-2.png",
  },
  last_messsage: "I’ll check the rest out and give you more feedback",
  time: "9:03 am",
  last_active: "Last active 3mins ago",
  unread: 0,
});
</script>

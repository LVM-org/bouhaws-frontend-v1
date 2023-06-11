<template>
  <section class="pb-3 relative border h-full rounded-t-xl bg-white">
    <div
      class="flex justify-between text-sm rounded-t-xl bg-bouhaws-semi-dark items-center font-medium mb-1 w-full"
    >
      <span
        class="flex-1 text-center p-4 cursor-pointer"
        :class="
          activeTab == 'leatherboard'
            ? 'bg-white text-bouhaws-semi-dark rounded-tr-2xl'
            : 'bg-transparent text-white'
        "
        @click="activeTab = 'leatherboard'"
      >
        Leatherboard
      </span>

      <span
        class="flex-1 flex items-center justify-center space-x-3 text-center p-4 cursor-pointer"
        :class="
          activeTab == 'milestone'
            ? 'bg-white text-bouhaws-semi-dark rounded-tl-2xl'
            : 'bg-transparent text-white'
        "
        @click="activeTab = 'milestone'"
      >
        <IconTreasure title="diamond" />
        <span> Milestone </span>
      </span>
    </div>

    <div class="p-2 h-full overflow-scroll no-scrollbar space-y-3">
      <CardLeatherboard
        v-for="(user, index) in users"
        :key="user.id"
        :index="+index + 1"
        :user="user"
      />

      <div class="h-12"></div>
    </div>

    <div class="h-14 absolute rounded-b-xl w-full -bottom-12 left-0"></div>
  </section>
</template>

<script setup lang="ts" >  
import { getPercentageRatio, formatNumber } from "~/controllers/utils"
const activeTab = ref('leatherboard')
const users = ref([
  {
    id: "1",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: '',
  },
  {
    id: "2",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: '',
  },
  {
    id: "3",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: '',
  },
  {
    id: "4",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: '',
  },
  {
    id: "5",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: '',
  },
  {
    id: "6",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: '',
  },
  {
    id: "7",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: '',
  },
  {
    id: "8",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: '',
  },
  {
    id: "9",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: '',
  },
  {
    id: "10",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: '',
  },
  {
    id: "11",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: '',
  },
  {
    id: "12",
    name: `Oluwatoyin Script`,
    reward: 180,
    imagUrl: '',
  },
])
</script>

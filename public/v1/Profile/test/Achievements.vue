<template>
    <div class="grid grid-cols-2 gap-6"> 
        <div class="box-shadow  bg-white p-6 rounded-2xl"> 
            <TypoHeaderText size="3xl" customClass="!font-normal leading-6 mb-4">
                Tasks
            </TypoHeaderText>  
            
            <div class="w-full flex flex-row space-x-4 flex-nowrap no-scrollbar overflow-x-auto scrollbar-hide"> 
                <CardTypeA 
                    v-for="(task,index) in tasks"
                    :key="index"
                    :data="task"
                />  
            </div> 
        </div>

         <div class="box-shadow  bg-white p-6 rounded-2xl"> 
            <TypoHeaderText size="3xl" customClass="!font-normal leading-6 mb-4">
                Project badges
            </TypoHeaderText>  
             
            <div class="w-full flex flex-row space-x-4 flex-nowrap no-scrollbar overflow-x-auto scrollbar-hide"> 
                <CardTypeA 
                    v-for="(projectBadge,index) in projectBadges"
                    :key="index"
                    :data="projectBadge"
                />  
            </div> 
        </div>

         <div class="box-shadow  bg-white p-6 rounded-2xl"> 
            <TypoHeaderText size="3xl" customClass="!font-normal leading-6 mb-4">
                Level up
            </TypoHeaderText>  
            
            <div class="w-full flex flex-row space-x-4 flex-nowrap no-scrollbar overflow-x-auto scrollbar-hide"> 
                <CardTypeA 
                    v-for="(levelUp,index) in levelUps"
                    :key="index"
                    :data="levelUp"
                />  
            </div> 
        </div>

         <div class="box-shadow  bg-white p-6 rounded-2xl"> 
            <TypoHeaderText size="3xl" customClass="!font-normal leading-6 mb-4">
                Event badges
            </TypoHeaderText>  
           
            <div class="w-full flex flex-row space-x-4 flex-nowrap no-scrollbar overflow-x-auto scrollbar-hide"> 
                <CardTypeA 
                    v-for="(eventBadge,index) in eventBadges"
                    :key="index"
                    :data="eventBadge"
                />  
            </div> 
        </div>
    </div>
</template>

<script setup lang="ts"> 
const tasks =  ref([
    { id: '11', title: "Scripted", imageUrl: "/images/gallery-project-2.png"},
    { id: '12', title: "Scripted", imageUrl: "/images/gallery-project-3.png"},
    { id: '13', title: "Test me", imageUrl: "/images/gallery-project-1.png"},
    { id: '34', title: "Awake", imageUrl: "/images/gallery-project-2.png"}, 
    { id: '178', title: "Scripted", imageUrl: "/images/gallery-project-1.png"},
])
const eventBadges =  ref([
    { id: '11', title: "Scripted", imageUrl: "/images/gallery-project-3.png"},
    { id: '12', title: "Scripted", imageUrl: "/images/gallery-project-1.png"},
    { id: '13', title: "Test me", imageUrl: "/images/gallery-project-2.png"},
    { id: '34', title: "Awake", imageUrl: "/images/gallery-project-1.png"}, 
    { id: '178', title: "Scripted", imageUrl: "/images/gallery-project-3.png"},
])
const projectBadges =  ref([
    { id: '11', title: "Scripted", imageUrl: "/images/gallery-project-2.png"},
    { id: '12', title: "Scripted", imageUrl: "/images/gallery-project-1.png"},
    { id: '13', title: "Test me", imageUrl: "/images/gallery-project-3.png"},
    { id: '34', title: "Awake", imageUrl: "/images/gallery-project-2.png"}, 
    { id: '178', title: "Scripted", imageUrl: "/images/gallery-project-1.png"},
])
const levelUps =  ref([
    { id: '11', title: "Scripted", imageUrl: "/images/gallery-project-3.png"},
    { id: '12', title: "Scripted", imageUrl: "/images/gallery-project-2.png"},
    { id: '13', title: "Test me", imageUrl: "/images/gallery-project-1.png"},
    { id: '34', title: "Awake", imageUrl: "/images/gallery-project-3.png"}, 
    { id: '178', title: "Scripted", imageUrl: "/images/gallery-project-2.png"},
])
</script>
 
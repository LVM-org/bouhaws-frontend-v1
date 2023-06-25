<template> 
    <div class="flex flex-col space-y-3">
        <ImageLoader
            :photoUrl="data?.imageUrl"
            customClass="w-[7rem] h-[8rem] rounded-[10px] flex flex-col justify-between item-start"
        />  

        <TypoHeaderText :custom-class="'!font-normal !text-sm text-center'">
            {{data?.title}}
        </TypoHeaderText>
    </div> 
</template>

<script setup lang="ts">
const props = defineProps({
    data: {
        type: Object,
        default: {}
    },
    isBagdes: {
        type: Boolean,
        default: false
    }
})
</script>

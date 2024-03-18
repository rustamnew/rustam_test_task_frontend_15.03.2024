<script setup>
import IconArrow from '~/components/icons/IconArrow.vue'

const _props = defineProps({
    item: Object,
})

function truncate(string, maxlength) {
    return (string.length > maxlength) ? `${string.slice(0, maxlength - 1)}…` : string
}
</script>

<template>
    <div class="mb-2 sm:mb-3 last:mb-0 p-4 md:p-5 rounded-[20px] bg-[#F5F5F5]">
        <q-img :src="item.image_src" class="float-left w-12 h-12 md:w-35 md:h-35 rounded-[9.6px] md-rounded-8 shrink-0 mr-3 sm:mr-5" />

        <div class="pt-1 ml-auto max-w-[84%]">
            <h3 class="text-h3_mobile sm:text-h3 font-semibold">
                {{ item.name }}
            </h3>

            <TagList v-if="item.tags" :items="item.tags" />
        </div>

        <p v-if="item.description" class="text-base mt-2 sm:mt-3">
            {{ truncate(item.description, 124) }}
        </p>
    </div>
</template>

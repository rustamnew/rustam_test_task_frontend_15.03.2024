<script setup>
import IconEye from '~/components/icons/IconEye.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'

const props = defineProps({
    item: Object,
})

const status = ref(props.item.status)

function changeStatus(newValue) {
    status.value = newValue
}
</script>

<template>
    <div class="catalog-item p-4 md:p-2 h-full w-full lg:w-[26.875rem] md:mb-9 last:mb-[4.8rem]">
        <div v-if="item.image_src" class="p-0 mb-4 relative" style="background-image: url('');">
            <q-img :src="item.image_src" class="rounded-2xl h-[20.5rem] md:h-80 w-full">
                <div class="flex absolute top-2 left-2 bg-transparent !p-0 w-[95%]">
                    <div v-if="item.views" class="rounded-xl h-8 px-2 bg-[#1B1D22]/60 flex items-center mr-1">
                        <IconEye />
                        <span class="text-sm font-medium ml-2">{{ item.views }}</span>
                    </div>

                    <div v-if="item.time" class="rounded-xl h-8 px-2 bg-[#1B1D22]/60 flex items-center">
                        <IconCalendar />
                        <span class="text-sm font-medium ml-2">{{ item.time }}</span>
                    </div>

                    <button class="rounded-xl h-8 px-2 bg-[#F5F5F5] ml-auto text-black text-sm flex border border-[#DBDBDB] sm:hidden items-center">
                        Действия
                    </button>
                </div>
            </q-img>
        </div>

        <div v-if="item.price" class="px-1 mb-1 md:mb-3">
            <span class="text-lg">{{ item.price }}</span>
            <span v-if="item.price_type">{{ item.price_type }}</span>
        </div>

        <h5 v-if="item.title" class="text-base px-1 mb-2">
            {{ item.title }}
        </h5>

        <hr style="border: #E8E8E8; color: #E8E8E8; background-color: #E8E8E8; height: 1px;">

        <div class="flex flex-nowrap items-center justify-between mt-3 px-1">
            <template v-if="!status || status === 0">
                <div class="text-sm mr-3 text-darkgray">
                    Увеличьте количество просмотров
                </div>

                <q-btn class="rounded-xl bg-darkgreen py-2 px-3" text-color="white" label="Продвигать" @click="changeStatus(1)" />
            </template>

            <template v-if="status === 1">
                <span class="w-full mt-3 text-darkgreen text-base text-center">Объявление продвигается</span>
            </template>

            <template v-if="status === 2">
                <span class="w-full mt-3 text-red text-base text-center">Объявление скрыто</span>
            </template>
        </div>
    </div>
</template>

<style scoped>
    .bg-darkgreen:deep(.q-btn__content > span) {
        @apply text-base normal-case
    }
</style>

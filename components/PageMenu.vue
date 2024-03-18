<script setup>
import { useDataStore } from '~/store/data'

const dataStore = useDataStore()

const router = useRouter()
const route = useRoute()

const company = ref(await dataStore.getData('company'))

const showPhone = ref(false)

const menu = ref([])
const routes = router.getRoutes()

const menu_array = []

routes.forEach((item) => {
    let needSort = false

    if (item.name && item.path && item.path !== '/' && item.path !== '/auth') {
        if (item.meta.order > 0)
            needSort = true

        menu_array.push(item)
    }

    if (needSort) {
        function compareOrders(a, b) {
            return a.meta.order - b.meta.order
        }
        menu_array.sort(compareOrders)
    }

    menu.value = menu_array
})
</script>

<template>
    <div class="flex flex-col-reverse sm:flex-col items-center border-transparent overflow-hidden">
        <div v-if="company" class="hidden sm:!flex flex-col items-center pt-6 sm:pt-0" :class="route.path === '/about' ? '!flex' : ''">
            <q-img :src="company.image_src" alt="logo" class="rounded-8 w-[120px] h-[120px] mb-6" />

            <h3 class="text-h3 font-semibold mb-[0.55rem]">
                {{ company.name }}
            </h3>

            <TagList v-if="company.tags" :items="company.tags" />

            <div v-if="company.phone" class="hidden sm:!flex mt-[1.4rem]">
                <button v-if="!showPhone" class="bg-darkgreen hover:bg-[#378a77] text-white text-base py-4 px-5 rounded-xl" @click="showPhone = true">
                    Показать номер телефона
                </button>

                <a v-if="showPhone" class="text-darkgreen text-3xl hover:underline flex h-14" :href="`tel:${company.phone}`">{{ company.phone }}</a>
            </div>
        </div>

        <div class="w-full justify-center pb-2 flex flex-nowrap px-4 md:px-0 mt-2 md:mt-8 md:pb-8 overflow-x-auto border-[#CCCCCC] border-b">
            <button v-for="item in menu" :key="item.path" class="shrink-0 bg-gray hover:bg-lightgray rounded-xl py-2 px-3 border mx-1 text-base font-medium" :class="route.path === item.path ? 'border-black' : 'border-transparent'" @click="router.push({ path: item.path })">
                {{ item.name }}

                <span
                    v-if="company
                        && company.counts
                        && company.counts[item.path.replace('/', '')]" class="text-base text-darkgray"
                >
                    {{ company.counts[item.path.replace('/', '')] }}
                </span>
            </button>
        </div>
    </div>
</template>

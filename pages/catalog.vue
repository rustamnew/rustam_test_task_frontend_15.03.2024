<script setup>
import { useDataStore } from '~/store/data'

useHead({
    title: 'Товары и услуги',
})
definePageMeta({
    layout: 'default',
    name: 'Товары и услуги',
    middleware: 'auth',
    order: 1,
})

const dataStore = useDataStore()

const catalog = ref(await dataStore.getData('catalog'))

const categoryFilter = ref(catalog.value.categories[0])

// TODO: Сделать фильтр категорий
</script>

<template>
    <q-select v-model="categoryFilter" outlined :options="catalog.categories" class="select w-[90%] sm:w-[438px] rounded-xl overflow-hidden mt-6 mb-4 md:mb-6 " @update:model-value="console.log($event)" />

    <div class="flex gap-[0.4rem] justify-center">
        <CatalogItem v-for="item in catalog.items" :key="item.id" :item="item" />
    </div>
</template>

<style>
.q-field--outlined .q-field__control:before {
    border-radius: 0.75rem;
    background-color: #EDEDED;
}
.q-field--outlined .q-icon.q-select__dropdown-icon {
    font-size: 1.875rem;
}
.q-field--outlined .q-field__native.row.items-center > span{
    @apply text-base font-medium tracking-normal pl-1
}
</style>

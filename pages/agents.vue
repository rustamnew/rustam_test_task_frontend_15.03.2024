<script setup>
import { useDataStore } from '~/store/data'

useHead({
    title: 'Агенты',
})
definePageMeta({
    layout: 'default',
    name: 'Агенты',
    order: 2,
})

const dataStore = useDataStore()

const items = ref(await dataStore.getData('agents'))
</script>

<template>
    <div class="flex flex-col w-full sm:w-medium mt-5 md:mt-8 mb-16">
        <AgentItem v-for="item in items" :key="item.id" :item="item" />
    </div>
</template>

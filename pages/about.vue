<script setup>
import { useDataStore } from '~/store/data'

useHead({
    title: 'О компании',
})
definePageMeta({
    layout: 'default',
    name: 'О компании',
    order: 3,
})

const dataStore = useDataStore()

const about = ref(await dataStore.getData('about'))
</script>

<template>
    <div class="w-full md:w-medium mt-6 md:mt-8 mb-16">
        <AboutItem v-for="item in about" :key="item.id" :item="item" />
    </div>
</template>

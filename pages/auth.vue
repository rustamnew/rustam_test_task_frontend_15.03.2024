<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/store/auth'

const router = useRouter()

useHead({
    title: 'Вход',
})
definePageMeta({
    layout: 'empty',
    name: 'Вход',
})

const authStore = useAuthStore()

const username = ref(null)
const password = ref(null)

const panel = ref('auth')

async function onSubmitAuth() {
    const response = await authStore.auth({
        username: username.value,
        password: password.value,
    })
    if (response.status === 'success')
        router.push({ path: '/catalog' })
}

async function onSubmitRegister() {
    const response = await authStore.auth({
        username: 'admin',
        password: 'admin',
    })
    if (response.status === 'success')
        router.push({ path: '/catalog' })
}

function switchPanel(newPanel) {
    panel.value = newPanel
}
</script>

<template>
    <q-card class="w-4/5 mt-[10vh] sm:w-96 lg:mt-[20vh]">
        <q-card-section v-if="panel === 'auth'">
            <h1 class="text-3xl mb-6">
                Вход
            </h1>

            <q-form
                class="q-gutter-md"
                @submit="onSubmitAuth"
            >
                <q-input v-model="username" filled hint="Логин" />
                <q-input v-model="password" filled type="password" hint="Пароль" />

                <div class="flex justify-center w-full">
                    <q-btn label="Войти" type="submit" color="primary" />
                </div>
            </q-form>

            <div class="flex flex-col sm:flex-row sm:flex-nowrap justify-between items-center mt-4">
                <span class="text-darkgray">У Вас нет аккаунта? </span>
                <q-btn flat size="md" label="Зарегистрируйтесь" color="primary" @click="switchPanel('register')" />
            </div>
        </q-card-section>

        <q-card-section v-if="panel === 'register'">
            <h1 class="text-3xl mb-6">
                Регистрация
            </h1>

            <q-form
                class="q-gutter-md"
                @submit="onSubmitRegister"
            >
                <q-input v-model="username" filled hint="Логин" />
                <q-input v-model="password" filled type="password" hint="Пароль" />

                <div class="flex justify-center w-full">
                    <q-btn label="Зарегистрироваться" type="submit" color="primary" />
                </div>
            </q-form>

            <div class="flex flex-col sm:flex-row sm:flex-nowrap justify-between items-center mt-4">
                <span class="text-darkgray">Есть аккаунт?</span>
                <q-btn flat size="md" label="Войти" color="primary" @click="switchPanel('auth')" />
            </div>
        </q-card-section>
    </q-card>
</template>

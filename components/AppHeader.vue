<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/store/auth'
import IconMenu from '~/components/icons/IconMenu.vue'
import IconCart from '~/components/icons/IconCart.vue'

const router = useRouter()

const user_expanded = ref(false)

const authStore = useAuthStore()

function toggleUserMenu() {
    user_expanded.value = !user_expanded.value
}

function logout() {
    authStore.logout()
    router.push({ path: '/auth' })
}
</script>

<template>
    <header class="flex flex-nowrap items-center bg-bisque p-4 sm:py-0 sm:pl-10 sm:pr-8 h-16">
        <button class="flex md:hidden">
            <q-icon class="cursor-pointer text-[19px]" name="fa-solid fa-bars" />
        </button>

        <div class="logo flex shrink-0 items-center mx-auto">
            <a href="/" class="text-logo font-semibold" style="font-family: 'Noto Serif';">
                Annoncé
            </a>
        </div>

        <button class="hidden md:!flex shrink-0 h-12 py-3 px-4 bg-gray rounded-3xl flex-nowrap items-center ml-9 hover:bg-lightgray">
            <IconMenu class="mr-[0.2rem]" />
            <span class="text-base text-[14px] font-medium">Все категории</span>
        </button>

        <!-- Разделитель -->
        <div class="hidden md:!flex w-full" />

        <template v-if="authStore.authenticated">
            <div class="shrink-0 items-center cursor-pointer hidden lg:!flex lg:ml-5">
                <q-icon name="fa-solid fa-location-dot" class="mr-[0.3rem] text-xs" />
                <span class="text-base">{{ authStore.user.address }}</span>
            </div>

            <div class="shrink-0 hidden lg:!flex lg:mx-8 w-px h-8 bg-[#CCCCCC]" />
        </template>

        <NuxtLink to="/catalog" class="hidden md:!flex ml-[5px] whitespace-nowrap text-base text-darkgreen font-medium hover:underline">
            Разместить объявление
        </NuxtLink>

        <NuxtLink v-if="!authStore.authenticated" to="/auth" class="mx-6">
            <q-btn class="rounded-lg bg-darkgreen " text-color="white" label="Войти" />
        </NuxtLink>

        <template v-if="authStore.authenticated">
            <div class="h-12 shrink-0 hidden md:!flex flex-nowrap rounded-3xl overflow-hidden ml-9">
                <div class="h-full flex items-center bg-gray pl-2  transition-all duration-500" :class="user_expanded ? 'w-20' : 'w-3'">
                    <div class="opacity-0" :class="user_expanded ? 'delay-400 opacity-100' : 'delay-0 opacity-0'">
                        <q-btn class="rounded-lg bg-darkgreen " size="sm" text-color="white" label="Выйти" @click="logout()" />
                    </div>
                </div>
                <div class="h-full bg-gray p-1 flex items-center justify-end relative">
                    <q-icon class="cursor-pointer text-[19px] mr-2.5" :name="user_expanded ? 'fa-solid fa-x' : 'fa-solid fa-bars'" @click="toggleUserMenu()" />

                    <q-avatar size="20" class="h-10 w-10">
                        <q-img :src="authStore.user.avatar_src" />
                    </q-avatar>
                </div>
            </div>
        </template>

        <button class="flex sm:hidden">
            <IconCart />
        </button>
    </header>
</template>

import { useAuthStore } from '~/store/auth'

export default defineNuxtRouteMiddleware(async (/* to, from */) => {
    const authStore = useAuthStore()
    const userObject = computed(() => authStore.authenticated)

    if (!userObject.value)
        return navigateTo('/auth')
})

export default defineNuxtRouteMiddleware(async (to) => {
    if (to.path === '/')
        return navigateTo('/catalog')
})

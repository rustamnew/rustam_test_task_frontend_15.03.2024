export const useAuthStore = defineStore('auth', () => {
    const user = ref({})
    const access_token = ref('')
    const authenticated = ref(false)

    async function auth(formData) {
        const { data, error } = await useFetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
            }),
        })

        if (data.value.response.data) {
            user.value.login = data.value.response.data.login
            user.value.address = data.value.response.data.address
            user.value.avatar_src = data.value.response.data.avatar_src

            access_token.value = data.value.response.data.access_token

            authenticated.value = true

            return data.value.response
        }

        if (error)
            return error
    }

    function getUser() {
        return user.value
    }

    async function logout() {
        user.value = {}
        access_token.value = ''
        authenticated.value = false
    }

    return { fetch, auth, register, logout, user, access_token, authenticated, getUser }
})

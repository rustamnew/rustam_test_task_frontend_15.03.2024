import { useAuthStore } from './auth'

export const useDataStore = defineStore('dataStore', () => {
    const data = ref({})
    const authStore = useAuthStore()

    async function fetchData(data_type) {
        let response = null

        const params = {
            headers: {},
        }

        if (authStore.access_token)
            params.headers.Authorization = `Bearer ${authStore.access_token}`

        response = await useFetch(`/api/${data_type}`, params)

        if (!response.data.value.error)
            data.value[data_type] = response.data.value
        else
            data.value[data_type] = {}

        return data.value[data_type]
    }

    async function getData(data_type) {
        if (!data.value[data_type])
            data.value[data_type] = []

        if (Object.keys(data.value[data_type]).length === 0)
            return await fetchData(data_type)

        else
            return data.value[data_type]
    }

    return { data, fetch, getData }
})

export default defineEventHandler(async (event) => {
    const response = {
        status: '',
        data: {},
        headers: {},
    }
    const headers = getRequestHeaders(event)

    response.headers = headers

    const body = await readBody(event)

    if (body.username === 'admin' && body.password === 'admin') {
        response.status = 'success'
        response.data = {
            login: body.username,
            address: 'Ростов-на-Дону',
            avatar_src: '/images/9.png',
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs',
        }
    }
    else {
        response.status = 'error'
        response.data = {
            error_message: 'Неправильные данные для входа',
        }
    }

    return { response }
})

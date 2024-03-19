export default defineEventHandler(async (event) => {
    const headers = getRequestHeaders(event)
    const access_token = headers.authorization

    // Условная проверка токена
    if (!access_token) {
        return {
            error: 'Bad access token',
        }
    }
    else {
        return {
            categories: [
                {
                    id: 7800,
                    label: 'Все товары и услуги',
                    value: 0,
                    eventa: event,
                },
                {
                    id: 7801,
                    label: 'Всё для дома',
                    value: 1,
                },
                {
                    id: 7802,
                    label: 'Транспорт',
                    value: 2,
                },
                {
                    id: 7803,
                    label: 'Недвижимость',
                    value: 3,
                },
            ],
            items: [
                {
                    id: 1001,
                    title: 'Сlavia Nord Grand сценическое цифровое пианино',
                    views: 750,
                    time: '2 дня',
                    price: '450 500 ₽',
                    image_src: '/images/1.png',
                    status: 1,
                    category: 1,
                },
                {
                    id: 1002,
                    title: 'Hyundai Sonata 2.0 AT, 2023, 30 км',
                    views: 255,
                    time: '4 дня',
                    price: '3 285 000 ₽',
                    image_src: '/images/2.png',
                    status: 0,
                    category: 2,
                },
                {
                    id: 1003,
                    title: '2-к. квартира, 46 м², 1/5 эт.',
                    views: 255,
                    time: '2 дня',
                    price: '4 800 000 ₽',
                    image_src: '/images/3.png',
                    status: 0,
                    category: 3,
                },
                {
                    id: 1004,
                    title: 'Старые барабаны',
                    views: 255,
                    time: '2 дня',
                    price: '7 500 ₽',
                    price_type: 'шт',
                    image_src: '/images/4.png',
                    status: 0,
                    category: 1,
                },
                {
                    id: 1005,
                    title: 'DMX сплиттер RJ45 to 4x XLR Stairville',
                    views: 255,
                    time: '2 дня',
                    price: '7 500 ₽',
                    image_src: '/images/5.png',
                    status: 0,
                    category: 1,
                },
                {
                    id: 1006,
                    title: 'Мотоцикл honda',
                    views: 255,
                    time: '2 дня',
                    price: '217 500 ₽',
                    image_src: '/images/6.png',
                    status: 0,
                    category: 2,
                },
                {
                    id: 1007,
                    title: 'Иж юпитер 5',
                    views: 750,
                    time: '2 дня',
                    price: '17 900 ₽',
                    image_src: '/images/7.png',
                    status: 0,
                    category: 2,
                },
                {
                    id: 1008,
                    title: 'Пылесос кёрхер с водяным мешком для сбора пыли',
                    price: '7 500 ₽',
                    image_src: '/images/8.png',
                    status: 2,
                    category: 1,
                },
            ],
        }
    }
})

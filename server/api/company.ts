export default defineEventHandler(() => {
    return {
        name: 'Наследие',
        phone: '+79872222222',
        image_src: '/images/16.png',
        counts: {
            agents: 5,
        },
        tags: [
            {
                title: 'Документы проверены',
                icon_src: 'icons/verified.svg',
            },
            {
                title: '4.7',
                icon_src: 'icons/star.svg',
                link: '#',
            },
            {
                title: '19 отзывов',
                link: '#',
            },
        ],
    }
})

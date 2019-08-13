module.exports = {
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
        ],
        sidebar: [
            '/',
            '/Test-1',
            ['/page-b', 'Explicit link text']
        ]
    }
}
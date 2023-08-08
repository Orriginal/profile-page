import colors from 'tailwindcss/colors'

module.exports = {
    content: [
        './public/**/*.html',
        './index.html',
        './src/**/*.{js,ts,vue,tsx,jsx}'
    ],
    theme: {
        colors: {
            ...colors,
            'brand-primary': '#0650D0',
            'brand-primary-light': '#619bff',
            'brand-secondary': '#ffffff',
            'brand-white': '#ffffff',
            'brand-background': '#EEEEEC',
            'brand-text-primary': '#ffffff',
            'brand-text-secondary': '#272727',
            'brand-border-color': '#272727',
        },
        extend: {
            height: {
                'full-vh': '100vh',
            },
            padding: {
                '2.75': '11px'
            }
        }
    },
    plugins: []
}


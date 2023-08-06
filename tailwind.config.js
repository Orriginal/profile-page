/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{js,ts,vue,tsx,jsx}'
    ],
    theme: {
        colors: {
            'primary': '#121063',
            'primary-hover': '#121063',
            'secondary': '#565584',
            'secondary-hover': '#565584',
            'white': '#ffffff'
        },
        extend: {}
    },
    plugins: []
}


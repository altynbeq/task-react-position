import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./public/index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
}

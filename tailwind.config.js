/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'beige': '#f6f1e8',
                'dot': '#d7cfc4',
            },
            fontFamily: {
                'scratchy': ['"Caveat"', 'cursive'],
                'body': ['"Comic Sans MS"', '"Comic Sans"', 'cursive'],
            },
        },
    },
    plugins: [],
}

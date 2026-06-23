module.exports = {
    content: ['./src/**/*.{js,jsx,html,ejs}'],
    theme: {
        extend: {
            colors: {
                'blue': {
                    'light': '#0083f5',
                    DEFAULT: '#005ba9',
                    'dark': '#00417a'
                },
                background: '#f4f7fd',
                'primary': '#057e9cff'
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
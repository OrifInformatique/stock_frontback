module.exports = {
    content: ['./src/**/*.{js,jsx,html,ejs}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#8ab9ec',
                    DEFAULT: '#1b5faa',
                    dark: '#103b69',
                },
                secondary: {
                    light: '#ebe6d5',
                    DEFAULT: '#d6cca6',
                    dark: '#a58d5f',
                },
                night: '#111111',
                white: '#ebebeb',
            },
            fontFamily: {
                display: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
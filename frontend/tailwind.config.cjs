module.exports = {
    content: ['./src/**/*.{js,jsx,html,ejs}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#7cb0ea',
                    DEFAULT: '#1b5faa',
                    dark: '#103b69',
                },
                secondary: {
                    light: '#ebe6d5',
                    DEFAULT: '#d6cca6',
                    dark: '#a58d5f',
                },
                night: '#111111',
                white: '#ffffff',
                success: '#257428',
                warning: '#a35321',
                danger: '#9c0f0f',
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
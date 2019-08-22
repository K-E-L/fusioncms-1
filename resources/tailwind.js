const defaultTheme = require('tailwindcss/defaultTheme')

const screens = {
    'xs': '320px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    'xxl': '1600px',
    'xxxl': '1800px',
}

const spacing = {
    '32': '8rem',

    '45px': '45px',
    '50px': '50px',
    '60px': '60px',
    '75px': '75px',
    '90px': '90px',
    '100px': '100px',
    '250px': '250px',
    '300px': '300px',
    '400px': '400px',

    'full-sidebar-open': 'calc(100% - 250px)',
    'full-sidebar-collapsed': 'calc(100% - 90px)',
}

module.exports = {
    theme: {
        screens: screens,

        extend: {
            colors: {
                'emoji': '#fbd043',

                'smoke': {
                    100: 'rgba(35, 42, 60, 0.1)',
                    200: 'rgba(35, 42, 60, 0.2)',
                    300: 'rgba(35, 42, 60, 0.3)',
                    400: 'rgba(35, 42, 60, 0.4)',
                    500: 'rgba(35, 42, 60, 0.5)',
                    600: 'rgba(35, 42, 60, 0.6)',
                    700: 'rgba(35, 42, 60, 0.7)',
                    800: 'rgba(35, 42, 60, 0.8)',
                    900: 'rgba(35, 42, 60, 0.9)',
                },

                'primary': {
                    100: '#FFEEE9',
                    200: '#FFD5C8',
                    300: '#FFBCA7',
                    400: '#FF8964',
                    500: '#FF5722',
                    600: '#E64E1F',
                    700: '#993414',
                    800: '#73270F',
                    900: '#4D1A0A',
                },

                'secondary': {
                    100: '#EDFAFC',
                    200: '#D3F3F8',
                    300: '#B8ECF3',
                    400: '#82DEEA',
                    500: '#4DD0E1',
                    600: '#45BBCB',
                    700: '#2E7D87',
                    800: '#235E65',
                    900: '#173E44',
                },

                'info': { ...defaultTheme.colors.blue },
                'success': { ...defaultTheme.colors.green },
                'warning': { ...defaultTheme.colors.yellow },
                'danger': { ...defaultTheme.colors.purple },
            },

            fontFamily: {
                sans: [
                    'Source Sans Pro',
                    ...defaultTheme.fontFamily.sans,
                ],

                serif: [
                    'Montserrat',
                    ...defaultTheme.fontFamily.serif,
                ],
            },

            spacing: {
                ...spacing,
            },

            minWidth: {
                ...screens,
                ...spacing,
            },

            width: {
                ...screens,
                ...spacing,
            },

            minHeight: {
                ...screens,
                ...spacing,
            },

            height: {
                ...screens,
                ...spacing,
            },

            padding: {
                ...spacing,
            }
        }
    },

    plugins: [],
}